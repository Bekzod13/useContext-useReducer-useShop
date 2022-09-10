export const intialState = [];


const shopReducer = (state, action)=>{
    const {type, payload} = action;

    switch (type) {
        case "add":
            return [ ...state, payload.product ];
        case "remove":
            return state.filter(item=>item.id !== payload.id);
        case "clear":
            return [];
        default:
           return state;
    }

}

export default shopReducer;