import { catNameArray } from './data';
import './CategoryButton.css';

function CategoryButton (props) {

  const { category, onButtonClick } = props
  return (
    <div className='CategoryButton'>
        {catNameArray.map(obj => {
          const { name, count } = obj
          const className = name === category ? 'selected' : ''
          return(
            <button 
            className={className}
            onClick={() => onButtonClick(name)}
            >
              {name}&nbsp; 
              <span className='highlight'>&nbsp;{count}&nbsp;</span>
            </button>
            )
          })
        }
    </div>
  )
}

export default CategoryButton