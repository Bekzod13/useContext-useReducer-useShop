import { createContext, useContext, useReducer } from "react";
import shopReducer, { intialState } from "./reducer";

export const ShopContext = createContext(intialState);

export const ShopProvider = ({children}) =>{
    const [state, dispatch] = useReducer(shopReducer, intialState);


    const add = product => {
        dispatch({
            type: "add",
            payload: {product: product}
        })
    }   

    const remove = id =>{
        dispatch({
            type: 'remove',
            payload: {id:id}
        })
    }

    const clear = () =>{
        dispatch({
            type: 'clear',
        })
    }

    let allPrices = 0;
    state.forEach(element => {
        allPrices += element.price
    });
    

    const value = {
        add,
        remove,
        clear,
        allPrices,
        totalItems: state.length,
        products: state
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

const useShop = () => {
    const context = useContext(ShopContext);

    if(context === undefined){
        console.log('Error');
    }

    return context;
}

export default useShop;