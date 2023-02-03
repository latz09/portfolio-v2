import About from '@/components/About';
import Landing from '@/components/Landing';
import Head from 'next/head';

export default function Home() {
	return (
		<div className=' grid gap-24 my-24   '>
			<Landing />
			{/* <About /> */}
		</div>
	);
}
