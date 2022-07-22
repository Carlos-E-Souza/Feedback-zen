import { api } from "./api"

interface Feedback {
    name: string
    email: string
    message?: string
}

export const postFeedback = async (feedback: Feedback) => {
    try {
        const res = await api.post("/feedback", feedback)
        return res.data
    } catch (error) {
        throw error
    }
}
