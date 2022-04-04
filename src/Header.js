import './Header.css';

function Header (props) {
  // const title = props.title
  // const productCount = props.productCount
  // const catNameArray = props.catNameArray

  const { title, productCount, catNameArray } = props

  return (
    <div className="Header">
        <h1>
          {title}
        </h1>
        <p>Product Count: {productCount} </p>
        <p>Category Count: {catNameArray.length}</p>

    </div>
  )
}

export default Header