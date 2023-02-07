import {
	AiOutlineMail,
	AiFillGithub,
	AiOutlinePhone,
	AiFillLinkedin,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { SiPolywork } from 'react-icons/si';
import CalendlyLink from './CalendlyLink';
import { motion } from 'framer-motion';

const ContactModal = () => {
	return (
		<div className='grid gap-16 py-8 place-items-center '>
			<SocialIcons />
			<ContactForm />

			<ContactInfo />
		</div>
	);
};

export default ContactModal;

const ContactInfo = () => {
	return (
		<div className='grid gap-2 place-items-center lg:flex justify-around w-full tracking-widest'>
			<div className='flex items-center space-x-4 text-lg'>
				<span className='social-icons '>
					<AiOutlinePhone />
				</span>
				<span>{`(715) 630 5689`}</span>
			</div>
			<div className='flex space-x-4 text-lg'>
				<span className='social-icons '>
					<AiOutlineMail />
				</span>
				<span>{`jordan@latzwebdesign.com`}</span>
			</div>
		</div>
	);
};

const ContactForm = () => {
	return (
		<motion.div
			className='place-self-center'
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<CalendlyLink />
		</motion.div>
	);
};

const SocialIcons = () => {
	return (
		<div className=' flex w-full justify-around lg:justify-between lg:w-1/2 mx-auto'>
			<a
				href='https://github.com/latz09'
				target='_blank'
				rel='noreferrer'
				className='social-icons'
			>
				<AiFillGithub />
			</a>
			<a
				href='https://twitter.com/LatzWebDesign'
				target='_blank'
				rel='noreferrer'
				className='social-icons'
			>
				<AiOutlineTwitter />
			</a>

			<a
				href='https://www.linkedin.com/in/jordan-latz/'
				target='_blank'
				rel='noreferrer'
				className='social-icons'
			>
				<AiFillLinkedin />
			</a>

			<a
				href='https://www.polywork.com/jordan_latz'
				target='_blank'
				rel='noreferrer'
				className='social-icons'
			>
				<SiPolywork />
			</a>
		</div>
	);
};
