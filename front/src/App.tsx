import { FeedbackForm } from "./components/Form/FeedbackForm"
import { MainFooter } from "./components/Footer/Footer"
import { Container, YellowBallon } from "./App.style"
import yellowBallon from "./assets/yellowBallon.svg"
import "./App.css"
import { MapContainer } from "./components/Map/MapContainer"

const App = () => {
    return (
        <>
            <Container>
                <YellowBallon src={yellowBallon} />
                <FeedbackForm />
                <MapContainer />
            </Container>
            <MainFooter />
        </>
    )
}

export default App
