import { motion } from 'framer-motion';

const WhileInViewWrapper = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 1.2 }}
		>
			{children}
		</motion.div>
	);
};

export default WhileInViewWrapper;
