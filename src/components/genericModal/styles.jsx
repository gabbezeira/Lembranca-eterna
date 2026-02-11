import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.25rem;
  }

  .modalContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--gray-white-color);
    border-radius: 0.75rem;
    padding: 2rem;
    max-width: 42.5rem;
    height: auto;
    width: auto;
    overflow-y: auto;
    gap: 2rem;
    text-align: center;
  }

  .modalImage {
    height: 10rem;
    width: auto;
  }

  .modalHeader {
    border-radius: 0.75rem 0.75rem 0 0;
    color: white;
    text-align: center;
    position: relative;

    .closeButton {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: white;
      font-size: 1.125rem;
      transition: background-color 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }

    .title {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
      color: var(--black-color);
    }

    .subtitle {
      text-align: center;
      margin: 0;
      font-size: 0.875rem;
      color: var(--black-color);
      width: 23rem;
    }
  }

  .form {
    width: 100%;

    .inputGroup {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.75rem;
      }
    }

    .inputField {
      flex: 1;

      .label {
        display: block;
        margin-bottom: 0.375rem;
        font-weight: 500;
        color: var(--black-color);
        font-size: 0.875rem;
      }

      .input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 0.5px solid var(--stroke-color);
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-family: inherit;
        outline: none;

        &::placeholder {
          color: var(--gray-color);
          font-size: 0.875rem;
        }
      }

      .textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 0.5px solid var(--stroke-color);
        border-radius: 0.5rem;
        font-size: 0.875rem;
        min-height: 7.5rem;
        resize: none;
        font-family: inherit;
        outline: none;

        &::placeholder {
          color: var(--gray-color);
          font-size: 0.875rem;
        }
      }
    }

    .buttonGroup {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
      margin-top: 1.5rem;

      .button {
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'Poppins', sans-serif;

        &.primary {
          background-color: var(--primary-color);
          color: white;
        }

        &.secondary {
          color: var(--black-color);
          
          &:hover:not(:disabled) {
            background: var(--opacity-color);
          }
        }

        &:disabled {
          background-color: var(--stroke-color);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .modalHeader {
      .subtitle {
        width: auto;
      }
    }
  }
`
