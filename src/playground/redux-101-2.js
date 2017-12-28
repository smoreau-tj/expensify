import { createStore} from 'redux'

const add = ({a, b}, c) =>{
    return a + b + c;
}

console.log(add({
    a: 1, b:12
},100))

const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})
const store = createStore((state = { count: 0 }, action)=>{
    
    switch(action.type) {
        case 'INCREMENT':
          console.log(state.count);
          return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        console.log(state.count)
          const decrementBy = typeof action.decrementBy === 'number' ? decrementBy : 1
          return {
              count: state.count - decrementBy
          };
        case 'SET':
         console.log('this is my action count',action.count)
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
    
    
});
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions an object that get sent to the store 
// increment, decrement, reset 
//to use type define as all types as all caps if you need to use
//two words 
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount({
    incrementBy: 5
}))
unsubscribe();
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store.dispatch({
    type: 'SET',
    count: 101
});

