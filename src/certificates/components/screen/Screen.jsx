
export const Screen = ({ course }) => {
  return (
        <img
        className="screen__img" 
        src={`img/${course.course}.jpg`}
        alt="" />
  )
}
