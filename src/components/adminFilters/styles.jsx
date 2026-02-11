import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto; 
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row; 
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-top: 0.5rem;
    border-top: 0.5px solid var(--stroke-color);
  }
`

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 140px;
  height: 100%;
  
  /* Vertical divider on desktop */
  @media (min-width: 769px) {
    border-left: 0.5px solid var(--stroke-color);
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    flex: 1 1 50%;
    min-width: 140px;
    border-right: 0.5px solid var(--stroke-color);
    
    &:last-child {
      border-right: none;
    }
    
    /* On very small screens, stack them? */
    @media (max-width: 480px) {
      flex: 1 1 100%;
      border-right: none;
      border-bottom: 0.5px solid var(--stroke-color);
      
      &:last-child {
        border-bottom: none;
      }
    }
  }

  /* Icon positioning */
  svg {
    position: absolute;
    left: 0.75rem;
    color: var(--stroke-color);
    pointer-events: none;
    z-index: 1;
    width: 16px;
    height: 16px;
  }
`

export const Select = styled.select`
  width: 100%;
  height: 100%;
  min-height: 48px;
  padding: 0 0.75rem 0 2.25rem;
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  color: var(--text-color);
  outline: none;
  cursor: pointer;
  appearance: none;
`
