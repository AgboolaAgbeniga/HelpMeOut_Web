const Account = () => {
  return (
		<section className="flex justify-center bg-account p-10">
			<main className="w-full md:w-1/2 flex flex-col gap-6 items-center">
				<h1 className="text-dark_black font-sora text-lg sm:text-xl text-center font-semibold">
					To ensure the availability and privacy of your video, we recommend
					saving it to your account.
				</h1>
				<button className="bg-dark_blue font-work_sans text-white px-7 py-3 rounded-md">
					Save Video
				</button>
				<p className="font-sora text-lg text-account_gray flex flex-col sm:flex-row gap-2 font-semibold text-center">
					Don’t have an account?
					<a href="/login" className="underline text-dark_blue font-normal cursor-pointer">Create account</a>
				</p>
			</main>
		</section>
	);
}

export default Account