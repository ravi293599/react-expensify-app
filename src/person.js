
const isAdult = (age) =>{
	if(age >= 18){
		return true;
	}
	else{
		return false;
	}
}
const canDrink = (age) => {
	if(age >= 18){
		return true;
	}
	else{
		return false;
	}
}

const isSenior = (age) => age >= 60;

export { isAdult, canDrink, isSenior as default };