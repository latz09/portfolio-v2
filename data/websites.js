import juanjoDesktop from '../public/images/projects/juanjos/desktop.jpg';
import juanjoPhone from '../public/images/projects/juanjos/phone.jpg';
import goodGuysDesktop from '../public/images/projects/good-guys/desktop.jpg';
import goodGuysPhone from '../public/images/projects/good-guys/phone.jpg';
import movieConnectionDesktop from '../public/images/projects/movie-connection/desktop.jpg';
import movieConnectionPhone from '../public/images/projects/movie-connection/phone.jpg';
import movieConnectionGif from '../public/images/gifs/movie-connection.gif'
import livinglandscapesDesktop from '../public/images/projects/living-landscapes/desktop.jpg';
import livinglandscapesPhone from '../public/images/projects/living-landscapes/phone.jpg';
import livinglandscapesGif from '../public/images/gifs/living-space.gif'
import justPawsDesktop from '../public/images/projects/just-paws/desktop.jpg';
import justPawsPhone from '../public/images/projects/just-paws/phone.jpg';
import justPawsGif from '../public/images/gifs/just-paws.gif' 
import picturePerfectDesktop from '../public/images/projects/picture-perfect/desktop.jpg';
import picturePerfectPhone from '../public/images/projects/picture-perfect/phone.jpg';


export const websites = [
	{
		name: 'Movie Connection',
		featured: true,
		gif: movieConnectionGif,
		url: 'https://movie-connection.vercel.app/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor. Enim ut tellus elementum sagittis vitae et leo.',
		tech: [
			'IMDB API',
			'Javascript',
			'React',
			'Next.js',
			'Tailwind CSS',
			'Framer Motion',
		],
		images: {
			mobile: movieConnectionPhone,
			desktop: movieConnectionDesktop,
		},

		imageAlt: 'image of the movie connection website',
		github: 'https://github.com/latz09/movie-connection',
	},

	{
		name: 'Just Paws Pet Salon',
		featured: true,
		gif: justPawsGif,
		url: 'https://justpaws.vercel.app/',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor. Enim ut tellus elementum sagittis vitae et leo.',
		tech: ['React', 'Javascript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: justPawsPhone,
			desktop: justPawsDesktop,
		},

		imageAlt: 'image of the Just Paws website',
		github: 'https://github.com/latz09/justpaws',
	},
	{
		name: 'Sweet JuanJos',
		featured: false,
		url: 'https://juanjos.vercel.app/',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor. Enim ut tellus elementum sagittis vitae et leo.',
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
		featured: false,
		url: 'https://good-guys-plumbing.vercel.app/',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor. Enim ut tellus elementum sagittis vitae et leo.',
		tech: ['Javascript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: goodGuysPhone,
			desktop: goodGuysDesktop,
		},

		imageAlt: 'image of the good guys plumbing website',
		github: 'https://github.com/latz09/plumbing-company',
	},

	{
		name: 'Living Space Landscapes',
		featured: true,
		gif: livinglandscapesGif,
		url: 'https://livingspacelandscapes.vercel.app/',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor. Enim ut tellus elementum sagittis vitae et leo.',
		tech: ['Javascript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: livinglandscapesPhone,
			desktop: livinglandscapesDesktop,
		},

		imageAlt: 'image of the Living landscapes Landscapes website',
		github: 'https://github.com/LSLandscapes/living-landscapes-landscapes',
	},

	{
		name: 'Picture Perfect Art and Frame',
		featured: false,
		url: 'https://picture-perfect.vercel.app/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor. Enim ut tellus elementum sagittis vitae et leo.',
		tech: ['React', 'Javascript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: picturePerfectPhone,
			desktop: picturePerfectDesktop,
		},

		imageAlt: 'image of the Picture Perfect website',
		github: 'https://github.com/latz09/Picture-perfect',
	},
];
