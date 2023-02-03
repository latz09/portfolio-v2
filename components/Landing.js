import { BsArrowRightCircleFill } from 'react-icons/bs';
import ButtonLink from './utils/ButtonLink';
import { motion } from 'framer-motion';

const Landing = () => {
	return (
		<div className=' grid gap-6 tracking-wider max-w-4xl mx-auto  '>
			<Greeting />
			<Intro />

			<ButtonContainer />
		</div>
	);
};

export default Landing;

const Greeting = () => {
	return (
		<div className='grid gap-4 text-primary'>
			<div className='text-2xl lg:text-4xl text-primary/70 '>
				Hi, my name is{' '}
				<span className='text-3xl lg:text-5xl font-semibold text-primary/90 '>Jordan </span>
			</div>

			<motion.div className='text-3xl lg:text-5xl text-primary/90 tracking-wide '
			initial={{ opacity: .2,  }}
			animate={{ opacity: 1,  }}
			transition={{ delay: 1, duration: 2 }}
			>
				I build Custom Websites for local businesses
			</motion.div>
		</div>
	);
};

const Intro = () => {
	return (
		<div>
			<span className='text-lg lg:text-xl tracking-normal lg:leading-9  text-justify'>
				Self-taught and driven, I took the road less traveled and started
				building websites for local businesses through my own web design company
				to gain real-world experience. Now, I'm ready to join a team of
				professionals and elevate my skills to new heights, or depths, whichever
				is more impressive.
			</span>
			<div className=' w-fit'>
				<LatzWebDesignLink />
			</div>
		</div>
	);
};

const LatzWebDesignLink = () => {
	return (
		<a
			href='https://www.latzwebdesign.com/'
			target='_blank.'
			rel='noreferrer'
			className='flex text-secondary space-x-2 items-center text-lg lg:text-xl py-2 font-semibold opacity-70 hover:opacity-100 hover:scale-y-50 transition duration-700 '
		>
			<span> LatzWebDesign.com</span>
			<span className=' text-xl lg:text-2xl text-secondary'>
				{' '}
				<BsArrowRightCircleFill />
			</span>
		</a>
	);
};

const ButtonContainer = () => {
	return (
		<div className=' place-self-center lg:place-self-end flex space-x-8 tracking-wider'>
			<ButtonLink href='/about-me' title='More About Me' />

			<ButtonLink href='/projects' title='Recent Designs' type='primary' />
		</div>
	);
};
