import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100%;
min-height: 100dvh;

  .homeMenu {
    width: 50%;
    right: 0;
    top: 0;
    background-color: transparent;
    padding: 0 4.375rem;
    height: 5.625rem;
    position: fixed; /* Keep fixed on Desktop */
    z-index: 10;
  }

  .leftContent {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    /* About component has its own background, but we can enforce here if needed */
  }

  .rightContent {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    width: 50%;
    padding-top: 5.625rem; /* Space for the fixed menu */

    .searchArea {
      flex: 1;
      display: flex;
      justify-content: center; 
      align-items: center;
      width: 100%;
    }
  }

  /* Laptop / Small Desktop */
  @media (max-width: 1024px) {
    .homeMenu {
       padding: 0 4rem !important; /* Match Menu component style */
    }
  
    .leftContent {
      width: 45%;
    }

    .rightContent {
      width: 55%;
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;

    .homeMenu {
      width: 100%;
      left: 0;
      position: absolute !important; /* Scroll with page if needed, or fixed */
      background-color: transparent !important; /* Transparent on Blue */
      border-bottom: none;
      
      /* Force White Text for Blue Background */
      .logo {
        color: var(--white-color) !important;
      }
      
      /* Adjust buttons for blue background if necessary */
    }

    .leftContent {
      display: flex;
      width: 100%;
      min-height: 50vh; /* Allow to grow */
      height: auto;
      background-color: var(--primary-color);
      padding-top: 6rem; /* Space for menu + aesthetic spacing */
      padding-bottom: 4rem; /* Safe area for overlap */
    }

    .rightContent {
      width: 100%;
      flex: 1; /* Fill remaining space */
      background-color: var(--white-color);
      border-radius: 2rem 2rem 0 0;
      margin-top: -2rem;
      z-index: 2;
      
      justify-content: space-between; /* Space out search and footer */
      padding-top: 3rem;

      .searchArea {
        flex: 1; /* Pushes footer down and centers content */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        margin-top: 0;
      }
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    height: 100dvh; /* Enforce viewport height */
    overflow: hidden; /* Disable scroll */

    .homeMenu {
       padding: 0 1.5rem !important;
    }

    .leftContent {
       height: 55%; /* Increased to 55% */
       min-height: auto;
       padding-bottom: 0;
       justify-content: flex-end;
       padding-bottom: 2rem;
    }
    
    .rightContent {
      height: 45%; /* Reduced to 45% as requested */
      flex: none;
      border-radius: 1.5rem 1.5rem 0 0;
      padding-top: 1.5rem; /* Slight adjustment */
      
      .searchArea {
        padding: 0 1.5rem;
      }
    }
  }

  /* Large Screens (Full HD) */
  @media (min-width: 1440px) {
    /* Remove padding that causes background gaps */
    .leftContent, .rightContent {
      padding: 0; 
    }
  }

  /* Ultra Wide (2K/4K) */
  @media (min-width: 1920px) {
    /* Maintain split screen ratio */
    
    .leftContent {
      width: 50%;
      max-width: none;
      /* Padding moved to child component (About) */
    }
    
    .rightContent {
      width: 50%;
      max-width: none;
      
      .searchArea {
        max-width: 50rem;
      }
    }
  }
`
