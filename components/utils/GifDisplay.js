import Image from 'next/image';
import movieGif from '../../public/images/gifs/movie-connection.gif';
import movieGif2 from '../../public/images/gifs/just-paws.gif';
import movieGif3 from '../../public/images/gifs/living-space.gif';
import ButtonLink from './ButtonLink';
import { websites } from '/data/websites';

const GifDisplay = ({}) => {
	const gifs = [movieGif, movieGif2, movieGif3];
	const featuredWebsites = websites.filter(
		(website) => website.featured === true
	);

	return (
		<div className='grid gap-16 '>
			<div className='text text-3xl text-primary border-b border-primary pb-2'>
				Recent Work
			</div>

			<div className='grid grid-cols-3 gap-4 place-items-baseline opacity-90 hover:opacity-100 transition duration-700 my-8 '>
				{gifs.map((gif, index) => (
					<div key={index} className='grid place-items-center shadow-xl'>
						<Image src={gif} alt='' priority=' true' />
					</div>
				))}
			</div>

			<div className='grid place-items-center'>
				<ButtonLink
					href={'/recent-work'}
					title={'View All and Learn More'}
					type={'primary'}
				/>
			</div>
		</div>
	);
};

export default GifDisplay;

const FeaturedSite = ({ title, gif, url }) => {
	return <div></div>;
};
