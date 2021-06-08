import React, { createContext, useReducer } from 'react'
import ContextCard from './ContextCard'
import { products } from './Product'
import { reducer } from './Reducer'

export const CardContext = createContext()
const initialState = {
    item:products,
    totalAmount:0,
    totalItem:0
}
const Card = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const  removeItem = (id) => {
        dispatch({
            type:"REMOVE_ITEM",
            payload:id
        })
    }

    const  increament = (id) => {
        dispatch({
            type:"INCREAMENT_ITEM",
            payload:id
        })
    }

    const  decreament = (id) => {
        dispatch({
            type:"DECREAMENT_ITEM",
            payload:id
        })
    }
    return (
        <>
            <CardContext.Provider value={{...state, removeItem, increament, decreament}}>
                <ContextCard />
            </CardContext.Provider>
        </>
    )
}

export default Card
