import { GiCoffeeCup } from 'react-icons/gi';
import { motion } from 'framer-motion';

const CalendlyLink = () => {
	return (
		<div>
			<a
				href='https://calendly.com/jordan-latz/virtual-coffee'
				target='_blank'
				rel='noreferrer'
			>
				<div className='grid gap-4 place-items-center lg:flex items-center lg:space-x-8'>
					<motion.div
						className='text-8xl'
						initial={{ scale: 0.96, y: 3 }}
						animate={{ scale: 1, y: 0 }}
						transition={{
							duration: 1.65,
							repeat: Infinity,
							repeatType: 'mirror',
						}}
					>
						<GiCoffeeCup />
					</motion.div>
					<div className='grid gap-4 place-items-center'>
						<span className=''> Set up a time for a virtual coffee</span>
						<span className='bg-light px-8 py-2 text-dark text-2xl rounded-xl shadow hover:bg-opacity-60 hover:text-primary/70 transition duration-700'>
							Set it up!{' '}
						</span>
					</div>
				</div>
			</a>
		</div>
	);
};

export default CalendlyLink;

export const CalendlyLinkTwo = () => {
	return (
		<div>
			<a
				href='https://calendly.com/jordan-latz/virtual-coffee'
				target='_blank'
				rel='noreferrer'
			>
				<div className='grid gap-4 place-items-center lg:flex items-center lg:space-x-8'>
					<motion.div
						className='text-8xl'
						initial={{ scale: 0.96, y: 3 }}
						animate={{ scale: 1, y: 0 }}
						transition={{
							duration: 1.65,
							repeat: Infinity,
							repeatType: 'mirror',
						}}
					>
						<GiCoffeeCup />
					</motion.div>
					<div className='grid gap-4 place-items-center'>
						<span className=''> Set up a time for a virtual coffee</span>
						<span className='bg-primary text-light px-8 py-2  text-2xl rounded-xl shadow hover:bg-primary/50 hover:text-light transition duration-700'>
							Set it up!{' '}
						</span>
					</div>
				</div>
			</a>
		</div>
	);
};
