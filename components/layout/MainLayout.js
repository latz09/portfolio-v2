const MainLayout = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<div className="bg-primary p-8"></div>
			<main className='flex-grow'>{children}</main>
            <div></div>
		</div>
	);
};

export default MainLayout;
