import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 1000px;

  ${MEDIA.PHONE`
    display: block;
    padding: 1rem 2rem;
  `};
`
