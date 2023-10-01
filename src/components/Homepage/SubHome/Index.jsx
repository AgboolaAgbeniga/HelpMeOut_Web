import Header from "../Header.jsx";
import Line from "../Line.jsx"
import Routing from "./Route.jsx";
import ListDetails from "./ListDetails.jsx";
import Transcription from "./Transcription.jsx";

const Index = () => {
  return (
    <section>
        <Line />
        <Header />
        <Routing />
        <ListDetails />
        <Transcription />
    </section>
  )
}

export default Index