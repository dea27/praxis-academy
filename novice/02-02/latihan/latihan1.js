class baju {
    constructor(ukuran, model, color) {
        this.ukuran = ukuran;
        this.model = model;
        this.color = color;
    }

    getName() {
        return this.ukuran + " " + this.model;
    }
}

class Pakaian extends baju{
    getName(){
        return super.getName() +" adalah ukuran dan jenis pakaian.";
    }
}

let pakaian = new Pakaian("XL", "T-shirt", "blue");

console.log (pakaian.getName()); 