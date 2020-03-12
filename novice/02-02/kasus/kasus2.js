class Kucing{
    constructor(name,kelelahan, kelaparan,kesepian,kebahagiaan) {
    this.name = name
    this.kelelahan = kelelahan
    this.kelaparan = kelaparan
    this.kesepian = kesepian
    this.kebahagiaan = kebahagiaan
}

    Makan (secukupnya) {
        this.kelaparan += secukupnya
        return `${this.name} sudah tidak lapar.`   
    }
    
    Bermain (Mengelus) {
        this.kesepian += Mengelus
        return `${this.name} sudah tidak kesepian .` 
    
    }
    tidur(waktu){
        this.kelelahan -= waktu
        this.kelaparan -= waktu
        return `${this.name} sudah tidak mengantuk.`  
    }
    nimang (happy){
        this.kelelahan += happy
        if (this.kelelahan >8) {
            return `${this.name} ingin sendiri.`   
        }else{
            return `${this.name} ingin ditemani.`
        }   
}
let kitty = new Kucing('kitty', 8 , 10 , 20 , 80)
