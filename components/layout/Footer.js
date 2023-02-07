import { Logo } from './Navbar';
import Link from 'next/link';
import ContactModal from '../utils/ContacModal';
import ModalContainer from '../utils/ModalContainer';
import { MdArticle } from 'react-icons/md';

const Footer = () => {
	return (
		<div className='bg-dark py-16'>
			<div className='max-w-7xl mx-auto grid gap-12  lg:grid-cols-3 place-items-center'>
				<div className='place-self-center order-1'>
					<Logo />
				</div>
				<div className="order-3 lg:order-2">
					<Blog />
				</div>
				<div className='place-self-center order-2 lg:order-3'>
					<FooterNavLinks />
				</div>
			</div>
		</div>
	);
};

export default Footer;

const FooterNavLinks = () => {
	const links = [
		{
			title: 'myself',
			href: '/about-me',
		},
		{
			title: 'my work',
			href: '/recent-work',
		},
	];
	return (
		<div className='grid gap-4 text-lg lg:text-2xl text-light text-center lg:text-start'>
			{links.map((link, index) => (
				<div
					key={index}
					className='opacity-80 tracking-wider hover:opacity-100 transition duration-700'
				>
					<Link href={link.href}>{link.title}</Link>
				</div>
			))}
			<ModalContainer buttonTitle='get in touch'>
				<ContactModal />
			</ModalContainer>
		</div>
	);
};

const Blog = () => {
	return (
		<div className='text-light  grid place-items-center gap-4 text-center'>
			<span className='text-3xl text-center border-b border-primary pb-2'>
				Blog
			</span>
			<a
				href='https://www.latzwebdesign.com/articles/website-for-a-small-business'
				target='_blank'
				rel=' noreferrer'
			>
				<div className='font-mono grid gap-2 place-items-center lg:hover:scale-110 hover:opacity-80 transition duration-700'>
					<div className='text-xl flex items-center gap-4'>
						<span>Small Business Web Design</span>
						<span className='text-3xl text-primary'>
							<MdArticle />
						</span>
					</div>
					<span className=' mx-4'>
						4 reasons why you deserve an optimized website that creates
						real-world results
					</span>
				</div>
			</a>
		</div>
	);
};
