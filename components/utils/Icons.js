import { TbBrandNextjs, TbBrandCss3 } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
//fill
import { RiSearch2Fill } from 'react-icons/ri';
//not fill
import { BsSearch } from 'react-icons/bs';

const Icons = () => {
	const icons = [
		<SiJavascript />,
		<TbBrandCss3 />,
		<SiFramer />,
		<TbBrandNextjs />,
		<SiMongodb />,
		<FaReact />,
		<SiTailwindcss />,
		// <RiSearch2Fill />,
		<BsSearch />,
	];
	return (
		<div className=''>
			<div className='grid grid-cols-8 place-items-center'>
				{icons.map((icon, index) => (
					<motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
						<Icon key={index} icon={icon} />
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Icons;

const Icon = ({ icon }) => {
	return <span className='text-2xl md:text-3xl lg:text-4xl text-primary'>{icon}</span>;
};
