import styled from 'styled-components'
import '@globalStyles'

export const DesktopLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  min-height: 100dvh;

  .leftContent {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
  }

  .rightContent {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 50%;

    .formArea {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0rem 8rem;
    }
  }

  @media (max-width: 1024px) {
    .leftContent {
      width: 45%;
    }

    .rightContent {
      width: 55%;

      .formArea {
        padding: 0 3rem;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    .leftContent, .rightContent {
      padding: 0;
    }

    .rightContent {
      justify-content: center;
    }
  }

  @media (min-width: 1920px) {
    .leftContent {
      width: 50%;
    }

    .rightContent {
      width: 50%;

      .formArea {
        max-width: 50rem;
        width: 100%;
      }
    }
  }
`

export const MobileLayout = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    min-height: 100dvh;
  }
`

export const MobileFormContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0rem 2rem;

  @media (max-width: 479px) {
    padding: 0rem 1.5rem;
  }
`
