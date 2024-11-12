import { motion } from "framer-motion";
import RandomSizeText from './RandomSizeText';

function Background() {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      };

    return (
        <>
            <motion.div 
                variants={{
                hidden: { opacity: 0 }, 
                show: { 
                    opacity: 1,
                    transition: {
                    staggerChildren: 0.3
                    },
                },
                }}
                initial="hidden"
                animate="show"
                className="grid-container"
            >
            <motion.div className="grid-item" style={{ color: 'red' }} variants={itemVariants}>
            <RandomSizeText text='X' />
            </motion.div>
            <motion.div className="grid-item" style={{ color: 'blue' }} variants={itemVariants}>
            <RandomSizeText text='O' />
            </motion.div>
            <motion.div className="grid-item" style={{ color: 'blue' }} variants={itemVariants}>
            <RandomSizeText text='O' />
            </motion.div>
            <motion.div className="grid-item" style={{ color: 'red' }} variants={itemVariants}>
            <RandomSizeText text='X' />
            </motion.div>
            </motion.div>
        </>
    )
}

export default Background