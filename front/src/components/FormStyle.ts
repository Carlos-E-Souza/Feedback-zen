import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    border: 2px solid #dcdcdc;
    border-radius: 1rem;
    padding: 1rem;
`

export const FormTitle = styled.h1`
    font-size: 2rem;
`

export const Input = styled.input`
    width: 100%;
    font-size: 1rem;
    height: 2rem;
    border: 1px solid #dcdcdc;
    border-radius: 0.2rem;
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
