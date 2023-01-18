const About = () => {
	return (
		<div className='grid gap-2 lg:gap-4 max-w-7xl text-lg lg:text-xl font-thi text-justify'>
			<Heading />
			<Opening />
			<MyStart />
			<Technologies />
			<Closing />
		</div>
	);
};

export default About;
{
	/* <span className="opacity-100 font-bold"></span> */
}

const Heading = () => {
	return (
		<div className='text-2xl lg:text-3xl border-b border-primary pb-4 font-normal'>
			a little about me...
		</div>
	);
};

const Opening = () => {
	return (
		<div className="scale-95 opacity-80">
			I am a self-taught web developer who fell in love with the power of code.
			I learned{' '}
			<span className='text-primary text-xl lg:text-2xl font-normal'>
				{' '}
				JavaScript (ES6+){' '}
			</span>{' '}
			and the basics of web development on my own, and quickly became fascinated
			by the endless possibilities it offered. I learned through books, online
			tutorials, and most importantly, through practice.
		</div>
	);
};

const MyStart = () => {
	return (
		<div className="scale-95 opacity-80">
			I got my start in web development by starting my own web design company,
			where I honed my skills and learned the ins and outs of building websites
			for small businesses. Through my experience, I've learned that the key to
			a successful website is not just great design, but also a strong
			understanding of the technologies behind it.
		</div>
	);
};
const Technologies = () => {
	return (
		<div className="lg:border-x-2 px-4 border-primary scale-105 my-2 lg:my-0">
			I specialize in utilizing{' '}
			<span className='text-primary text-xl lg:text-2xl font-normal'>
				NextJS, React, TailwindCSS, and Framer-Motion{' '}
			</span>
			to build high-performance web applications. These technologies allow me to
			create dynamic and visually appealing websites with great user experience.
			Additionally, I have experience working with various{' '}
			<span className='text-primary text-xl lg:text-2xl font-normal'>
				APIs and MongoDB
			</span>
			, allowing me to craft dynamic and data-driven websites that can easily
			connect and interact with various platforms and services. I also optimize
			websites for real-world results by utilizing
			<span className='text-primary text-xl lg:text-2xl font-normal'>
				{' '}
				SEO strategies{' '}
			</span>{' '}
			to improve website visibility and drive more traffic.
		</div>
	);
};

const Closing = () => {
	return (
		<div className="scale-95 opacity-80">
			I'm always looking for new challenges and opportunities to expand my
			skills, so if you're in need of a web developer who is equal parts
			designer and coder, look no further.
		</div>
	);
};
