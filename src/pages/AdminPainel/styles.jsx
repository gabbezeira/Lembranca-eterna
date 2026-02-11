import styled from 'styled-components'
import '@globalStyles'

export const AdminPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  /* Desktop default: Fixed height like PageWrapper */
  height: 100dvh;
  
  /* Mobile: Unlocked height like UnlockedPageWrapper */
  @media (max-width: 768px) {
    height: auto;
    min-height: 100dvh;
  }
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 80px 180px;
  gap: 50px;

  /* Large Screens (Full HD) */
  @media (min-width: 1440px) {
    padding: 100px 200px;
    gap: 60px;
  }

  /* Ultra Wide (2K/4K) */
  @media (min-width: 1920px) {
    padding: 120px 300px;
    gap: 80px;
    max-width: 2400px;
  }

  /* Laptop */
  @media (max-width: 1366px) {
    padding: 60px 100px;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 60px 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    gap: 30px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 80px 1rem 2rem 1rem;
    gap: 20px;
  }
`

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  /* Container now looks like the input */
  background-color: white;
  border: 0.5px solid var(--stroke-color);
  border-radius: 8px;
  padding: 0; 
  height: auto;
  min-height: 48px;
  flex-wrap: wrap; /* Allow wrapping on small screens */

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 24px; /* Center relative to input height of 48px */
    transform: translateY(-50%);
    color: var(--stroke-color);
    z-index: 1;
  }

  /* Adjust icon position if wrapping happens? 
     Actually, if we wrap, the input stays on top row. 
     We need to ensure height is dynamic.
  */

  transition: border-color 0.2s;

  &:focus-within {
    border-color: var(--primary-color);
  }
`

export const SearchInput = styled.input`
  flex: 1;
  min-width: 200px;
  height: 48px;
  padding: 0.75rem 1rem 0.75rem 3.25rem;
  border: none;
  background-color: transparent;
  font-size: 0.875rem;
  font-family: 'Poppins', sans-serif;
  outline: none;
  color: var(--text-color);

  &::placeholder {
    color: var(--stroke-color);
  }
`
export const StyledUserList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`

export const NoResultContainer = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--gray-color);
  
  h3 {
    font-size: 1.125rem;
    font-weight: 500;
  }
`
