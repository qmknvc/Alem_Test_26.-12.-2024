// Napisati program koji pronalazi sve brojeve u nizu koji su veći od prosjeka brojeva u istom nizu. 


function veciOdProsjeka(niz){

    let prosjekNiza = 0
    niz.forEach(element => {
        prosjekNiza += element
    });
    prosjekNiza = prosjekNiza / niz.length

    return niz.filter(n => n > prosjekNiza)

}

console.log(veciOdProsjeka([1, 2, 3, 4, 5]))