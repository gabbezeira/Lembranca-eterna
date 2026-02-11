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

.formContainer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  .buttonLink {
    text-decoration: none;
    width: 100%;
  }
  
  .input {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 0.25rem;

    .textLabel {
      font-size: 0.875rem;
      color: var(--gray-color);
      font-weight: 500;
    }

    .textInput {
      height: 60px;
      width: 100%;

      border: 0.5px solid var(--stroke-color);
      border-radius: 0.5rem;
      padding: 0rem 0.75rem;

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
  }
}

.helpLink {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-color);
  text-decoration: underline;
}

  /* Mobile */
  @media (max-width: 480px) {
    gap: 0.5rem;
    
    .title {
      font-size: 1.125rem; 
      margin-bottom: 0.25rem;
      text-align: center;
    }
    
    .formContainer {
      gap: 0.625rem; 
      
      .input {
        gap: 0.125rem;
        
        .textLabel {
           font-size: 0.75rem; 
        }

        .textInput {
          height: 40px;
          font-size: 0.8125rem; 
          padding: 0 0.5rem;

          &::placeholder {
            font-size: 0.8125rem;
          }
        }
      }
    }
    
    button {
      height: 2.5rem !important; 
      font-size: 0.8125rem !important; 
      margin-top: 0.25rem;
    }

    .helpLink {
       font-size: 0.75rem;
       margin-top: 0.25rem;
    }
  }

  /* Large Screens (Full HD+) */
  @media (min-width: 1440px) {
    gap: 3rem;

    .title {
      font-size: 2rem;
    }

    .formContainer {
      gap: 2rem;

      .input {
        .textLabel {
          font-size: 1rem;
        }

        .textInput {
          height: 4.5rem;
          font-size: 1.125rem;
        }
      }
    }

    button {
      height: 4.5rem !important;
      font-size: 1.125rem !important;
    }
    
    .helpLink {
      font-size: 1rem;
    }
  }

  /* Ultra Wide (2K/4K) */
  @media (min-width: 1920px) {
    gap: 4rem;

    .title {
      font-size: 2.5rem;
    }

    .formContainer {
      gap: 2.5rem;

      .input {
        .textLabel {
          font-size: 1.25rem;
        }

        .textInput {
          height: 5rem;
          font-size: 1.25rem;
        }
      }
    }

    button {
      height: 5rem !important;
      font-size: 1.25rem !important;
    }
    
    .helpLink {
      font-size: 1.125rem;
    }
  }
`
