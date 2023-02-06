import About from '@/components/About';
import Landing from '@/components/Landing';
import GifDisplay from '@/components/utils/GifDisplay';
import Icons from '@/components/utils/Icons';
import Image from 'next/image';
import gif from '../public/images/gifs/movie-connection.gif';

export default function Home() {
	return (
		<div className=' grid gap-12 my-12 lg:my-24  max-w-7xl mx-4 lg:mx-auto  '>
			<Landing />
			<Icons />
		</div>
	);
}
