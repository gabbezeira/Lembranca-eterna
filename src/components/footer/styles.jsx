import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.5rem; 
  width: 100%;

  border-top: 0.5px solid var(--stroke-color);

  .text {
    font-family: 'Poppins', sans-serif;
    font-size: 0.625rem;
    font-weight: 400;
    color: var(--gray-color); 

    .span {
      font-weight: 600;
      color: var(--black-color);
    }
  }
  @media (max-width: 480px) {
    height: 1.5rem;
    .text {
      font-size: 0.5rem;
    }
  }
`
