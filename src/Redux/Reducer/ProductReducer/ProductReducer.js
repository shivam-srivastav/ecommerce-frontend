import * as eCSR from '../../Actions/ActionTypes'

const intialState = {
    test:"false"
}

const productReducer = (state = intialState, action) => {
    switch(action.type){
        case eCSR.TEST_PRODUCT:
        return {
            ...state,
            test:true
        }
        default:
            return state;
    }
}
export default productReducer;