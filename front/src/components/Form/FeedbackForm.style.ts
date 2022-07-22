import styled from "styled-components"

export const Form = styled.form`
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2%;
    position: absolute;
    left: 12%;
    color: #3e3e3e;
`

export const FormTitle = styled.h1`
    font-size: 250%;
    font-weight: 400;
`

export const Input = styled.input`
    width: 90%;
    max-width: 100%;
    font-size: 120%;
    font-weight: 400;
    padding: 4vh 2vw;
    border: 1px solid #dcdcdc;
    border-radius: 0.2rem;
    background: #ffffff;
    color: #2d2d2d;
`

export const TextArea = styled.textarea`
    width: 90%;
    max-width: 100%;
    font-size: 130%;
    font-weight: 400;
    padding: 4vh 2vw;
    height: 20%;
    border: 1px solid #dcdcdc;
    border-radius: 0.2rem;
    background: #ffffff;
    color: #2d2d2d;
    resize: none;
`

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 110%;
    font-weight: 600;
    background-color: #fad34f;
    border-radius: 500px;
    padding: 4% 5%;
    margin-top: 0.8rem;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
        border-color: #646cff;
    }
    &:focus {
    }
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`
