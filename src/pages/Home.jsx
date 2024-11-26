import Header from "../components/Header.jsx"
import ItemGrid from "../components/ItemGrid.jsx"
import { Carousel } from '../components/Carousel.jsx'
import { CarouselCard } from '../components/CarouselCard.jsx'
import { foodData } from '../utils/food-info.js';
import { courseData } from '../utils/course-info.js';
import Faq from "../components/Faq.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { foodIcon, favoriteIcon, courseIcon, faqIcon } from "../images/icons";        
import { Banner2, Banner3, Banner7, Banner8 } from "../images/banners";
import GradientFade from "../components/GradientFade.jsx";
import HeroImage from "../components/HeroImage.jsx";
export { Banner2, Banner3, Banner7, Banner8, } from '../images/banners'

const Home = () => {

  return (
    <div className='flex flex-col w-full'>
      <Header title={'آشپزی را از پایه یاد بگیرید!'}/>

      <main className="flex flex-col w-full gap-16 px-4 py-2 bg-black md:px-12">
        <section id="recipes" className="relative z-10">
          <SectionTitle title='دستور پخت‌ها' icon={foodIcon}/>
          <ItemGrid itemArray={foodData} inputType='search' inputPlaceholder='جست‌و‌جوی غذاها' containerId='recipes' />
        </section>

        <section id="popular-courses" className="relative py-10">
          <HeroImage heroImages={[Banner2, Banner3, Banner7, Banner8]} tailwindStyles={'z-0 absolute left-0 bottom-0 bg-center w-full h-full rounded-3xl overflow-hidden'}/>
          <GradientFade position="top"/>
          <GradientFade position="bottom"/>
          <div className='absolute top-0 left-0 z-0 w-full h-full bg-black opacity-20'></div>
          <SectionTitle title='دوره‌های محبوب' icon={favoriteIcon}/>
          <Carousel startingCard={2} maxVisibility={3}> 
            {courseData.map((item, i) => (
              <CarouselCard key={i} item={item}/>
            ))}
          </Carousel>
        </section>

        <section id='courses' className="relative z-10">
          <SectionTitle title='لیست دوره‌ها' icon={courseIcon}/>
          <ItemGrid itemArray={courseData} inputType='search' inputPlaceholder='جست‌و‌جوی دوره‌ها' /> 
        </section>

        <section id="faq">
          <SectionTitle title='پرسش‌های متداول' icon={faqIcon}/>
          <Faq />
        </section>
      </main>
    </div>
  )
}

export default Home
