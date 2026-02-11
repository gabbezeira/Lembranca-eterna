import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  width: 100%;
  gap: 2.125rem;

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--black-color);
  }

  .mediaGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    width: 100%;

    background-color: var(--card-white-color);
    padding: 2rem;
    border-radius: 0.5rem;
    height: auto; /* Allow height to adapt */

    .mediaItem {
      width: 100%;
      height: 100%;
      aspect-ratio: 1; /* Keeps items square and responsive */
      border-radius: 0.5rem;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &:hover {
        transform: scale(1.04);
        z-index: 10;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }

      .mediaImage {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .videoWrapper {
        width: 100%;
        height: 100%;
        position: relative;
      }

      .thumbnailVideo {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .playOverlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }

      .playIcon {
        font-size: 2rem;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 4px;
      }
    }
  }

  .modalContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .modalContent {
      position: relative;
      padding: 1rem;
      border-radius: 12px;
      max-width: 90%;
      max-height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 0.5rem;
      }

      video {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 0.5rem;
      }

      .close {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -30px;
        right: 15px;
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        background-color: var(--primary-color);
        color: var(--white-color);
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
      }
    }
  }

  /* Laptop / Hybrid */
  @media (max-width: 1024px) {
    .mediaGrid {
      gap: 1rem;
      padding: 1.5rem;
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    align-items: center;
    gap: 1.5rem;

    .title {
      align-self: flex-start;
    }

    .mediaGrid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      padding: 1rem;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    gap: 1rem;
    
    .mediaGrid {
      gap: 0.75rem;
      padding: 0.75rem;
    }
  }
`
