function Hero(name, level) {
    this.name = name;
    this.level = level;
}

    Hero.prototype.greet = function(){
        return `${this.name} say hello.`;
    
}
let hero2 = new Hero('indah', 3);
console.log(hero2.greet());
console.log(hero2);