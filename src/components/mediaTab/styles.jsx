import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`

export const HiddenInput = styled.input`
  display: none;
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`

export const UploadingPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  animation: ${pulse} 1.5s ease-in-out infinite;
  color: #999;
  font-size: 0.875rem;
  font-weight: 500;
`

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
`

export const TabTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--black-color);
  text-align: center;
  font-family: 'Poppins', sans-serif;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fcfcfc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 0.5px solid var(--stroke-color);
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;

  h4 {
    font-size: 1.2rem;
    color: var(--black-color);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    font-size: 0.9rem;
    color: var(--black-color);
    background-color: #eee;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
  }
`

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
`

export const MediaItem = styled.div`
  width: 100%;
  aspect-ratio: 16/9; 
  border-radius: 12px;
  overflow: hidden;
  background-color: #eee;
  position: relative;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: var(--gray-white-color);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--red-color);
  transition: all 0.2s;

  &:hover {
    background-color: #fff;
    transform: scale(1.1);
    color: var(--red-color);
  }
`

export const EmptyState = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
  color: #999;
  background-color: #f8f8f8;
  border-radius: 8px;
  border: 1px dashed #ddd;
  font-style: italic;
`

export const InfoText = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.875rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f0f7ff;
  border-radius: 8px;
  border: 1px solid #cce5ff;
`
