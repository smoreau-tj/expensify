import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note= '', 
        amount= 0,
        createdAt = 0
    }={}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

})
//REMOVE_EXPENSE
const removeExpense = ({id} ) => ({
    type: 'REMOVE_EXPENSE',
    id
})
//EDIT_EXPENSE
const editExpense = ({id}) => ({
    type: 'EDIT_EXPENSE',
    id
})
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const expensesReducersDefaultState = []
const expensesReducer = (state = expensesReducersDefaultState, action) => {
   
    switch(action.type) {
        case 'ADD_EXPENSE': 
            return [ ...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id })=> id !== action.id
                
            )
        case 'EDIT_EXPENSE':
          console.log(action.id)
          return state.map((expense)=> {
              if(expense.id === action.id) {
                  return {...expense, amount: 0}
              }else {
                 return expense
              }

          } )

        default:
        return state;
    }
}
//Filter Reducer 

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        default:
        return state;
    }

}



const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer

}))
store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:100}))
const expenseTwo = store.dispatch(addExpense({description: 'Rent2', amount:100}))
store.dispatch(addExpense({description: 'Coffee', amount:400}))
store.dispatch(addExpense({description: 'Games', amount:5000}))
store.dispatch(removeExpense({id: expenseOne.expense.id}))
store.dispatch(editExpense({id: expenseTwo.expense.id}));


const demoState = {
    expenses: [{
        id: 'gadsgagaga',
        description: 'January Rent', 
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount,
      startDate: undefined,
      endDate: undefined
    }
}

const user = {
    name: 'Jen',
    age: 24
}

console.log({
   type: 'person', ...user, location:'Japan'
})