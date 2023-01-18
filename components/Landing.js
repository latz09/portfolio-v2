const Landing = () => {
	return (
		<div className=' grid gap-8 tracking-wider '>
			<div className='grid gap-1'>
				<div className='text-2xl text-primary'>Hi, my name is</div>
				<div className='grid gap-4 '>
					<div className='text-9xl'>Jordan Latz</div>
					<div className='text-5xl opacity-70'>
						I build Custom Websites for local businesses
					</div>
				</div>
			</div>
			<div className='text-2xl tracking-normal leading-9 opacity-70 max-w-4xl text-justify'>
				Self-taught and driven, I took the road less traveled and started
				building websites for local businesses through my own web design company
				to gain real-world experience. Now, I'm ready to join a team of
				professionals and elevate my skills to new heights, or depths, whichever
				is more impressive.
			</div>
			<a
				href='https://www.latzwebdesign.com/'
				target='_blank.'
				rel='noreferrer'
			>
				<div className='text-xl text-primary font-semibold my-4 '>
					<span className='border p-4 border-primary'> LatzWebDesign.com</span>
				</div>
			</a>
		</div>
	);
};

export default Landing;

// started freelanace to gain experience to work for a company - ultimate goal - self taught
