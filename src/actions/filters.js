
// SettextFilter
export const setTextFilter = (text = '') =>({
	type: 'SET_TEXT_FILTER',
	text
});


// SortByDate
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});


// SortByAmout
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});


// SetStartDate
export const setStartDate = (startDate) =>({
	type: 'SET_START_DATE',
	startDate
});


// SetEndDate
export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});
