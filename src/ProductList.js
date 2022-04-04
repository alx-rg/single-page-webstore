import data from './data';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './ProductList.css';

function ProductList() {
  return (
    <Container className="p-4, pt-5">
    <Row className='ProductList'>
      {data.map(obj => {
        return(
          <div>
            <Card className='p-4'>
              <h3>{obj.name}</h3>
              <span>{obj.description}</span>
              <em>Rating: {obj.rating}</em>
              <span>Price: {obj.price}</span>
              <small>Category: {obj.category}</small>
            </Card>
          </div>
        )
      })}
    </Row>
  </Container>
  )
}

export default ProductList