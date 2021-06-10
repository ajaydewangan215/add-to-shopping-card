export const reducer = (state, action) => {
    if(action.type === 'REMOVE_ITEM'){
        return {
            ...state,
            item:state.item.filter((curElem)=>{
                return curElem.id !== action.payload
            })
        }
    }

    if(action.type === 'INCREAMENT_ITEM'){
        return {
            ...state,
            item:state.item.map((curElem)=>{
                if(curElem.id === action.payload){
                    return {...curElem, amount:curElem.amount+1}
                }            
                return curElem
            })
        }
    }

    if(action.type === 'DECREAMENT_ITEM'){
        return {
            ...state,
            item:state.item.map((curElem)=>{
                if(curElem.id === action.payload && curElem.amount > 1){
                    return {...curElem, amount:curElem.amount-1}
                }            
                return curElem
            })
        }
    }

    if(action.type === 'TOTAL_QTY'){
        let {totalItem, totalAmount} = state.item.reduce( (accum, curVal) => {
            let { price, amount } = curVal
            accum.totalItem += amount
            accum.totalAmount += price*amount
            return accum
        }, { totalItem: 0, totalAmount:0 })

        return {
            ...state,
            totalItem,
            totalAmount
        }
    }
    return state
}