import { catNameArray } from './data';
import './CategoryButton.css';

function CategoryButton () {
  return (
    <div className='CategoryButton'>
        {catNameArray.map(obj => {
          return(
            <button>{obj.name}
            <span> {obj.count}</span>
            </button>
            )
          })
        }
    </div>
  )
}

export default CategoryButton