import Header from "../components/Header"
import ItemGrid from "../components/ItemGrid"
import { foodData } from '../utils/food-info';

const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Header title={'Delicious Food Recipes!'} type={'home'}/>

      <main id="recipes" className="w-full px-4 py-2 bg-black md:px-12">
        <ItemGrid itemArray={foodData} />
      </main>
    </div>
  )
}

export default Home
