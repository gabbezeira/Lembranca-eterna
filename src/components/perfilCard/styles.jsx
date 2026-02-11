import styled from 'styled-components'
import '@globalStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  width: 100%;
  height: auto;

  margin-top: 4rem;
  background-color: var(--card-white-color);
  border: 0.5px solid var(--stroke-color);
  border-radius: 1.875rem;

  .bottomArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1.25rem 2.25rem 2.5rem 2.5rem;

    margin-top: 4rem;
    gap: 1.25rem;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 0.625rem;

      .name {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--black-color);
      }

      .dates {
        font-size: 1.25rem;
        font-weight: 500;
      }
    }

    .description {
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--black-color);
      text-align: left;
    }
  }
`
export const TopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  width: 100%;
  height: 12.5rem;


  background-image: url(${({ $coverImage }) => $coverImage});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 1.875rem 1.875rem 0rem 0rem;
`

export const PerfilPhoto = styled.div`
  display: flex;
  width: 9.625rem;
  height: 9.625rem;

  position: absolute;
  bottom: -4.8125rem;
  border-radius: 50%;
  border: 0.5rem solid var(--gray-white-color);
  overflow: hidden; /* Ensure image stays circular */
  background-color: var(--gray-white-color); /* Fallback background */
`

export const PerfilPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
