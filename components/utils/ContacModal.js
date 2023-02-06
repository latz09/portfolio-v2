import {
	AiOutlineMail,
	AiFillGithub,
	AiOutlinePhone,
	AiFillLinkedin,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { SiPolywork } from 'react-icons/si';

const ContactModal = () => {
	return (
		<div className='grid gap-16 py-8 place-items-center  '>
			<SocialIcons />
			<ContactInfo />
			{/* <ContactForm /> */}
		</div>
	);
};

export default ContactModal;

const ContactInfo = () => {
	return (
		<div className='grid gap-4 tracking-widest'>
			<div className='flex space-x-4 text-light/80'>
				<span className='social-icons '>
					<AiOutlinePhone />
				</span>
				<span>{`(715) 630 5689`}</span>
			</div>
			<div className='flex space-x-4 text-light/80'>
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
		<div className='place-self-center'>
			<div>contact form</div>
		</div>
	);
};

const SocialIcons = () => {
	return (
		<div className=' flex justify-between w-1/2 mx-auto'>
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
