import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10rem 18.75rem 4.375rem 18.75rem ;
  gap: 2.5rem;

  .medias {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
  }

  .tributes {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    .items {
      display: flex;
      flex-direction: column;

      width: 100%;
      gap: 1.875rem;
    }

    .noTributes {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      .noTributesText {
       width: 100%;
       padding: 2rem;
       text-align: center;
       color: #999;
       background-color: #f8f8f8;
       border-radius: 8px;
       border: 1px dashed #ddd;
       font-style: italic;
      }
    }
  }

  /* Laptop / Small Desktop */
  @media (max-width: 1366px) {
    padding: 10rem 10rem 4.375rem 10rem;
  }

  @media (max-width: 1024px) {
    padding: 10rem 5rem 4.375rem 5rem;
  }

  /* Tablet */
  @media (max-width: 768px) {
    padding: 9rem 2.5rem 2.75rem 2.5rem;

    .tributes .title {
      font-size: 1.5rem;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 8rem 1.5rem 2.5rem 1.5rem;
    gap: 2rem;
  }

  /* Large Screens (Full HD +) */
  @media (min-width: 1920px) {
     padding: 10rem 25% 4.375rem 25%;
  }

  /* 2K Monitors (QHD) */
  @media (min-width: 2560px) {
     padding: 12rem 30% 5rem 30%;
  }

  /* 4K Monitors (UHD) */
  @media (min-width: 3840px) {
     padding: 15rem 35% 8rem 35%;
  }
`

export const TributesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  .title {
    font-size: 1.5rem;
    color: var(--black-color);
    font-weight: bold;
    margin: 0; /* Override default h1 margin */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    
    button {
      width: 100% !important; 
    }
  }
`
