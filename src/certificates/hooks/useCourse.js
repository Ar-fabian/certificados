import { useState } from "react"


export const useCourse = () =>{
    const [course, setCourse] = useState({})

    const onChangeCourse = ( currentCourse ) =>{
        console.log( currentCourse );
        setCourse( currentCourse );
    }

    return {
        course,
        onChangeCourse
    }
}