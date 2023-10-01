import search from "../../assets/icons/search-normal.svg"
const Search = () => {
  return (
		<section className="w-full flex justify-center">
			<main className="w-11/12 flex flex-col sm:flex-row justify-between gap-10 sm:gap-3">
				<span className="flex flex-col gap-3">
					<h1 className="font-sora text-3xl font-semibold">Hello, John Mark</h1>
					<p className="font-work_sans text-lg text-dark_black opacity-70">
						Here are your recorded videos
					</p>
				</span>

				<span className="w-full py-5 sm:py-0 sm:w-1/2 flex border border-gray-200 bg-search_bg px-7 gap-4 rounded-xl">
					<img src={search} className="w-5" />
					<input
						type="search"
						placeholder="Search for a particular video"
						className="w-full h-full placeholder:text-placeholder bg-search_bg"
					/>
				</span>
			</main>
		</section>
	);
}

export default Search