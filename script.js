// do while statement
function doWhileLoop() {
    let i = 1
    do{
        document.write(i)
        i++
    }while(i<=10);
}

// for statement
function forLoop() {
    for (let i = 0; i <= 10; i++) {
        document.write(i)            
    }
}

//function
function penjumlahan() {
    let bil1 = parseInt(kalkulator.bil1.value)
    let bil2 = parseInt(kalkulator.bil2.value)
    let hasil = bil1 + bil2
    alert("Hasilnya adalah = " + hasil)
}
function pengurangan() {
    let bil1 = parseInt(kalkulator.bil1.value)
    let bil2 = parseInt(kalkulator.bil2.value)
    let hasil = bil1 - bil2
    alert("Hasilnya adalah = " + hasil)
}
function pembagian() {
    let bil1 = parseInt(kalkulator.bil1.value)
    let bil2 = parseInt(kalkulator.bil2.value)
    if (bil2==0) {
        alert("Pembagian tidak bisa dijalankan dan hasilnya infinity")
    }else{
        let hasil = bil1 / bil2
        alert("Hasilnya adalah = " + hasil)
    }
}
function perkalian() {
    let bil1 = parseInt(kalkulator.bil1.value)
    let bil2 = parseInt(kalkulator.bil2.value)
    let hasil = bil1 * bil2
    alert("Hasilnya adalah = " + hasil)
}

// if else
function ifElse(params) {
    let umur = prompt("Masukkan umur")
        if (umur>=17) {
            document.write("Boleh dapat sim")
        }else{
            document.write("Belum boleh dapat sim karena umur kamu masih " + umur + " tahun")
        }
}

//nested if
function harga() {
    let maskapai = tiket.maskapai.value
    let jurusan = tiket.jurusan.value
    let harga
    if (maskapai === "Garuda") {
        if (jurusan === "Medan-Jakarta") {
            harga = 3000000
        }else if(jurusan === "Medan-Batam"){
            harga = 2000000
        }else{
            harga = 0
            document.write("Jurusan tidak diketahui")
        }
    }else if (maskapai === "Batik") {
        if (jurusan === "Medan-Jakarta") {
            harga = 1500000
        }else if(jurusan === "Medan-Batam"){
            harga = 1000000
        }else{
            harga = 0
            document.write("Jurusan tidak diketahui")
        }
    }else{
        document.write("Maskapai tidak diketahui")
    }
        alert("Harga tiketnya adalah = " + harga)
}
//switch
function grade() {
    let nama = penilaian.nama.value
        let nilai = parseInt(penilaian.nilai.value)
        let huruf 

        switch (true) {
            case nilai >= 80 && nilai <= 100:
                huruf = "A"
                alert("Grade dari nilai " + nama + " adalah : " + huruf)
                break;
            case nilai >= 60 && nilai <= 79:
            huruf = "B"
            alert("Grade dari nilai " + nama + " adalah : " + huruf)
            break;
            case nilai >= 40 && nilai <= 59:
                huruf = "C"
                alert("Grade dari nilai " + nama + " adalah : " + huruf)
                break;
            case nilai >= 10 && nilai <= 39:
            huruf = "D"
            alert("Grade dari nilai " + nama + " adalah : " + huruf)
            break;
            case nilai >= 0 && nilai <= 9:
                huruf = "E"
                alert("Grade dari nilai " + nama + " adalah : " + huruf)
                break;
            default:
                alert("nilai tersebut tidak terdaftar")
                break;
        }
}

//while
function whileLoop(params) {
    let i = 10
        while (i>=1) {
            document.write(i)
            i--
        }
}
