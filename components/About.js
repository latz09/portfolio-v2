const About = () => {
	return (
		<div className='bg-gradient-to-b from-light via-primary/40 to-primary/0'>
			<Blurb />
		</div>
	);
};

export default About;

const Blurb = () => {
	return (
		<div className='max-w-5xl mx-auto text-xl text-dark font-semibold py-16 leading-9 grid grid-cols-2 place-items-center gap-8'>
			<div className="p-8 grid gap-2">
				<span>
					I specialize in utilizing NextJS, React, TailwindCSS, and
					Framer-Motion and the power of JavaScript to build high-performance
					web applications.{' '}
				</span>
				<span>
					These technologies allow me to create dynamic and visually appealing
					websites with great user experience.
				</span>
			</div>
			<div className="grid gap-2">
				<span>
					Additionally, I have experience working with various APIs and MongoDB,
					allowing me to craft dynamic and data-driven websites that can easily
					connect and interact with various platforms and services.
				</span>
				<span className=''>
					I also optimize websites for real-world results by utilizing SEO best
					practices and Google Analytics to ensure that websites are not only
					visually appealing, but also perform well in the real world.
				</span>
			</div>
		</div>
	);
};

const Heading = () => {
	return (
		<div className='text-2xl lg:text-3xl border-b border-primary pb-4 font-normal'>
			a little about me...
		</div>
	);
};

const Opening = () => {
	return (
		<div className='scale-95 opacity-80'>
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
		<div className='scale-95 opacity-80'>
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
		<div className='max-w-4xl mx-auto  '>
			I specialize in utilizing{' '}
			<span className='text-primary  text-xl lg:text-2xl font-semibold'>
				NextJS, React, TailwindCSS, and Framer-Motion and the power of
				JavaScript
			</span>{' '}
			to build high-performance web applications. These technologies allow me to
			create dynamic and visually appealing websites with great user experience.
			Additionally, I have experience working with various{' '}
			<span className='text-primary text-xl lg:text-2xl font-semibold'>
				APIs and MongoDB
			</span>
			, allowing me to craft dynamic and data-driven websites that can easily
			connect and interact with various platforms and services. I also optimize
			websites for real-world results by utilizing
			<span className='text-primary font-semibold text-xl lg:text-2xl '>
				{' '}
				SEO strategies{' '}
			</span>{' '}
			to improve website visibility and drive more traffic.
		</div>
	);
};

const Closing = () => {
	return (
		<div className='scale-95 opacity-80'>
			I'm always looking for new challenges and opportunities to expand my
			skills, so if you're in need of a web developer who is equal parts
			designer and coder, look no further.
		</div>
	);
};
