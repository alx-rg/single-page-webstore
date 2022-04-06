import data from './data';
import Container from 'react-bootstrap/Container';
import Product from './Product';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './ProductList.css';

function ProductList(props) {

  const { category } = props

  return (
    <Container className="p-4, pt-5">
    <Row className='ProductList'>
      {data.filter(obj => obj.category === category || category === "All" ).map(obj => {

        return(

          <Product { ... obj } />
        )
      })}
    </Row>
  </Container>
  )
}

export default ProductList