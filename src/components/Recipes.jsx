import PropTypes from 'prop-types'
import { useState } from 'react'
import searchIcon from '../images/icons/search-icon.png';
import Loader from './Loader';
import FormInput from './FormInput';
import ItemCard from './ItemCard';

const Recipes = ({props}) => {
  // States
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [recipesLimit, setRecipesLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

   // Functions
   const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
      <section id='recipes' className='flex flex-col items-center justify-center w-full gap-4 px-4 py-4'>
        <form className='w-full lg:w-1/2'>
          <FormInput type={'search'}
          placeholder={"جست و جوی غذاها"}
          value={searchQuery}
          name={'recipe-search'}
          handleInputChange={handleInputChange}
          iconSrc={searchIcon}
          />
        </form>

        <ItemCard />
      </section>
  );
}

Recipes.propTypes = {}

export default Recipes