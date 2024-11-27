import { useParams } from 'react-router-dom'
import { foodData } from '../utils/food-info';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipeItem = foodData.find(item => item.id == recipeId);
  
  return (
    <div className='text-3xl'>
       { recipeItem.name }
    </div>
  )
}

export default RecipeDetails