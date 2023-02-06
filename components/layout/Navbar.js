import Link from 'next/link';
import ContactModal from '../utils/ContacModal';
import ModalContainer from '../utils/ModalContainer';

const Navbar = () => {
	return (
		<div className='bg-dark p-3 lg:p-4 text-light'>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				<Logo />

				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className='flex space-x-1 border-y lg:py-2 border-y-teriary opacity-70 font-mono text-3xl lg:text-4xl text-light font-bod borer border-primary/50 hover:opacity-100 hover:scale-105 transition duration-700 cursor-pointer'>
				<span>J</span>
				<span>L</span>
			</div>
		</Link>
	);
};

const NavLinks = () => {
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
		<div className='flex space-x-8 text-lg lg:text-2xl'>
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
