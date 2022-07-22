import styled from "styled-components"

export const Form = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 1rem;
    height: 80%;
    position: absolute;
    left: 12%;
    color: #3e3e3e;
`

export const FormTitle = styled.h1`
    font-size: 2rem;
`

export const Input = styled.input`
    width: 90%;
    max-width: 100%;
    font-size: 1rem;
    padding: 1rem;
    height: 2rem;
    border: 1px solid #dcdcdc;
    border-radius: 0.2rem;
    background: #ffffff;
    color: #2d2d2d;
`

export const TextArea = styled.textarea`
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    height: 5rem;
    border: 1px solid #dcdcdc;
    border-radius: 0.2rem;
`
export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    background-color: #fad34f;
    height: 2rem;
    border-radius: 500px;
    padding: 1.8rem 0.9rem;
`
