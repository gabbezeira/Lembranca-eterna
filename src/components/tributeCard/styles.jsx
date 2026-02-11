import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: auto;

  padding: 1.25rem 1.75rem;
  background-color: var(--card-white-color);
  border: 0.5px solid var(--stroke-color);
  border-radius: 0.5rem;

  gap: 1.25rem;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    width: 100%;

    .texts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .name {
        font-size: 1rem;
        font-weight: 600;
        color: var(--black-color);
      }

      .relationship {
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--black-color); /* Fixed typo balck -> black */
      }
    }
  }

   .tributeMessage {
      display: flex;
      width: 100%;
      height: auto;

      .message {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--black-color);
        text-align: left;
        line-height: 1.5;
      }
    }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
  padding: 0;

  /* Variant styles */
  background-color: ${({ $variant }) =>
		$variant === 'approve' ? 'var(--green-color)' : 'var(--red-color)'};

  &:hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.125rem;
  height: 2.125rem;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${({ $avatarColor }) => $avatarColor};

  text-align: center;

  color: var(--white-color);
  font-weight: 600;
  font-size: 1.25rem;
`
