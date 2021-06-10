import React, { useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { CardContext } from './Card'
import Item from './Item'

const ContextCard = () => {
    const {item, totalAmount, totalItem} = useContext(CardContext)
    console.log(totalAmount, totalItem)
    return (
        <>
           <div className="card vh-100 w-75 mx-auto">
               <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <div className="continue-shopping">
                            <img src="./images/arrow_back_black_24dp.svg" alt="back-arrow" className="me-1" />
                            Continue Shopping
                        </div>
                        <div className="shopping-icon position-relative">
                            <img src="./images/shopping_cart_black_24dp.svg" alt="shopping-card" />
                            <span className="position-absolute item-badge">{totalItem}</span>
                        </div>
                    </div>
               </div>
               <div className="card-body ps-4 mt-4">
                    <div className="heading">
                        <h3>Shopping Card</h3>
                        <p className="total-item">you have <span className="total-items-count">{totalItem}</span> Items in shopping card</p>
                    </div>

                    <div className="card-container bg-light">
                        <Scrollbars>
                            {
                                item.map( (elem) => {
                                    return <Item key={elem.id} {...elem} />
                                })
                            }
                       </Scrollbars>
                    </div>
                    <div className="card-total float-end mt-3">
                        <h4>Card Total <span>{totalAmount} Rs</span></h4>
                        <button className="btn btn-primary float-end mt-1">Checkout</button>
                    </div>
               </div>
           </div> 
        </>
    )
}

export default ContextCard
