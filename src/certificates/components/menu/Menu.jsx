import { motion } from 'framer-motion'
import { useState } from 'react';
import { certificates } from '../../data/certificates';


export const Menu = ( { onChangeCourse } ) => {

  const [selected, setSelected] = useState('')
  return (
      <div className="container">
        <nav className="menu">
        {
          certificates.map( certificate =>(
            <motion.div 
            key={ certificate.course }
            onClick={ () => {onChangeCourse(certificate); setSelected(certificate.course)} }
            className={`menu__card ${selected == certificate.course ? 'active' : ''}`}
            >
              <motion.img
              className="menu__img"
              src={`img/${certificate.course}.jpg`}
              alt="" />
            </motion.div>
          ))
        }
        </nav>
      </div>

  )
}
