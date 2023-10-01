import Navbar from "../components/navbar/Navbar.jsx"
import VideoReady from "../components/Ready/VideoReady.jsx"
import Account from "../components/Ready/Account.jsx";
import Footer from "../components/footer/Footer.jsx"

const Ready = () => {
  return (
    <section className="flex flex-col gap-10">
        <Navbar/>
        <VideoReady />
        <Account />
        <Footer />
    </section>
  )
}

export default Ready