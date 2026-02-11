import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

width: 100%;
height: 100%;

gap: 2rem;

.title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--black-color);
}

.buttonLink {
  text-decoration: none;
}

.searchInput {
  height: 4rem;
  width: 100%;
  max-width: 30rem;

  border: 0.5px solid var(--stroke-color);
  border-radius: 3rem;
  padding: 0rem 1.5rem;

  background-color: var(--white-color);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  outline: none;

  &::placeholder {
    color: var(--stroke-color);
    font-size: 1rem;
    font-weight: 400;
  }
}

.helpLink {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-color);
  text-decoration: underline;
}
  /* Laptop */
  @media (max-width: 1024px) {
    .title {
      font-size: 1.5rem;
    }

    .searchInput {
      max-width: 25rem;
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    gap: 1.5rem;

    .title {
      font-size: 1.5rem;
      text-align: center;
    }

    .searchInput {
      max-width: 90%;
      height: 3.5rem;
      font-size: 0.9375rem;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    justify-content: center;
    gap: 1rem; /* Compact gap */

    .title {
      font-size: 1.125rem; /* Smaller title matching About */
      margin-bottom: 0.5rem;
    }

    .searchInput {
      max-width: 100%;
      height: 2.75rem; /* Tighter input */
      padding: 0 1rem;
      font-size: 0.875rem;
    }
    
    button {
       height: 2.5rem !important; /* Tighter button */
       font-size: 0.875rem !important;
       margin-top: 0.5rem;
    }
    
    .helpLink {
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }
  }
`
