import logo from "../../assets/dark_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-dark_blue text-white py-20 h-fit flex justify-center">
			<main className="w-11/12 sm:w-10/12 h-full flex flex-col sm:flex-row items-start justify-between gap-10">
				<span className="flex gap-3 items-center font-inter">
					<img src={logo} />
					<Link to="/"><p className="font-semibold text-lg font-inter">HelpMeOut</p></Link>
				</span>

				<section className="w-full sm:w-2/3 h-full flex gap-10 justify-between">
					<ul className="text-base flex flex-col gap-7">
						<li className="font-sora font-semibold text-lg">Menu</li>
						<Link to="/"><li className="font-work_sans">Home</li></Link>
						<li className="font-work_sans">Converter</li>
						<Link to="#works"><li className="font-work_sans">How it Works</li></Link>
					</ul>

					<ul className="text-base flex flex-col gap-7">
						<li className="font-sora font-semibold text-lg ">About us</li>
						<li className="font-work_sans">About</li>
						<li className="font-work_sans">Contact Us</li>
						<li className="font-work_sans">Privacy Policy</li>
					</ul>

					<ul className="text-base flex flex-col gap-7">
						<li className="font-sora font-semibold text-lg ">Screen Record</li>
						<li className="font-work_sans">Browser Window</li>
						<li className="font-work_sans">Desktop</li>
						<li className="font-work_sans">Application</li>
					</ul>
				</section>
			</main>
		</footer>
	);
};

export default Footer;
