import juanjoDesktop from '../public/images/projects/juanjos/desktop.jpg';
import juanjoPhone from '../public/images/projects/juanjos/phone.jpg';
import goodGuysDesktop from '../public/images/projects/good-guys/desktop.jpg';
import goodGuysPhone from '../public/images/projects/good-guys/phone.jpg';
import movieConnectionDesktop from '../public/images/projects/movie-connection/desktop.jpg';
import movieConnectionPhone from '../public/images/projects/movie-connection/phone.jpg';

export const websites = [
	{
		name: 'Sweet JuanJos',
		url: 'https://juanjos.vercel.app/',
		description:
			'Bakery website that specializes in cupcakes, specialty cakes, cookies, and candies.',
		tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
		images: {
			mobile: juanjoPhone,
			desktop: juanjoDesktop,
		},

		imageAlt: 'image of the Sweet JuanJos website',
		github: 'https://github.com/latz09/juanjos',
	},

	{
		name: 'Good Guys Plumbing',
		url: 'https://good-guys-plumbing.vercel.app/',
		description:
			'Need a description for this website. I am a plumber and I need a website.',
		tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
		images: {
			mobile: goodGuysPhone,
			desktop: goodGuysDesktop,
		},

		imageAlt: 'image of the good guys plumbing website',
		github: 'https://github.com/latz09/plumbing-company',
	},
	{
		name: 'Movie Connection',
		url: 'https://movie-connection.vercel.app/',
		description: 'need a description for this website as well',
		tech: [
			'IMDB API',
			'React',
			'Next.js',
			'Tailwind CSS',
			'Framer Motion',
			'Vercel',
		],
		images: {
			mobile: movieConnectionPhone,
			desktop: movieConnectionDesktop,
		},

		imageAlt: 'image of the movie connection website',
		github: 'https://github.com/latz09/movie-connection',
	},
];
