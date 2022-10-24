
export const initialState = {
    basket: [],
    user: null   
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //does any of the basket items matchs the action index item, then cut it
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]

            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.warn(
                    `Can't remove the product ${action.id} as is it is not in the basket! `
                )
            }

            return{
                ...state,
                basket: newBasket
            }
        
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "EMPTY_BASKET":
            return{
                ...state,
                basket: [],
            }
    
        default:
            return state;
    }
}

export default reducer;