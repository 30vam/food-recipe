import Header from "../components/Header.jsx"
import ItemGrid from "../components/ItemGrid.jsx"
import { Carousel } from '../components/Carousel.jsx'
import { CarouselCard } from '../components/CarouselCard.jsx'
import { foodData } from '../utils/food-info.js';
import { courseData } from '../utils/course-info.js';
import Faq from "../components/Faq.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { foodIcon, favoriteIcon, courseIcon, faqIcon } from "../images/icons";        

const Home = () => {

  return (
    <div className='flex flex-col w-full'>
      <Header title={'آشپزی را از پایه یاد بگیرید!'} type={'home'}/>

      <main className="flex flex-col w-full gap-16 px-4 py-2 bg-black md:px-12">
        <section id="recipes">
          <SectionTitle title='دستور پخت‌ها' icon={foodIcon}/>
          <ItemGrid itemArray={foodData} inputType='search' inputPlaceholder='جست‌و‌جوی غذاها' containerId='recipes' />
        </section>

        <section id="popular-courses">
          <SectionTitle title='دوره‌های محبوب' icon={favoriteIcon}/>
          <Carousel startingCard={2} maxVisibility={3}> 
            {[...new Array(5)].map((_, i) => (
              <CarouselCard key={i} title={'تیتر کارت'} content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'/>
            ))}
    </Carousel>
        </section>

        <section id='courses'>
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
