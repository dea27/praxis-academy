Paradigma Pemrograman di JavaScript: OOP (2)
Dea Putri Nursari
11 Maret 2020

Salah satu cara untuk mendefinisikan kelas adalah dengan menggunakan deklarasi kelas.
Untuk mendeklarasikan kelas, Anda menggunakan kata kunci kelas dengan nama kelas ("Kotak" misalnya) 

Perbedaan penting antara deklarasi fungsi dan deklarasi kelas adalah deklarasi fungsi yang diangkat dan deklarasi kelas tidak.
Pertama-tama Anda harus mendeklarasikan kelas Anda dan kemudian mengaksesnya, jika tidak kode seperti berikut akan melempar ReferenceError


Hoisting
x=10
var x
console.log(x) //=> 10
Kenapa hasilnya bisa 10 ? itu karena Hoisting. Hoisting artinya mengangkat. 

nama kelas tidak boleh mengandung simbol
Atribut merupakan data pendukung yang dimiliki oleh kelas

Metode prototipe adalah metode pembelajaran mesin yang menggunakan prototipe data.
[1] Prototipe data adalah nilai data yang mencerminkan nilai-nilai lain di kelasnya,
[2] misalnya, pusat massa dalam masalah pengelompokan K-means.

Metode statis

Kata kunci statis mendefinisikan metode statis untuk suatu kelas.
Metode statis sering digunakan untuk membuat fungsi utilitas untuk suatu aplikasi.