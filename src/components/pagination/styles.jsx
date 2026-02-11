import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--stroke-color);
  background-color: transparent;
  color: var(--black-color);
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: var(--gray-white-color);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
`

export const NavButton = styled(PageButton)`
  width: auto;
  padding: 0 0.75rem;
  gap: 0.25rem;
`
