import styled, { css } from 'styled-components'
import '@globalStyles'

export const Container = styled.button`
  display: ${({ $showButton }) => $showButton || 'flex'};
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  white-space: nowrap;

  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || '3.125rem'};
  padding: 0rem 1.5rem;

  font-family: 'Poppins', sans-serif;
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  font-weight: ${({ $fontWeight }) => $fontWeight || '500'};

  border-radius: ${({ $borderRadius }) => $borderRadius || '0.25rem'};
  transition: all 0.2s;
  cursor: pointer;

  .buttonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    stroke-width: 2px;
    max-height: 1.25rem;
  }
  
  ${({ $variant }) =>
		$variant === 'primary' &&
		css`
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    color: var(--white-color);

    &:hover {
      background-color: var(--primary-hover);
      border: 1px solid var(--primary-hover);
    }
  `}

  ${({ $variant }) =>
		$variant === 'outline' &&
		css`
    background-color: transparent;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);

    &:hover {
      background-color: var(--primary-color);
      color: var(--white-color);
    }
  `}

  ${({ $variant }) =>
		$variant === 'noSelect' &&
		css`
    background-color: var(--black-color);
    padding: 0.875rem !important;
    border: none;
    color: var(--white-color);

    &:hover {
      background-color: var(--gray-color);
    }
  `}

  ${({ $variant }) =>
		$variant === 'blue' &&
		css`
    background-color: var(--stroke-color);
    padding: 0.875rem !important;
    border: none;
    color: var(--white-color);

    &:hover {
      background-color: var(--opacity-color);
    }
  `}
  @media (max-width: 768px) {
    padding: 0.625rem;
  }
`
