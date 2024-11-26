import Header from "../components/Header"
import ItemGrid from "../components/ItemGrid"
import { foodData } from '../utils/food-info';
import { courseData } from '../utils/course-info';
import Faq from "../components/FAQ";

const Home = () => {

  return (
    <div className='flex flex-col w-full'>
      <Header title={'آشپزی را از پایه یاد بگیرید!'} type={'home'}/>

      <main id="recipes" className="flex flex-col w-full gap-16 px-4 py-2 bg-black md:px-12">
        <ItemGrid itemArray={foodData} inputType='search' inputPlaceholder='جست‌و‌جوی غذاها' containerId='recipes' />
        <ItemGrid itemArray={courseData} inputType='search' inputPlaceholder='جست‌و‌جوی دوره‌ها' containerId='courses'/> 
        <Faq />
      </main>
    </div>
  )
}

export default Home
