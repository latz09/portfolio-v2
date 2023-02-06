import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModalContainer = ({ buttonTitle, children }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const backdropVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.25,
			},
		},
		exit: {
			opacity: 0,
			transition: { duration: 1, delay: 0.3 },
		},
	};

	const modalVariant = {
		hidden: { opacity: 0, scale: 0.4 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 50,
				duration: 1.3,
				delay: 0.2,
			},
		},
		exit: {
			opacity: 0,
			scale: 0,
			transition: { duration: 0.3 },
		},
	};

	return (
		<div>
			<button
				onClick={() => {
					setModalIsOpen(true);
				}}
				className='btn'
			>
				{buttonTitle}
			</button>
			<AnimatePresence>
				{modalIsOpen && (
					<motion.div
						className='modal-overlay'
						variants={backdropVariant}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						<motion.div
							className='modal'
							variants={modalVariant}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							<div className='flex flex-col p-4'>
								<button
									onClick={() => {
										setModalIsOpen(false);
									}}
								>
									close
								</button>
								<div>{children}</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ModalContainer;
