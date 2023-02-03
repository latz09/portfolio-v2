import { websites } from '@/data/websites';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';

const RecentWorkDisplay = () => {
	return (
		<div className='grid   place-items-center   '>
			{websites.map((website, index) => (
				<div key={index} className='w-full'>
					<WebsiteCard
						name={website.name}
						url={website.url}
						description={website.description}
						tech={website.tech}
						images={website.images}
						imageAlt={website.imageAlt}
						github={website.github}
					/>
				</div>
			))}
		</div>
	);
};

export default RecentWorkDisplay;

const WebsiteCard = ({
	name,
	url,
	description,
	tech,
	images,
	imageAlt,
	github,
}) => {
	return (
		<div className='grid grid-cols-3 max-w-7xl mx-auto py-24'>
			<motion.div
				className='col-span-2 '
				initial={{ y: 5 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
			>
				<ImageDisplay images={images} imageAlt={imageAlt} />
			</motion.div>
			<div className='col-span-1 flex flex-col justify-between'>
				<Details name={name} description={description} tech={tech} />
				<Links github={github} siteUrl={url} />
			</div>
		</div>
	);
};

const Details = ({ name, description, tech }) => {
	return (
		<div className='grid gap-4 text-dark'>
			<span className='text-3xl  font-semibold tracking-widest'>{name}</span>
			<div className='flex justify-between text-primary font-bold tracking-wide'>
				{tech.map((tech) => (
					<span>{tech}</span>
				))}
			</div>{' '}
			<span className='text-xl opacity-80 tracking-wider text-justify'>
				{description}
			</span>
		</div>
	);
};

const ImageDisplay = ({ images, imageAlt }) => {
	return (
		<motion.div
			className=' grid grid-cols-3 gap-8 scale-95  hover:scale-110  transition duration-1000'
			initial={{ opacity: 0.3 }}
			whileInView={{ opacity: 0.7 }}
			whileHover={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 1.5 }}
		>
			<div className='col-span-2  border-teriary rounded grid place-items-center'>
				<Image
					src={images.desktop.src}
					alt={imageAlt}
					width={images.desktop.width}
					height={images.desktop.height}
				/>
			</div>
			<div className=''>
				<Image
					src={images.mobile.src}
					alt={imageAlt}
					width={556 / 3}
					height={999 / 3}
					// layout='responsive'
				/>
			</div>
		</motion.div>
	);
};
const Links = ({ github, siteUrl }) => {
	return (
		<div className='flex justify-between items-center'>
			<a
				className=' text-2xl text-primary '
				href={siteUrl}
				target='_blank.'
				rel='noreferrer'
			>
				visit site --
			</a>
			<a
				className='text-4xl flex space-x-2 items-center'
				href={github}
				target='_blank.'
				rel='noreferrer'
			>
				<span className='text-lg tracking-widest font-mono'>code</span>
				<BsGithub />
			</a>
		</div>
	);
};
