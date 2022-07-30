
import { certificates } from '../data/certificates';

export const getCourseByName = ( course ) =>{

    return certificates.filter( certificate => certificate.course === course);
}