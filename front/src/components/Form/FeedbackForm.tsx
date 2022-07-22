import { ChangeEvent, FC, useState } from "react"
import Joi from "joi"
import Alert from "@mui/material/Alert"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import {
    Form,
    FormTitle,
    Input,
    SubmitButton,
    TextArea,
} from "./FeedbackForm.style"
import { postFeedback } from "../../services/feedbackService"

interface FeedbackFormProps {}

export const FeedbackForm: FC<FeedbackFormProps> = () => {
    const feedbackSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required(),
        message: Joi.string().optional(),
    })

    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isErrorAlertVisible, setIsErrorAlertVisible] = useState(false)
    const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false)
    const [errorMsg, setErrorMsg] = useState()

    const handleInput = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value, name } = e.currentTarget
        setFeedback({ ...feedback, [name]: value })
    }

    const handleSubmitFeedback = async (
        e: React.FormEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        try {
            await feedbackSchema.validateAsync(feedback)
            await postFeedback(feedback)
            setFeedback({ name: "", email: "", message: "" })
            setIsSuccessAlertVisible(true)
        } catch (error: any) {
            setErrorMsg(error.message)
            setIsErrorAlertVisible(true)
        }
    }

    return (
        <>
            {isErrorAlertVisible ? (
                <Alert
                    className="alert"
                    variant="filled"
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setIsErrorAlertVisible(false)
                            }}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }>
                    {errorMsg}
                </Alert>
            ) : null}
            {isSuccessAlertVisible ? (
                <Alert
                    className="alert"
                    variant="filled"
                    severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setIsSuccessAlertVisible(false)
                            }}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }>
                    {"Feedback sent"}
                </Alert>
            ) : null}
            <Form>
                <FormTitle>Reach out to us!</FormTitle>
                <Input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    id="name"
                    onChange={handleInput}
                />
                <Input
                    type="text"
                    placeholder="Your e-mail"
                    name="email"
                    id="email"
                    onChange={handleInput}
                />
                <TextArea
                    placeholder="Your message"
                    name="message"
                    id="message"
                    onChange={handleInput}
                />
                <SubmitButton type="submit" onClick={handleSubmitFeedback}>
                    Send message
                </SubmitButton>
            </Form>
        </>
    )
}
