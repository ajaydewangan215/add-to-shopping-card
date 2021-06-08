import React, { useContext } from 'react'
import { CardContext } from './Card'

const Item = ({id, description, title, img, price, amount}) => {

    const {removeItem, increament, decreament} = useContext(CardContext)

    return (
        <>
           <div className="item-info d-flex justify-content-between align-items-center">
                <div className="product-img">
                    <img src={img} alt="title" className="img-fluid"/>
                </div>

                <div className="product-title">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

                <div className="add-minus-product">
                    <span className="minus" onClick={()=>decreament(id)}>-</span>
                    <input type="text" placeholder={amount} />
                    <span className="add" onClick={()=>increament(id)}>+</span>
                </div>

                <div className="price">
                    <h5>{price*amount}&#8377;</h5>
                </div>
                
                <div className="remove-item me-4">
                    <h5 className="remove" onClick={()=>removeItem(id)}>x</h5>
                </div>
            </div>
            <hr/> 
        </>
    )
}

export default Item
