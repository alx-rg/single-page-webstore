import './App.css';
import data, { allCategories, productCount, categories, namesAndCategories, catNameArray } from "./data"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  // console.log(categories)
  // console.log(namesAndCategories)
  // console.log(catNameArray)
  // console.log(allCategories)
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Product List
        </h1>
      </header>
      <Container className="p-2, pt-4">

          {catNameArray.map(obj => {
            return(
              <button>{obj.name}
              <span> {obj.count}</span>
              </button>
              )
            })
          }
      </Container>

        <Container className="p-4, pt-5">
          <Row>
              {data.map(obj => {
                return(
                  <Col>
                    <Card className='p-4'>
                      <h3>{obj.name}</h3>
                      <span>{obj.description}</span>
                      <span>{obj.price}</span>
                    </Card>
                  </Col>
                )
              })}
          </Row>
        </Container>

        <div className='Product-Cards'>
        {}
        </div>
        <p>Product Count: {productCount}</p>
        <p>Category Count: {catNameArray.length}</p>
    </div>
  );
}

export default App;
