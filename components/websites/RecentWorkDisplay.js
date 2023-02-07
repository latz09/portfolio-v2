import { websites } from '@/data/websites';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RecentWorkDisplay = () => {
	return (
		<div className='grid gap-24 text-light mb-24'>
			{websites.map((website, index) => (
				<motion.div
					key={index}
					className='w-full'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 1.2 }}
				>
					<WebsiteCard
						name={website.name}
						url={website.url}
						description={website.description}
						tech={website.tech}
						images={website.images}
						imageAlt={website.imageAlt}
						github={website.github}
					/>
				</motion.div>
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
		<div className='max-w-5xl mx-auto'>
			<div className='grid lg:grid-cols-2 place-items-center gap-4 lg:gap-16 '>
				<div className='lg:col-span- grid gap-8 scale-90 hover:scale-100 transition duration-700 '>
					<motion.div
						className='borde'
						initial={{ y: 3 }}
						whileInView={{ y: 0 }}
						transition={{
							duration: 1.2,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<ImageDisplay images={images} imageAlt={imageAlt} />
					</motion.div>
				</div>
				<div className='flex flex-col justify-between gap-8 mx-4 lg:mx-0 text-start lg:text-justify'>
					<Description
						description={description}
						tech={tech}
						name={name}
						url={url}
						github={github}
					/>
					<Links github={github} siteUrl={url} />
				</div>
			</div>
		</div>
	);
};

const ImageDisplay = ({ images, imageAlt }) => {
	return (
		<div className='shadow-xl shadow-teriary/40 grid place-items-cente'>
			<Image
				src={images.desktop.src}
				alt={imageAlt}
				width={images.desktop.width}
				height={images.desktop.height}
			/>
		</div>
	);
};

const Description = ({ description, name, tech }) => {
	return (
		<div className='grid gap-4 borde'>
			<div className=' text-xl lg:text-2xl font-semibold border-b pb-1 border-light/70 lg:pb-2'>
				{name}
			</div>
			<motion.div
				className='text-lg lg:text-xl py-2'
				initial={{ opacity: 0.7, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.2, duration: 1.2 }}
			>
				<div className="grid gap-2">
					{description.map((desc, index) => (
						<span key={index}>{desc}</span>
					))}
				</div>
			</motion.div>
			<div className='grid grid-cols-3 text-sm lg:text-base bg-dark/10 p-2 place-items-center lg:place-items-start'>
				{tech.map((tech, index) => (
					<span key={index} className=' font-semibold lg:tracking-widest'>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
};

const Links = ({ github, siteUrl }) => {
	return (
		<div className='flex justify-around items-center space-x-8 lg:space-x-0'>
			<a
				className=' p-3 lg:p-4  shadow hover:scale-95 transition duration-700 font-bold rounded  hover:shadow-lg text-primary bg-teriary hover:bg-teriary/80  w-2/3 lg:w-1/3 text-center'
				href={siteUrl}
				target='_blank.'
				rel='noreferrer'
			>
				<span>Visit Site Here</span>
			</a>
			<a
				className='p-3 lg:p-4  shadow hover:scale-95 transition duration-700 font-bold rounded  hover:shadow-lg text-light bg-primary  hover:bg-primary/80 w-2/3 lg:w-1/3 text-center '
				href={github}
				target='_blank.'
				rel='noreferrer'
			>
				<span className=''>View the Code</span>
				{/* <BsGithub /> */}
			</a>
		</div>
	);
};
