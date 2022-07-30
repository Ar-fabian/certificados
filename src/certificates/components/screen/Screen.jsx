
export const Screen = ({ course }) => {
  return (
    <img
     className="screen__img" 
     src={`/assets/img/${course.course}.jpg`}
     alt="" />
  )
}
