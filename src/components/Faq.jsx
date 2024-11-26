import Accordian from './Accordian.jsx'
import { cookingClass2 } from '../images/z-others'

const Faq = () => {
  return (
    <div className='flex flex-col w-full gap-4 px-4 mb-12 lg:gap-12 lg:flex-row lg:justify-center lg:items-center'>
      <div className='flex flex-col gap-4 lg:max-w-[512px]'>
        <Accordian title='چرا آموزشگاه ما؟' text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. '/>
        <Accordian title='آموزشگاه ما کجاست؟' text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'/>
        <Accordian title='دوره‌های ما مناسب چه افرادی است؟' text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'/>
      </div>

      <div className='relative w-full mt-4 rounded-2xl max-h-[312px] md:max-h-[512px] lg:max-h-[312px] overflow-hidden lg:max-w-[512px]'>
        <img src={cookingClass2} alt="Cooking Class Image" className='z-0 object-cover w-full h-full' />
        <div className='absolute top-0 left-0 z-50 w-full h-full bg-black opacity-20'></div>
      </div>
    </div>
  )
}

export default Faq