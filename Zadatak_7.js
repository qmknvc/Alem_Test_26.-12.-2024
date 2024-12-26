/*
Napiši funkciju koja prima 2D niz (matricu) i vraća njegovu transponovanu verziju 
(redovi orginalnog niza postaju kolone novog niza).
*/

function redoviIntoKolone(niz){

    let novaMatrica = [...niz]

    let [[a, b, c], [d, e, f], [g, h, i]] = novaMatrica

    novaMatrica = [[a, d, g], [b, e, h], [c, f, i]]

    return novaMatrica

}

console.log(redoviIntoKolone([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
/*  [1, 2, 3],      [1, 4, 7] 
    [4, 5, 6],      [2, 5, 8]
    [7, 8, 9]       [3, 6, 9]
*/