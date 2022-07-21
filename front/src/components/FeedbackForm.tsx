import { FC } from "react"
import { Form, FormTitle, Input, SubmitButton, TextArea } from "./FormStyle"

interface FeedbackFormProps {}

export const FeedbackForm: FC<FeedbackFormProps> = () => {
    return (
        <Form>
            <FormTitle>Reach out to us!</FormTitle>
            <Input type="text" placeholder="Your name" />
            <Input type="text" placeholder="Your e-mail" />
            <TextArea placeholder="Your message" />
            <SubmitButton type="submit">Send message</SubmitButton>
        </Form>
    )
}
