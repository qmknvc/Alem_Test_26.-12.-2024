// Napiši funkciju koja pronalazi razliku između najveće i najmanje vrijednosti u nizu.


function razlikaIzmedjuNajveceINajmanje(niz){

    let kopijaNiza = [...niz]

    kopijaNiza.sort((a, b) => a - b)

    return kopijaNiza[kopijaNiza.length - 1] - kopijaNiza[0]

}

console.log(razlikaIzmedjuNajveceINajmanje([7, 3, 10, 15, 2]))