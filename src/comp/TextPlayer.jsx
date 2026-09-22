function TextPlayer({ logNumber, text }) {
	return (
		<div className="text-player">
			<h1 className="text-2xl font-extrabold">
				Log <span className="text-white">#{logNumber}</span>
			</h1>
			<p>{text}</p>
		</div>
	)
}

export default TextPlayer
