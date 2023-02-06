import RecentWorkDisplay from '@/components/websites/RecentWorkDisplay';

const RecentWork = () => {
	return (
		<div className='bg-gradient-to-r from-dark via-primary to-primary/80 py-12 lg:py-24 '>
			<div className='max-w-5xl mx-auto grid gap-16'>
				<div className='text-light text-2xl lg:text-4xl font-mono lg:w-2/3 mx-4 lg:mx-0'>
					A selection of recent work I have designed and built
				</div>
				<RecentWorkDisplay />
			</div>
		</div>
	);
};

export default RecentWork;
