import About from '@/components/About';
import ButtonLink from '@/components/utils/ButtonLink';

const AboutMe = () => {
	return (
		<div className='grid pb-20  gap-8  bg-dark '>
			<Blurb />
			<Intro />
			<About />
			<div className=' grid place-items-center'>
				<div className='w-1/4 text-center'>
					<ButtonLink
						href={'/recent-work'}
						title={'View Some of My Recent Work'}
						type={'primary'}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;

const Intro = () => {
	return (
		<div className='h-[70vh  text-teriary max-w-7xl mx-auto '>
			<div className='grid gap-4'>
				<div className='text-5xl'>Jordan Latz</div>
				<div className='text-2xl'>Full Stack Web Developer</div>
			</div>
		</div>
	);
};

const Blurb = () => {
	return (
		<div className='text-4xl h-[60vh] grid place-items-center  text-center text-teriary max-w-3xl mx-auto  leading-9'>
			I craft beautiful, custom-made, and optimized websites to deliver tangible
			results for businesses.
		</div>
	);
};
