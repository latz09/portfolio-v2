import juanjoDesktop from '../public/images/projects/juanjos/desktop.jpg';
import juanjoPhone from '../public/images/projects/juanjos/phone.jpg';
import goodGuysDesktop from '../public/images/projects/good-guys/desktop.jpg';
import goodGuysPhone from '../public/images/projects/good-guys/phone.jpg';
import movieConnectionDesktop from '../public/images/projects/movie-connection/desktop.jpg';
import movieConnectionPhone from '../public/images/projects/movie-connection/phone.jpg';
import movieConnectionGif from '../public/images/gifs/movie-connection.gif';
import livinglandscapesDesktop from '../public/images/projects/living-landscapes/desktop.jpg';
import livinglandscapesPhone from '../public/images/projects/living-landscapes/phone.jpg';
import livinglandscapesGif from '../public/images/gifs/living-space.gif';
import justPawsDesktop from '../public/images/projects/just-paws/desktop.jpg';
import justPawsPhone from '../public/images/projects/just-paws/phone.jpg';
import justPawsGif from '../public/images/gifs/just-paws.gif';
import picturePerfectDesktop from '../public/images/projects/picture-perfect/desktop.jpg';
import picturePerfectPhone from '../public/images/projects/picture-perfect/phone.jpg';
import erikNelsonDesktop from '../public/images/projects/erik-nelson/desktop.jpg';
import erikNelsonPhone from '../public/images/projects/erik-nelson/phone.jpg';

export const websites = [
	{
		name: 'Living Space Landscapes',
		featured: true,
		gif: livinglandscapesGif,
		url: 'https://www.livingspacelandscapes.com/',
		description: [
			'This website is designed to tell the story of a landscaping company that specializes in Japanese style gardening while also incorporating stones and boulders for an aesthetically pleasing and meaningful end result.',
			'The website utilizes an array of visuals to depict natural gardens that features designs that capture the essence of Japanese gardens.',
			'Experienced professionals from the company will help homeowners bring their visions to life with skilled consulting.',
			'The website also features a portfolio of projects completed by the company, so visitors can get an idea of what they can expect from the company.',
		],
		tech: ['Javascript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: livinglandscapesPhone,
			desktop: livinglandscapesDesktop,
		},

		imageAlt: 'image of the Living landscapes Landscapes website',
		github: 'https://github.com/LSLandscapes/living-landscapes-landscapes',
	},
	{
		name: 'Movie Connection',
		featured: true,
		gif: movieConnectionGif,
		url: 'https://movie-connection.vercel.app/',
		description: [
			'This website uses the IMDB API to allow users to search for any movie, to provide movie details; such as actors, genres, length, and even allows you to watch different clips from the selected movie.',
			'Once the user has found the desired movie, the website provides recommendations for similar movies based on the selected movie.',
			'The design is clean and smooth, allowing for easy/comfortable horizontal scrolling of movie options.',
		],
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
		name: 'Erik Nelson Plumbing',
		featured: false,
		url: 'https://eriknelson.vercel.app/',
		description: [
			'This website was created for a plumbing business and features a modern, clean interface.',
			'The website has a user-friendly navigation system and is optimized for both desktop and mobile devices. The websites design has a minimalist look with clear, bold colors and readable fonts.',
			'It also provides easy access to customer reviews and customer testimonials.',
		],
		tech: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: erikNelsonPhone,
			desktop: erikNelsonDesktop,
		},

		imageAlt: 'image of the Sweet JuanJos website',
		github: 'https://github.com/latz09/juanjos',
	},
	{
		name: 'Sweet JuanJos',
		featured: false,
		url: 'https://juanjos.vercel.app/',
		description: [
			'This website is for a baking company that specializes in cupcakes, cookies, and candies, as well as custom desserts for special events such as weddings. ',
			'The website was designed to tell the story of the company while also providing an interactive menu to showcase the variety of desserts available.  ',
			'To create a visually appealing design, I utilized a modern and colorful pallete, as well as a range of vibrant visuals to help customers explore the selection.',
			'Overall, the design of the website is to emphasize the company’s unique aesthetic while also providing a user-friendly experience.',
		],
		tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
		images: {
			mobile: juanjoPhone,
			desktop: juanjoDesktop,
		},

		imageAlt: 'image of the Sweet JuanJos website',
		github: 'https://github.com/latz09/juanjos',
	},
	{
		name: 'Just Paws Pet Salon',
		featured: true,
		gif: justPawsGif,
		url: 'https://justpaws.vercel.app/',
		description: [
			'This website design for a pet salon was created with the user experience in mind. Its focus was to provide a complete overview of the salon’s services and pricing.  ',
			'The design is modern and user-friendly, allowing customers to easily navigate the site.',
			'Additionally, an interactive pricing module was create to allow users to select prices and services based on different animal sizes.',
			'Overall, the design was created to deliver the pet salon services in an accessible and intuitive way.',
		],
		tech: ['React', 'Javascript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: justPawsPhone,
			desktop: justPawsDesktop,
		},

		imageAlt: 'image of the Just Paws website',
		github: 'https://github.com/latz09/justpaws',
	},

	{
		name: 'Good Guys Plumbing',
		featured: false,
		url: 'https://good-guys-plumbing.vercel.app/',
		description: [
			'This website for a plumbing company was designed with the user experience in mind.  It is easy to navigate and visually stimulating, making it enjoyable to scroll through.',
			'Some Features of the website design include a unique color palette, engaging visual animations and a cohesive layout.  ',
			'The website also includes informative content about the plumbing services the company offers, such as drain cleaning, pipe replacement, and fixture installation.',
			'This design was created to provide a positive experience for visitors and to educate them about the services the company provides.',
		],
		tech: ['Javascript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: goodGuysPhone,
			desktop: goodGuysDesktop,
		},

		imageAlt: 'image of the good guys plumbing website',
		github: 'https://github.com/latz09/plumbing-company',
	},

	{
		name: 'Picture Perfect Art and Frame',
		featured: false,
		url: 'https://picture-perfect.vercel.app/',
		description: [
			'This website was designed for an art framing company.  It highlights the company’s services and experience in the field, while also allowing users to easily browse through the different categories of framing they offer.',
			'It provides a clean and easy-to-navigate platform that leads users through all the different services they provide, while providing users with an enjoyable and informative experience, making it a perfect solution for the framing company.',
		],
		tech: ['React', 'Javascript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
		images: {
			mobile: picturePerfectPhone,
			desktop: picturePerfectDesktop,
		},

		imageAlt: 'image of the Picture Perfect website',
		github: 'https://github.com/latz09/Picture-perfect',
	},
];
