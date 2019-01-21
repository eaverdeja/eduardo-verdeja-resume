import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1rem;

      & + li {
        margin-left: 2rem;
      }
    }

    li a:hover {
      color: #4d00c3;
    }

    ${MEDIA.PHONE`
      flex-direction: column;
      
      li {
        margin-left: 1rem;

        & + li {
          margin-left: 1rem;
        }
      }
    `};
  }
`
