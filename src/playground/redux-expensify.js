import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// Add Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id : uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// Remove Expense
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});


// Edit Expense
const editExpense = (id, update) => ({
	type: 'EDIT_EXPENSE',
	id,
	update
});


// SettextFilter
const setTextFilter = (text = '') =>({
	type: 'SET_TEXT_FILTER',
	text
});


// SortByDate
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});


// SortByAmout
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});


// SetStartDate
const setStartDate = (startDate) =>({
	type: 'SET_START_DATE',
	startDate
});


// SetEndDate
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type){
		case 'ADD_EXPENSE':
		return [
			...state,
			action.expense
		];
		case 'REMOVE_EXPENSE':
		return state.filter(({ id }) => id !== action.id );
		case 'EDIT_EXPENSE':
		return state.map((expense) => {
			if(expense.id === action.id){
				return {
					...expense,
					...action.update
				};
			} else{
				return expense;
			};
		});
		default: 
		return state;
	}
};

// Filters Reducer

const filterReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};



const filterReducer = (state = filterReducerDefaultState, action) => {
	switch (action.type){
		case 'SET_TEXT_FILTER':
		return {
			...state,
			text: action.text
		};
		case 'SORT_BY_AMOUNT':
		return{
			...state,
			sortBy: 'amount'
		};
		case 'SORT_BY_DATE':
		return{
			...state,
			sortBy: 'date'
		};
		case 'SET_START_DATE':
		return {
			...state,
			startDate: action.startDate
		};
		case 'SET_END_DATE':
		return {
			...state,
			endDate: action.endDate
		};
		default: 
		return state;
	}
};


// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if(sortBy === 'date'){
			return a.createdAt < b.createdAt ? 1 : -1;
		}
		else if(sortBy === 'amount'){
			return a.amount < b.amount ? 1 : -1;
		}
	});
};

// Store creation

const store = createStore(
	combineReducers ({
		expenses: expensesReducer,
		filters: filterReducer
	})
	);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200, createdAt: -1000 }));

/*console.log(expenseOne);*/

/*store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));*/

//store.dispatch(setTextFilter('c'));

store.dispatch(sortByAmount()); //Amount

/*store.dispatch(sortByDate()); //Date*/

//store.dispatch(setStartDate(125));

/*store.dispatch(setStartDate());*/

//store.dispatch(setEndDate(999));

const demoState = {
	expenses: [{
		id: 'pskfkjkjkdfs',
		description: 'January Rent',
		note: 'This was the final payment for that address',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	} 
};


/*const user = {
	name: 'Jen',
	age: 25
};

console.log({
	...user,
	location: "Las-vagas",
	name: "Lappujannna"
})*/