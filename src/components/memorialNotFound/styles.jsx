import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
    text-align: center;
    padding: 2rem;
`

export const Image = styled.img`
    max-width: 400px;
    width: 100%;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
        max-width: 300px;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const Message = styled.p`
    font-size: 1.125rem;
    color: #666;
    max-width: 500px;
    line-height: 1.6;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const ActionButton = styled.a`
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`
