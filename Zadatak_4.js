/*Ulaz je string koji se sastoji od riječi i razmaka. Vratiti dužinu posljednje riječi u stringu.

Riječ je maksimalni podstring koji se sastoji samo od znakova koji nisu razmaci.
*/


function duzinaZadnjeRijeci(recenica){
    recenica = recenica.split(' ')
    let sum = 0
    let zadnjaRijec = recenica[recenica.length - 1]

    zadnjaRijec = zadnjaRijec.split('')

    zadnjaRijec.forEach(element => {
        sum++
    });
    
    return sum

}


console.log(duzinaZadnjeRijeci("Hello World"))
console.log(duzinaZadnjeRijeci("fly me to the moon"))