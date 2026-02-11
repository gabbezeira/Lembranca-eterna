import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  padding: 0rem 31rem;

  @media (max-width: 479px) {
    padding: 0rem 2rem;
  }

  @media (min-width: 480px) {
    padding: 0rem 2rem;
  }

  @media (min-width: 768px) {
    padding: 0rem 10rem;
  }

  @media (min-width: 992px) {
    padding: 0rem 16rem;
  }

  @media (min-width: 1200px) {
    padding: 0rem 30rem;
  }
`
