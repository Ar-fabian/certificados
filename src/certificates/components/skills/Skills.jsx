
export const Skills = ({ course }) => {
  const { knowledge } = course;
  return (<>
    <h1 className="skills__title">Acquired Knowledge</h1>
    <ul className="skills__list">
      {
        knowledge.map( item => {
          return <li key={item} className="skills__item">
            <img 
            className="skills__img"
            src={ `./src/assets/logos/${item}.png` }
            alt="" />
            <p className="skills__name">{item}</p>
          </li>
        })
      }
    </ul>
  </>)
}
