import PropTypes, { object } from 'prop-types'
import { useState } from 'react'
import searchIcon from '../images/icons/search-icon.png';
import FormInput from './FormInput';
import ItemCard from './ItemCard';

const Recipes = ({itemArray}) => {
  // States
  const [searchQuery, setSearchQuery] = useState('');

  // Functions
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredItems = itemArray.filter((item) => searchQuery.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchQuery))
  
  return (
      <section className='flex flex-col items-center'>
        <form className='w-full lg:w-1/2'>
          <FormInput type={'search'}
          placeholder={"جست و جوی غذاها"}
          value={searchQuery}
          name={'recipe-search'}
          handleInputChange={handleInputChange}
          iconSrc={searchIcon} />
        </form>
        
        <div className='relative grid items-center justify-center w-full rounded-3xl min-h-[256px] grid-cols-1 gap-8 px-4 py-6 sm:grid-cols-2 xl:grid-cols-3'>
           { filteredItems.length !== 0 ? 
           filteredItems.map((item) => <ItemCard key={item.id} item={item}/>) 
           : <span className='absolute text-lg text-center text-white translate-x-1/2 translate-y-1/2 select-none md:text-xl right-1/2'>موردی یافت نشد.</span> }
        </div>
      </section>
  );
}

Recipes.propTypes = {
  itemArray: PropTypes.arrayOf(object)
}

export default Recipes