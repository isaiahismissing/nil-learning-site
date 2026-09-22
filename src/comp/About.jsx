import React from "react";

function About() {
	return (
		<main
			style={{
				padding: "4rem 2rem",
				fontFamily: '"Courier New", Courier, monospace',
				color: "burlywood",
				boxSizing: "border-box",
			}}
		>
			<section style={{ maxWidth: "700px", margin: "10% auto 0 10%" }}>
				<h1 style={{ margin: "0 0 1.5rem", fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
					Isaías Ramirez
				</h1>
				<p style={{ lineHeight: 1.8 }}>
					“who am i? that's always a hard question to answer, i cant tell you all about me because that would be uncomfortable, but what you need to know is that i am a guy who really wants to show his own emotions, and register what time wants me to forget. it's hard to tell this need to tell everyone how you felt when that happened... nothing is more important than the memory of a moment, and i want to share that with you, so you can feel what i felt, and maybe you will understand me better, also i like anime and rock.” <br /><br />-Isaías Ramirez 2024
				</p>
			</section>
			<img className="about-image" src="/isa.jpg" alt="Isaías Ramirez" />
		</main>
	);
}

export default About;