import './App.css';
import { useState } from 'react';
import data, { allCategories, productCount, categories, namesAndCategories, catNameArray } from "./data"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import ProductList from './ProductList';
import CategoryButton from './CategoryButton';
import Header from './Header';
import Cost from './Cost';

function App() {
  const [category, setCategory] = useState("Music")
  // console.log(categories)
  // console.log(namesAndCategories)
  // console.log(catNameArray)
  // console.log(allCategories)
  
  return (
    <div className="App">
      <Header 
        title='Sellify'
        productCount={productCount}
        catNameArray={catNameArray}/>
      <CategoryButton 
      category={category} 
      onButtonClick={ newCategory => setCategory(newCategory) }
      />
      <ProductList category={category} />
      <Cost />
    </div>
  );
}

export default App;
