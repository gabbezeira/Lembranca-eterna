import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
`

export const UnlockedPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`

export const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`
