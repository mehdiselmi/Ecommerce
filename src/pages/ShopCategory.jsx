import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />

 
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
     
          if (props.category === item.category) {
            return (
              <div key={i}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.new_price}</p>
                <p>{item.old_price}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default ShopCategory;