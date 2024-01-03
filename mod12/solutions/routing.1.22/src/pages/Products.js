import React from 'react'
import {Route, Link} from 'react-router-dom';
import Product from './Product';

const Products = (props) => {
    const {match} = props;
    const productList = [
        {
          id:1,
          name: 'Golf Balls',
          description: 'One dozen golf balls',
          status: 'Available'
        },
        {
          id:2,
          name: 'Golf Tees',
          description: 'One hundred plastic tees',
          status: 'Available'
        },
        {
          id:3,
          name: 'Golf Glove',
          description: 'One golf glove',
          status: 'Unavailable'
        }
    ];
      
    const linkList = productList.map( (product) => {
        return(
          <li key={product.id}>
            <Link to={`${match.url}/${product.id}`}>
              {product.name}
            </Link>
          </li>
          )
              
    })
    return (
        <div>
            <div style={{ display: 'block', justifyContent: "space-between" }}>
                <div style={{
                            float:'left',
                            padding: '10px',
                            width: '30%',
                            background: '#f0f0f0',
                            marginLeft:'auto' }}>

                    <h3> Products</h3>
                    <ul  style={{ listStyleType: 'none', padding: 0,
                                    fontSize:'15px' }}>
                        {linkList}
                    </ul>
                </div>
            </div>
            <Route path={`${match.url}/:productId`} 
                   render={ (props) => (
                        <Product data= {productList} {...props} />
                   )} />
            <Route exact path={match.url} 
                   render={() => (
                        <div style={{ textAlign:'center'}}>
                            <p>Please select a product.</p>
                        </div>
                    )} />


        </div>

    )
}

export default Products
