import styled from 'styled-components'

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`

export const WarningText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #fff8e1;
  border: 1px solid #ffe082;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.813rem;
  color: #6d4c00;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: #f9a825;
  }

  strong {
    font-weight: 700;
  }
`
