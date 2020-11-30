import {incrementAction,decrementAction} from '../action'
import {INCREMENT,DECREMENT} from '../constants'


const stateDefault={
    count:99
}



export const rootReducer=(state=stateDefault, action)=>{

    switch(action.type){
        case INCREMENT:
        return {count:state.count + 1};
        case DECREMENT:
        return {count:state.count - 1};
        default:
        return state;
    }

}
