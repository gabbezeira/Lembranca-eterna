import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .tabs {
    display: flex;
    gap: 1rem;
    width: 100%;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--black-color);
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2rem;
`

export const UserName = styled.span`
  color: var(--black-color);
`
