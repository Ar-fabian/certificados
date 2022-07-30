import { Screen, Skills } from "../"

export const Course = ({ course }) => {
  return (
  <div className="course">
    <Screen course={ course }/>
    <Skills course={ course }/>
    
  </div>
  )
}
