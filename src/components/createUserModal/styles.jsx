import styled from 'styled-components'

export const Overlay = styled.div`
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
`

export const ModalContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 28px 48px;
  max-width: 42.5rem;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`

export const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--black-color);
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: var(--gray-color);
  font-family: 'Poppins', sans-serif;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--black-color);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.label`
  font-size: 14px;
  color: var(--gray-color);
  font-family: 'Poppins', sans-serif;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 0.5px solid var(--stroke-color);
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: 'Poppins', sans-serif;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: var(--gray-color);
  }
`

export const DeceasedSection = styled.div`
  background-color: var(--white-text-color);
  border-radius: 8px;
  padding: 28px;
  border: 0.5px solid var(--stroke-color);
`

export const DeceasedGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`

export const FooterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
