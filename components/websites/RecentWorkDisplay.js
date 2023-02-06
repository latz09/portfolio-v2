import { websites } from '@/data/websites';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';

const RecentWorkDisplay = () => {
	return (
		<div className='grid gap-24 text-light'>
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
		<div className='max-w-5xl mx-auto'>
			<div className='grid lg:grid-cols-2 place-items-center gap-4 lg:gap-16 '>
				<div className='lg:col-span- grid gap-8 scale-90 hover:scale-100 transition duration-700 '>
					<motion.div
						className='borde'
						initial={{ y: 5 }}
						whileInView={{ y: 0 }}
						transition={{}}
					>
						<ImageDisplay images={images} imageAlt={imageAlt} />
					</motion.div>
				</div>
				<div className='flex flex-col justify-between gap-8 mx-4 lg:mx-0 text-center lg:text-justify'>
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

const Description = ({ description,  name,  tech }) => {
	return (
		<div className='grid gap-4 borde'>
			<div className=' text-xl lg:text-2xl font-semibold border-b pb-1 border-light/70 lg:pb-2'>{name}</div>
			<div className="text-lg lg:text-xl py-2">{description}</div>
			<div className="grid grid-cols-3 bg-dark/10 p-3 place-items-center lg:place-items-start">
                {tech.map((tech, index) => (
                    <span key={index} className=' font-semibold tracking-widest'>{tech}</span>
                ))}
            </div>
		</div>
	);
};

const Links = ({ github, siteUrl }) => {
    
	return (
		<div className='flex justify-around items-center '>
			<a
				className=' p-3 lg:p-4  shadow hover:scale-95 transition duration-700 font-bold rounded  hover:shadow-lg text-primary bg-teriary hover:bg-teriary/80  w-1/3 text-center'
				href={siteUrl}
				target='_blank.'
				rel='noreferrer'
			>
				<span>Visit Site Here</span>
			</a>
			<a
				className='p-3 lg:p-4  shadow hover:scale-95 transition duration-700 font-bold rounded  hover:shadow-lg text-light bg-primary  hover:bg-primary/80 w-1/3 text-center '
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
