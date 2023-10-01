const src = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const Video = () => {
  return (
		<section className="border border-zinc-500 w-11/12 mx-auto rounded-xl ">
            <video controls className="w-full h-full rounded-xl">
                <source src={src} type="video/mp4" />
                Sorry, your browser does not support embedded videos.
            </video>
		</section>
	);
}

export default Video