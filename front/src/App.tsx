import { FeedbackForm } from "./components/Form/FeedbackForm"
import { MainFooter } from "./components/Footer/Footer"
import { Map } from "./components/Map/Map"
import { Container, MapMain } from "./App.style"
import "./App.css"

const App = () => {
    return (
        <Container>
            <FeedbackForm />
            <MapMain />
            <MainFooter />
        </Container>
    )
}

export default App
