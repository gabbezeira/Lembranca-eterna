import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${({ $position }) => $position || 'fixed'} !important;
  z-index: 1;
  background-color: var(--gray-white-color);

  height: 5.625rem;
  width: 100%;
  padding: ${({ $padding }) => $padding || '0rem 10rem'};

  border-bottom: 0.5px solid var(--stroke-color);

  .logo {
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--black-color);
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    flex-direction: row;

    .buttonLink {
      text-decoration: none;
    }
  }

  /* Laptop / Hybrid */
  @media (max-width: 1024px) {
    padding: 0rem 4rem !important;
  }

  /* Tablet */
  @media (max-width: 768px) {
    height: 5rem;
    padding: 0rem 2rem !important;

    .logo {
      font-size: 1.125rem;
    }

    .buttons {
      gap: 0.5rem;
      
      button {
        padding: 0.5rem 0.75rem;
        font-size: 0.75rem !important;
      }

      .buttonLink button {
         text-decoration: none;
      }

      .buttonText {
        display: none !important;
      }
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 0rem 1rem !important;
    height: 4.5rem;

    .logo {
      font-size: 1rem;
    }

    .buttons {
      gap: 0.25rem;

      button {
        padding: 0.4rem 0.6rem;
      }
    }
  }
`
