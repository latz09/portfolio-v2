import About from '@/components/About';
import Landing from '@/components/Landing';
import Icons from '@/components/utils/Icons';
import Head from 'next/head';

export default function Home() {
	return (
		<div className=' grid gap-12 my-12 lg:my-24  max-w-7xl mx-4 lg:mx-auto  '>
			<Landing />
			<Icons />
			
		</div>
	);
}



