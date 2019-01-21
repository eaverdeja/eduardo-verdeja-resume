import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import funstonTheme from 'typography-theme-funston'

funstonTheme.baseFontSize = '17px' // was 20px.

funstonTheme.plugins = [new CodePlugin()]

const typography = new Typography(funstonTheme)

export default typography
