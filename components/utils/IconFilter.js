import { RiMovieFill } from 'react-icons/ri';
import { GiCupcake, GiWoodFrame } from 'react-icons/gi';
import { BsTreeFill } from 'react-icons/bs';
import { FaPaw } from 'react-icons/fa';
import { MdPlumbing } from 'react-icons/md';
import { motion } from 'framer-motion';

const IconFilter = ({ name }) => {
	return (
		<>
			<motion.div
				className='text-5xl'
				initial={{ scale: 0.93 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror' }}
			>
				{name === 'Movie Connection' && (
					<span className=' text-[#DCA11D] '>
						{' '}
						<RiMovieFill />
					</span>
				)}
				{name === 'Living Space Landscapes' && (
					<span className=' text-[#8EC56E] '>
						{' '}
						<BsTreeFill />
					</span>
				)}
				{name === 'Sweet JuanJos' && (
					<span className=' text-[#FF3A54] '>
						{' '}
						<GiCupcake />
					</span>
				)}
				{name === 'Just Paws Pet Salon' && (
					<span className=' text-[#0C71E4] '>
						{' '}
						<FaPaw />
					</span>
				)}
				{name === 'Good Guys Plumbing' && (
					<span className=' text-[#F69C32] '>
						{' '}
					
					</span>
				)}
				{name === 'Picture Perfect Art and Frame' && (
					<span className=' text-[#FB212F] '>
						{' '}
						<GiWoodFrame />
					</span>
				)}
				{name === 'Erik Nelson Plumbing' && (
					<span className=' text-[#DB3D3C] '>
						{' '}
						<MdPlumbing />
					</span>
				)}
			</motion.div>
		</>
	);
};

export default IconFilter;
