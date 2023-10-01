import Line from "../components/Homepage/Line"
import Header from "../components/Homepage/Header"
import Search from "../components/Homepage/Search"
import Video from "../components/Homepage/Video"

const HomePage = () => {
  return (
		<section>
			<Line />
			<Header />
			<Search />
			<Line />
            <Video />
		</section>
	);
}

export default HomePage