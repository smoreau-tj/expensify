import { createStore} from 'redux'

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
})
const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
})
const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action)=>{
    //console.log(action, state);
    switch(action.type) {
        case 'INCREMENT':
          
          //console.log( typeof incrementBy);
          return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        //console.log(state.count)
          return {
              count: state.count - action.decrementBy
          };
        case 'SET':
         //console.log('this is my action count',action.count)
          return {
            count: action.count
          }  
        case 'RESET':
          return {
              count: 0
          }  
        default:
          return state;
    }
    
    
}

const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions an object that get sent to the store 
// increment, decrement, reset 
//to use type define as all types as all caps if you need to use
//two words 

store.dispatch(setCount({count: 15}))
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount({incrementBy: 10}));
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(resetCount());
//unsubscribe();

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store.dispatch({
    type: 'SET',
    count: 101
});

