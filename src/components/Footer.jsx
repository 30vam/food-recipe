import IconList from "./IconList"

const Footer = () => {
  return (
    <footer className="pt-6 pb-2 font-light text-white bg-black">
      <section className="flex flex-col items-center gap-8 lg:gap-2 lg:items-start lg:justify-around lg:flex-row">
        <div className="flex flex-col gap-2 max-w-[256px] text-center lg:text-start">
          <h6 className="text-xl font-semibold">درباره ما</h6>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        </div>

        <div className="text-center">
          <h6 className="mb-6 text-xl font-semibold">راه‌های ارتباطی</h6>
          <IconList telegramLink={'https://t.me/sinakh01'} githubLink={'https://github.com/30vam'} instagramLink={'https://www.instagram.com/PAGE_NAME'} />
        </div>

        <div className="flex flex-col gap-4 text-center lg:text-start">
          <h6 className="text-xl font-semibold">لینک‌های مفید</h6>
          <a href="/food/2" className="transition-colors duration-300 ease-out hover:text-orange-400">طرز تهیه ساندویچ چیکن گریل</a>
          <a href="/courses/2" className="transition-colors duration-300 ease-out hover:text-orange-400">دوره فست‌فود</a>
          <a href="/courses/3" className="transition-colors duration-300 ease-out hover:text-orange-400">دوره کافی‌شاپ</a>
        </div>
      </section>

      <a href="https://github.com/30vam" target='_blank' className="block mt-8 text-sm text-center transition-colors duration-300 ease-out lg:mt-2 lg:text-start lg:mr-2 hover:text-orange-400"><span className="font-bold">طراحی و توسعه: </span>سینا خداپرست</a>
    </footer>
  )
}

export default Footer