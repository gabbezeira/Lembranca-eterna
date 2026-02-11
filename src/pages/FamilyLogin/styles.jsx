import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100%;
min-height: 100dvh;

.leftContent {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
}

.rightContent {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 50%;

  .formArea {
    flex: 1;
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    padding: 0rem 8rem;
  }
}

  /* Laptop / Small Desktop */
  /* Laptop / Small Desktop / Tablet (Landscape) */
  @media (max-width: 1024px) {
    .leftContent {
      width: 45%;
    }

    .rightContent {
      width: 55%;
      
      .formArea {
        padding: 0 3rem; /* Reduced from 8rem to 3rem */
      }
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    
    .leftContent {
      display: flex;
      width: 100%;
      min-height: 50vh;
      height: auto;
      background-color: var(--primary-color);
      padding: 4rem 2rem;
    }

    .rightContent {
      width: 100%;
      flex: 1;
      background-color: var(--white-color);
      border-radius: 2rem 2rem 0 0;
      margin-top: -2rem;
      padding-top: 3rem;
  
      .formArea {
        align-items: flex-start;
        padding: 0rem 4rem;
      }
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    height: 100dvh;
    overflow: hidden;

    .leftContent {
      display: flex; /* Show it! */
      height: 52%; /* Reduced slightly to give form more room */
      min-height: auto;
      padding-bottom: 1rem;
      justify-content: flex-end;
      padding-top: 0;
    }

    .rightContent {
      height: 48%; /* Increased for form */
      flex: none;
      border-radius: 1.5rem 1.5rem 0 0;
      padding-top: 1.25rem; /* Less padding to push content up */
      
      .formArea {
        padding: 0 1.5rem;
        align-items: center;
      }
    }
  }

  /* Large Screens (Full HD) */
  @media (min-width: 1440px) {
    .leftContent, .rightContent {
      padding: 0; /* Remove padding to fill screen */
    }
    
    .rightContent {
        justify-content: center; /* Center form vertically */
    }
  }

  /* Ultra Wide (2K/4K) */
  @media (min-width: 1920px) {
    /* Maintain split screen ratio but ensure full bleed */
    
    .leftContent {
      width: 50%;
      /* Content centering handled by flex in main rule */
    }
    
    .rightContent {
      width: 50%;
      
      .formArea {
        max-width: 50rem; /* Increased from 40rem to allow form to widen */
        width: 100%;
      }
    }
  }
`
