/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Gallery from 'components/gallery'
import Modal from 'containers/modal'
import { graphql } from 'gatsby'
import toPdf from '../utils/pdf'
import './resume.css'

class Index extends Component {
  state = {
    showResume: false,
  }

  constructor(props) {
    super(props)
    this.resumeRef = React.createRef()
  }

  downloadResume = () => {
    this.setState({ showResume: true }, async () => {
      if (toPdf) {
        await toPdf(this.resumeRef.current)
      }
      this.setState({ showResume: false })
    })
  }

  render() {
    const data = this.props.data
    return (
      <Layout onDownloadResume={this.downloadResume}>
        <Box>
          <div
            className="resume"
            dangerouslySetInnerHTML={{
              __html: data.homeJson.content.childMarkdownRemark.html,
            }}
          />
          <div
            className="resume"
            style={{
              overflow: 'hidden',
              position: 'relative',
              top: '0000px',
            }}
          >
            <div
              style={{
                display: this.state.showResume ? 'block' : 'none',
                backgroundColor: '#f5f5f5',
                width: '210mm',
                minHeight: '297mm',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '3rem',
              }}
              ref={this.resumeRef}
              dangerouslySetInnerHTML={{
                __html: data.resumeJson.content.childMarkdownRemark.html,
              }}
            />
          </div>
        </Box>
        <Gallery items={data.homeJson.gallery} />
        <Box>
          <Modal>
            <video
              style={{ display: 'block', margin: 'auto' }}
              src="https://i.imgur.com/AMzVDF9.mp4"
              playsInline
              loop
              autoPlay
              muted
            />
          </Modal>
        </Box>
      </Layout>
    )
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      content {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        copy
        title
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    resumeJson {
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
