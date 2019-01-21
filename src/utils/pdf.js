let toPdf = null

if (typeof window !== 'undefined') {
  const html2canvas = require('html2canvas')
  const jsPDF = require('jspdf')

  toPdf = async target => {
    const imgWidth = 210
    const pageHeight = 297
    let position = 0

    const canvas = await html2canvas(target)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4', true)

    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight

    pdf.addImage(
      imgData,
      'PNG',
      0,
      position,
      imgWidth,
      imgHeight,
      undefined,
      'FAST'
    )
    heightLeft -= pageHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    pdf.save('eduardo-verdeja-resume.pdf')
  }
}

module.exports = toPdf
