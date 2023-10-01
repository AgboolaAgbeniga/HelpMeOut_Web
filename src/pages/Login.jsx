import logo from "../assets/logo.svg";
import LoginInfo from "../components/Form/Login.jsx"

const Login = () => {
	return (
		<section className="w-full h-fit flex justify-center py-14 gap-10">
			<main className="w-10/12 h-full flex flex-col gap-14">
				<span className="flex gap-3 items-center font-inter">
					<a href="/" className="flex gap-3 items-center ">
						<img src={logo} />
						<p className="text-dark_blue font-semibold text-base">HelpMeOut</p>
					</a>
				</span>
                <LoginInfo />
			</main>
		</section>
	);
};

export default Login;
