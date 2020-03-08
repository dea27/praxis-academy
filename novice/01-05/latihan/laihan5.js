let date = new Date(2012, 0, 3);

console.log( getWeekDay(date) );

function getWeekDay(day) {

	return new Array(date).join().slice(0, 2).toUpperCase();

}