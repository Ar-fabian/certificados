import {motion, AnimatePresence} from 'framer-motion'


export const Skills = ({ course }) => {
  const { knowledge } = course;
  return (<>
    <h1 className="skills__title">Acquired Knowledge</h1>
    <ul className="skills__list">
    <AnimatePresence exitBeforeEnter>
      {
        knowledge.map( item => (
          <motion.li key={ `${course.course}${item}` } className="skills__item"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: .2 }}
          >
            <motion.img 
            className="skills__img"
            src={ `logos/${item}.png` }
            alt="" />
            <p className="skills__name">{item}</p>
          </motion.li>
        ))
      }
      </AnimatePresence>
    </ul>
  </>)
}
