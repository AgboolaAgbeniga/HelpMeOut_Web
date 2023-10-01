import logo from "../../assets/logo.svg";
import profile from "../../assets/icons/profile-circle.svg";
import arrow_down from "../../assets/icons/arrow-down.svg"

const Header = () => {
	return (
		<section className="w-full flex justify-center">
			<main className="w-11/12 flex justify-between py-10">
				<span className="flex gap-3 items-center font-inter">
					<a href="/" className="flex gap-3 items-center ">
						<img src={logo} />
						<p className="text-dark_blue font-semibold text-base">HelpMeOut</p>
					</a>
				</span>

				<span className="flex items-center gap-3">
					<img src={profile} />
					<p>John Mark</p>
					<img src={arrow_down} className="hidden sm:block"/>
				</span>
			</main>
		</section>
	);
};

export default Header;
