import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: auto;
  height: auto;

  gap: 1.75rem;

  .image {
    width: 8.25rem;
    height: auto;
  }

  .texts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--black-color);
    }

    .subtitle {
      font-size: 1rem;
      font-weight: 400;
      color: var(--gray-color);
    }
  }

`
