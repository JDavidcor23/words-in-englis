import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    place-items: center;
    display: flex;
    justify-content: center;
`
export const Modal = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    flex-direction: column;
    padding: 20px;
    position: relative;
    @media screen and (max-width: 480px) {
        padding-top: 50px;
    }
`
export const Button = styled.button`
    padding: 10px;
    margin-top:10px;
    font-size: 1.1rem;
    background: #1cdfc4;
    border: none;
    border-radius: 20px;
    color: white;
    `

export const ButtonLanguage = styled.button`
    border: none;
    position: absolute;
    top: 20px;
    cursor:pointer;
    right: 20px;
`