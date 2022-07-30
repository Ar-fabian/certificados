import { Course, Menu,  } from "../components/"
import { useCourse } from "../hooks/useCourse"

export const Certificates = () => {

  const { course, onChangeCourse } = useCourse();

  return (
  <section className="certificates">

    <Course course={course}/>
    
    <Menu onChangeCourse={ onChangeCourse }/>

  </section>
  )
}
