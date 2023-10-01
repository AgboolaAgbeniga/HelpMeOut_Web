import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
	// toggle state handler
	const [toggle, setToggle] = useState(false);

	//function for changing toggle state
	const handleModal = () => {
		setToggle((prev) => !prev);
	};

	return (
		<nav className="w-full h-fit p-5 border-2 border-t-0 border-l-0 border-r-0 border-b-slate-200 flex justify-center">
			<main className="w-11/12 flex items-center justify-between">
				<span className="flex gap-3 items-center font-inter">
					<Link to="/" className="flex gap-3 items-center ">
						<img src={logo} />
						<p className="text-dark_blue font-semibold text-base">
							HelpMeOut
						</p>
					</Link>
				</span>

				<span className="hidden font-work_sans text-black font-light sm:flex sm:gap-10">
					<Link to="#features">Features</Link>
					<Link to="#works">How It Works</Link>
				</span>

				<Link
					to="/login"
					className="font-sora hidden sm:block text-dark_blue font-semibold text-lg"
				>
					Get Started
				</Link>



				{/* rendering Bar Icon with toggle condition */}
				{!toggle && (
					<FaBars
						className="text-2xl cursor-pointer sm:hidden"
						onClick={handleModal}
					/>
				)}
				{/* rendering Times Icon with toggle condition */}
				{toggle && (
					<FaTimes
						className="text-2xl cursor-pointer sm:hidden"
						onClick={handleModal}
					/>
				)}

				{/* mobile navbar with toggle condition*/}
				{toggle && (
					<div className="fixed left-0 sm:hidden z-20 w-full min-h-full text-2xl font-bold text-center bg-white font-quicksand top-20 sidebar">
						<ul className=" font-medium font-work_sans leading-[18.77px] text-black flex flex-col justify-center items-center gap-20 min-h-[80vh]">
							<Link to="#features" onClick={handleModal}>
								Features
							</Link>
							<Link to="#works" onClick={handleModal}>
								How It Works
							</Link>
							<Link
								to="/login"
								className="text-Primary font-semibold text-lg leading-[22.68px] font-sora"
								onClick={handleModal}
							>
								Get Started
							</Link>
						</ul>
					</div>
				)}
			</main>
		</nav>
	);
}

export default Navbar