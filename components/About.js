import WhileInViewWrapper from './utils/animations/WhileInViewWrapper';

const About = () => {
	return (
		<div className='grid px-4 lg:px-0  gap-2 text-lg lg:text-xl  lg:leading-9 text-justify text-light max-w-4xl mx-auto tracking-wide '>
			<WhileInViewWrapper>
				<Opening />
			</WhileInViewWrapper>
			<WhileInViewWrapper>
				<MyStart />
			</WhileInViewWrapper>
			<WhileInViewWrapper>
				<Technologies />
			</WhileInViewWrapper>
			<WhileInViewWrapper>
				<Closing />
			</WhileInViewWrapper>
		</div>
	);
};

export default About;
{
	/* <span className="opacity-100 font-bold"></span> */
}

const Opening = () => {
	return (
		<div className=' '>
			I am a self-taught web developer who fell in love with the power of code.
			I learned{' '}
			<span className=' text-teriary font-bold text-xl lg:text-2xl '>
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
		<div className=' '>
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
		<div className=''>
			I specialize in utilizing{' '}
			<span className=' text-teriary font-bold text-xl lg:text-2xl '>
				NextJS, React, TailwindCSS, Framer-Motion, and the power of JavaScript{' '}
			</span>
			to build high-performance web applications. These technologies allow me to
			create dynamic and visually appealing websites with great user experience.
			Additionally, I have experience working with various{' '}
			<span className=' text-teriary font-bold text-xl lg:text-2xl '>
				APIs and MongoDB
			</span>
			, allowing me to craft dynamic and data-driven websites that can easily
			connect and interact with various platforms and services. I also optimize
			websites for real-world results by utilizing
			<span className=' text-teriary font-bold text-xl lg:text-2xl '>
				{' '}
				SEO strategies{' '}
			</span>{' '}
			to improve website visibility and drive more traffic.
		</div>
	);
};

const Closing = () => {
	return (
		<div className=' '>
			I'm always looking for new challenges and opportunities to expand my
			skills, so if you're in need of a web developer who is equal parts
			designer and coder, look no further.
		</div>
	);
};
