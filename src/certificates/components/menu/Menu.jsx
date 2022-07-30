import { certificates } from '../../data/certificates';



export const Menu = ( { onChangeCourse } ) => {
  return (
    <nav className="menu">
      {
        certificates.map( certificate =>(
          <div 
          key={ certificate.course }
          onClick={ () => onChangeCourse(certificate) }
          className="menu__card">
            <img 
            className="menu__img"
            src={`/assets/img/${certificate.course}.jpg`}
            alt="" />
          </div>
        ))
      }
    </nav>
  )
}
