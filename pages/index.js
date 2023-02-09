import About from '@/components/About';
import Landing from '@/components/Landing';
import { CalendlyLinkTwo } from '@/components/utils/CalendlyLink';
import GifDisplay from '@/components/utils/GifDisplay';
import Icons from '@/components/utils/Icons';
import ResumeDownload from '@/components/utils/ResumeDowload';
import Image from 'next/image';
import gif from '../public/images/gifs/movie-connection.gif';

export default function Home() {
	return (
		<div className='grid  gap-12 my-12 lg:my-24  max-w-7xl mx-4 lg:mx-auto  '>
			<Landing />
			<Icons />
			<div className='text-xl place-self-center my-16'>
				<CalendlyLinkTwo />
			</div>
			<div className="place-self-center">
				<ResumeDownload />
			</div>
		
		</div>
	);
}
