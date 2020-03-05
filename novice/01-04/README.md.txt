• Judul: String dan Regular Expression
• Oleh: Dea Putri Nursari 
• Tanggal : 5 Maret 2020

Rangkuman

String 

String adalah tipe data teks yang merupakan gabungan huruf, angka, whitespace (spasi), dan berbagai karakter.
penggunaan string menggunakan tanda petik "" bisa menggunakan tanda petik satu ataupun dua.
Jenis String JavaScript digunakan untuk merepresentasikan data tekstual.
Elemen pertama dalam string adalah pada indeks 0, selanjutnya pada indeks 1, dan seterusnya. Panjang suatu String adalah jumlah elemen di dalamnya.
Objek String memiliki satu properti, panjang, yang menunjukkan jumlah unit kode UTF-16 dalam string. 
Misalnya, kode berikut memberikan helloLength nilai 13, karena "Halo, Dunia!" memiliki 13 karakter, masing-masing diwakili oleh satu unit kode UTF-16. 
Anda tidak dapat mengubah karakter individual karena string adalah objek mirip array yang tidak dapat diubah:
const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // This has no effect, because strings are immutable
hello[0]; // This returns "H"

Penginternasionalan
Objek Intl adalah namespace untuk ECMAScript Internationalisasi API, yang menyediakan perbandingan string sensitif bahasa, pemformatan angka, dan pemformatan tanggal dan waktu.

Pemformatan tanggal dan waktu
Objek DateTimeFormat berguna untuk memformat tanggal dan waktu.

Pemformatan angka
Objek NumberFormat berguna untuk memformat angka, misalnya mata uang.

Pemeriksaan
Objek Collator berguna untuk membandingkan dan menyortir string.

Misalnya, sebenarnya ada dua jenis urutan berbeda dalam bahasa Jerman, buku telepon dan kamus.
Sortir buku telepon menekankan suara, dan seolah-olah "ä", "ö", dan seterusnya diperluas ke "ae", "oe", dan seterusnya sebelum disortir.

Integer
Integer itu tipe data untuk angka dan intejer penggunaannya tidak menggunakan tanda petik Nilai integer bisa bernilai negatif ataupun positif.

Regex
Regular Expression (REGEX) adalah konstruksi bahasa untuk mencocokkan teks berdasarkan pola tertentu, terutama untuk kasus-kasus kompleks.
Contoh misalkan mencari teks berawalan karakter tertentu
regex di javasricps memiliki banyak karakter diantaranya :

RegEx Extractor
Anda dapat mengekstrak email, proxy, nomor telepon, IP, alamat, HTML tag, URL, link, tanggal, dll. Hanya masukkan satu atau beberapa regular expressions dan sumber URL, dan memulai proses.

Ekstrak, kikis, urai, panen.

Contoh Penggunaan
Ekstrak email dari buku alamat CSV lama.
Ekstrak sumber gambar dari file HTML.
Ekstrak proxy dari situs online.
Ekstrak hasil URL dari Google.

MyRegExp
Item ini adalah PHP RegEx builder, yang membantu Anda untuk membangun Regular Expressions di PHP sintaks extensible. Kamu bisa:

Membangun Regular Expressions dengan sintaks PHP yang mudah
Memvalidasi string dengan RegEx built
Membangun RegEx's dan mendapatkan mereka
Mengaplikasikan preg_match ke RegEx
Mengganti string dengan RegEx built

Metakarakter pada Regex antara lain :

^….$ Tanda awal dan akhir dar sebuah baris

{……} Untuk mendifinisikan range

[…..] Untuk mendefinisikan character class

(…..) Untuk mendefinisikan group

* Untuk menyatakan perulangan minimal 0 kali sampai tak terhingga

+ Untuk menyatakan perulangan minimal satu kali sampai tak terhingga

? Untuk menyatakan perulangan satu kali atau tidak sama sekali

| Operator logika untuk OR

\ Menjadikan karakter setelahnya tidak lagi dianggap sebagai metcharacter dan hanya akan dianggap sebagai karakter biasa

\t Mereperesentasikan karakter tab

\n Mereperesentasikan karakter newline

\r Mereperesentasikan carriage-return character

\f Mereperesentasikan form-feed character

\a Mereperesentasikan karakter bel

\e Mereperesentasikan karakter escape


Kelas karakter pada Regex sbb :

[abc] Hanya a atau b atau c

[^abc] Semua karater selain a , b dan c

[a-zA-Z] Salah satu karaketer dari a sampai z atau dari A sampai Z

[a-d[m-p]] Salah satu karakter dari hasil gabungan antara a samapi d dan m sampai p, (union = [a-dm-p])

[a-z&&[def]] Salah satu karakter dari hasil irisan a sampai z dan def (intersection = [def])

[a-z&&[^bc]] Salah satu karakter dari a sampai z selain b dan c (substraction= [ad-z])



Pada Regex terdapat juga Kelas karakter yang sudah didefinisikan diantaranya adalah sbb:

. Mewakili semua karakter kecuali line terminator

\d Merepresentasikan sebuah angka = [0-9]

\D Merepresentasikan selain angka = [^0-9]

\s Merepresentasikan karakter whitespace = [ \t\n\f\r\x0B]

\S Merepresentasikan selain karakter whitespace = [^\s]

\w Merepresentasikan sebuah huruf atau angka = [a-zA-Z0-9]

\W Merepresentasikan selain huruf atau angka = [^\w]


