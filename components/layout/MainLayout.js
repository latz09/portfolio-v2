import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<Navbar />
			<main className='flex-grow'>{children}</main>
            <div></div>
		</div>
	);
};

export default MainLayout;
