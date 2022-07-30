import { useState } from "react";
import { certificates } from '../data/certificates';


export const useCourse = () =>{
    const [course, setCourse] = useState( certificates[0] );

    const onChangeCourse = ( currentCourse ) =>{
        setCourse( currentCourse );
    }

    return {
        course,
        onChangeCourse
    }
}