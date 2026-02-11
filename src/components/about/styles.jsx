import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

width: 100%;
height: 100%;
background-color: var(--primary-color);
padding: 0rem 6.75rem;

gap: 3rem;

.illustration {
  height: auto;
  width: 100%;
}

.textContent {
  display: flex;
  flex-direction: column;
  text-align: left;

  gap: 0.25rem;
  width: 100%;
  height: auto;

  .title {
    font-family: 'Poppins', sans-serif;
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--white-color);
  }

  .description {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--white-color);}
    line-height: 1.3;
}
  @media (max-width: 1024px) {
    padding: 0rem 3rem;
    
    .textContent {
      .title {
        font-size: 1.75rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1.5rem;
    justify-content: flex-start;
    background-color: transparent; /* Seamless integration */

    .illustration {
      max-width: 16rem; /* Slightly smaller to ensure fit */
      margin-bottom: 1rem;
    }

    .textContent {
      align-items: center;
      text-align: center;

      .title {
        color: var(--white-color); /* Corrected to white */
        font-size: 1.5rem;
      }

      .description {
        color: var(--white-color); /* Corrected to white */
        font-size: 0.875rem;
        text-align: center;
        max-width: 30rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1.5rem; /* Increased gap between illustration and text */
    justify-content: center;

    .illustration {
      max-width: 14rem;
      max-height: 25vh;
      width: auto;
      margin-bottom: 0;
    }
    
    .textContent {
       gap: 0.5rem;
       align-items: center;
       
       .title {
         display: none;
       }
       
       .description {
         display: block;
         font-size: 0.9rem;
         line-height: 1.3;
         text-align: center;
         max-width: 95%;
         
         display: block;
         -webkit-line-clamp: unset;
         overflow: visible;
       }
    }
  }

  /* Large Screens (Full HD+) */
  @media (min-width: 1440px) {
    .illustration {
      width: 80%; /* Grow with container */
      max-width: 30rem;
    }

    .textContent {
      .title {
        font-size: 2.5rem;
      }
      
      .description {
        font-size: 1.125rem;
      }
    }
  }

  /* Ultra Wide (2K/4K) */
  @media (min-width: 1920px) {
    gap: 5rem;
    
    .illustration {
      width: 100%;
      max-width: 40rem;
    }

    .textContent {
      gap: 1rem;
      max-width: 40rem; /* Prevent text from spanning too wide */
      
      .title {
        font-size: 3.5rem;
      }
      
      .description {
        font-size: 1.5rem;
        line-height: 2;
      }
    }
  }
`
