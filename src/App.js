import './App.css';
import data, { allCategories, productCount, categories, namesAndCategories, catNameArray } from "./data"

function App() {

  console.log(categories)
  console.log(namesAndCategories)
  console.log(catNameArray)
  console.log(allCategories)
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Product List
        </h1>
      </header>
        {catNameArray.map(obj => {
          return(
            <button>{obj.name}
            <span> {obj.count}</span>
            </button>
          )
          })
        }
        <p>Product Count: {productCount}</p>
        <p>Category Count: {catNameArray.length}</p>
    </div>
  );
}

export default App;
