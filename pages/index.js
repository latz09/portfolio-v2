import About from '@/components/About';
import Landing from '@/components/Landing';
import Head from 'next/head';

export default function Home() {
	return (
		<div className=" grid gap-60 my-24 place-items-center">
			<Landing />
      <About />
		</div>
	);
}
