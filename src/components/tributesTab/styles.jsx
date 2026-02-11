import styled from 'styled-components'

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TabTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--black-color);
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`

export const TributesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const EmptyMessage = styled.p`
  text-align: center;
  padding: 2rem;
  text-align: center;
  color: #999;
  background-color: #f8f8f8;
  border-radius: 8px;
  border: 1px dashed #ddd;
  font-style: italic;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
`
