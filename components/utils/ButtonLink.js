import Link from 'next/link';

const ButtonLink = ({ href, title, type }) => {
	return (
		<div className=''>
			<Link href={href}>
				<div
					className={`p-2 lg:p-4  shadow hover:scale-95 transition duration-700 font-bold rounded  hover:shadow-lg ${
						type === 'primary'
							? 'text-light bg-primary  hover:bg-primary/80  '
							: 'text-primary bg-teriary hover:bg-teriary/80  '
					}  `}
				>
					{title}
				</div>
			</Link>
		</div>
	);
};

export default ButtonLink;
