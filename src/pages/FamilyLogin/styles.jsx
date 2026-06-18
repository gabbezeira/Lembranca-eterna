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
    justify-content: center;
    
    .leftContent {
      display: none;
    }

    .rightContent {
      width: 100%;
      flex: 1;
      background-color: var(--white-color);
      border-radius: 0;
      margin-top: 0;
      padding-top: 0;
      justify-content: center;
  
      .formArea {
        align-items: center;
        padding: 0rem 4rem;
      }
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    height: 100dvh;

    .leftContent {
      display: none; 
    }

    .rightContent {
      height: 100dvh; 
      flex: 1;
      border-radius: 0;
      padding-top: 0;
      justify-content: center;
      
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
