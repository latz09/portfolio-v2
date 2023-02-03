import About from '@/components/About';
import Landing from '@/components/Landing';
import Icons from '@/components/utils/Icons';
import Head from 'next/head';
import Image from 'next/image';
import x from '../public/images/gifs/juanjos.gif'

export default function Home() {
	return (
		<div className=' grid gap-12 my-12 lg:my-24  max-w-7xl mx-4 lg:mx-auto  '>
			<Landing />
			<Icons />
			<Gif />
		</div>
	);
}

const Gif = () => {
	return <Image src={x} alt='x' priority='true'/>;
};
