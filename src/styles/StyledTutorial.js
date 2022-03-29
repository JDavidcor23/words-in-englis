import styled from 'styled-components'

export const Principal = styled.div`
    width: 100%;
    height:100vh;
`

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`
export const CardsWords = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background: white;
    width: 100%;
    max-width: 450px;
    max-height:550px;
    padding: 20px;
    border-radius: 20px;
    `
export const DivButtons = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    `
export const Buttons = styled.button`
    border: none;
    background: none;
`