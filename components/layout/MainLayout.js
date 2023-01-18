const MainLayout = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<div></div>
			<main className='flex-grow'>{children}</main>
            <div></div>
		</div>
	);
};

export default MainLayout;
