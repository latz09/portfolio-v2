import { HiDownload } from 'react-icons/hi';

const ResumeDownload = () => {
	return (
		<>
			<a
				href='/files/resume-jordan_latz.pdf'
				alt='alt text'
				target='_blank'
				rel='noopener noreferrer'
			>
				<div className="flex space-x-2 items-center ">
					<span>resume</span>
					<span>
						<HiDownload />
					</span>
				</div>
			</a>
		</>
	);
};

export default ResumeDownload;
