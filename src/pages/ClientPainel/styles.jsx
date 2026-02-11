import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const HiddenInput = styled.input`
  display: none;
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 10rem;
  gap: 2rem;

  /* Laptop / Small Desktop */
  @media (max-width: 1366px) {
    padding: 2rem 5rem;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 2rem 3rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  /* Large Screens (Full HD) */
  @media (min-width: 1920px) {
     padding: 3rem 15%;
  }

  /* 2K Monitors */
  @media (min-width: 2560px) {
     padding: 4rem 20%;
  }

  /* 4K Monitors */
  @media (min-width: 3840px) {
     padding: 6rem 25%;
  }
`

export const FormSection = styled.div`
  width: 100%;
  border: 0.5px solid var(--stroke-color);
  border-radius: 8px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--card-white-color);
  height: auto; 
  min-height: 400px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--black-color);
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
`

export const PhotoUploadArea = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`

export const AvatarContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid var(--stroke-color);
  background-color: var(--gray-white-color);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-color);
    
    .overlay {
      opacity: 1;
    }
  }
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AvatarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 0.5rem;
`

export const UploadLabel = styled.span`
  font-size: 0.875rem;
  color: var(--gray-color);
  font-weight: 500;
`

export const InputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-color);
  }

  textarea {
    width: 100%;
    padding: 1rem;
    border: 0.5px solid var(--stroke-color);
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: var(--black-color);
    resize: none;
    outline: none;

    &:focus {
      border-color: var(--primary-color);
    }
  }
`

export const MenuWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`
