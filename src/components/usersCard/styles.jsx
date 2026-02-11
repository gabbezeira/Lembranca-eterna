import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  height: 100%;
  width: 100%;

  border: 0.5px solid var(--stroke-color);
  padding: 1rem 1.5rem;

  gap: 1rem;
  border-radius: 0.5rem;
  overflow: scroll;

  /* Subtle Scrollbar */
  &::-webkit-scrollbar {
    height: 2px; /* Ultra thin */
    width: 2px; 
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--stroke-color); 
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--gray-color); 
  }

  .data {
    display: flex;
    justify-content: center;
    flex-direction: row;
    white-space: nowrap;
    gap: 0.25rem;

    .itemLabel {
      font-size: 14px;
      font-weight: 700;
      color: var(--black-color);
    }

    .itemData{
      font-size: 14px;
      font-weight: 400;
      color: var(--black-color);
    }
  }

  .actions {
    display: flex;
    width: auto;
    gap: 0.625rem;

    .actionButton {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      width: 28px;
      height: 28px;
      border-radius: 0.25rem;
      color: var(--white-color);
      transition: all .2s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.08);
      }

      &.link {
        background-color: var(--primary-color) !important;
      }

      &.update {
        background-color: var(--gray-color) !important;
      }

      &.trash {
        background-color: var(--red-color) !important;
      }
    }
  }
  /* Large Screens (Full HD+) */
  @media (min-width: 1440px) {
      padding: 1.5rem 2rem;
      
      .data {
          gap: 1rem;
          .itemLabel, .itemData {
              font-size: 16px; /* Larger font */
          }
      }

      .actions .actionButton {
          width: 32px;
          height: 32px;
      }
  }

  /* Ultra Wide (2K/4K) */
  @media (min-width: 1920px) {
      padding: 2rem 3rem;
      border-radius: 1rem;

      .data {
          gap: 2rem;
          .itemLabel, .itemData {
              font-size: 18px; /* Even larger */
          }
      }
      
      .actions .actionButton {
          width: 40px;
          height: 40px;
          border-radius: 0.5rem;
      }
  }

  /* Tablet & Mobile responsive adjustments */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 1.5rem;
    gap: 1.25rem;
    overflow: visible;
    
    background-color: var(--white-color);
    border: 0.5px solid var(--stroke-color);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    .data {
      width: 100%;
      justify-content: flex-start;
      align-items: baseline;
      border-bottom: 0.5px solid var(--stroke-color);
      padding-bottom: 0.75rem;
      gap: 0.5rem;
      
      &:last-child {
        border-bottom: none;
      }
      
      .itemLabel {
        min-width: auto;
        font-weight: 700;
        color: var(--black-color);
      }
      
      white-space: normal;
      flex-wrap: wrap;
      text-align: left;
    }
    
    .actions {
      width: 100%;
      justify-content: center;
      margin-top: 0.25rem;
      gap: 2rem; /* Comfortable spacing for fingers */
      
      .actionButton {
        width: 44px; /* Even larger touch targets */
        height: 44px;
        border-radius: 8px; /* Softer/more modern look */
        
        /* Add icons slightly larger if possible, but container size helps */
      }
    }
  }
`
