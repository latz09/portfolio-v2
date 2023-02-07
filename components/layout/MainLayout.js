import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<Navbar />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
