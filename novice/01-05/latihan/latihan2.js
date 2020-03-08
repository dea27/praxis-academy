let randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

create_random = {
min: -1,
max: 90,
lenght: 100,
};

create_random[Symbol.iterator] = function() {
return {
start: 0,
min: this.min,
max: this.max,
lenght: this.lenght,
next(){
this.start++;
return this.start < this.lenght ? {done:false, value:randint(this.min, this.max)} : {done:true};
}
};
};

let array = Array.from(create_random);
console.log(array);