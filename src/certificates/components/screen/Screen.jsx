import { motion, AnimatePresence} from 'framer-motion'

export const Screen = ({ course }) => {
  return (
        <AnimatePresence exitBeforeEnter>
          <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .2 }}
          key={ course.course }
          className="screen__img" 
          src={`img/${course.course}.jpg`}
          alt={ course.course } />
        </AnimatePresence>
  )
}
