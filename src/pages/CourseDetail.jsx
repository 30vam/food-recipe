import { useParams } from 'react-router-dom'
import { courseData } from '../utils/course-info';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseData.find(item => item.id == courseId);
  
  return (
    <div className='text-3xl'>
       { course.name }
    </div>
  )
}

export default CourseDetail