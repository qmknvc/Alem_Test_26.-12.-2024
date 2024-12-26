/*
Napiši funkciju koja pronalazi najduži zajednički prefiks među nizom stringova.
Ako ne postoji zajednički prefiks, vrati prazan string "".
*/


function najduziZajednickiPrefiks(niz){

    let kopijaNiza = [...niz]
    let zajedniciPrefiksi = ''
    let indeksBrojac = 0
    let breaker = true
    let testIsti = []
    let sviIstiUTest = ''

    while(breaker){
        niz.forEach(element => {
            testIsti.push(element[indeksBrojac])
        });
        testIsti.forEach(element => {
            if (element === testIsti[0]){
                sviIstiUTest = true
            }
            else{
                sviIstiUTest = false
            }
        })
        if (sviIstiUTest){
            zajedniciPrefiksi += testIsti[0]
            testIsti = []
            indeksBrojac++
        }
        else{
            breaker = false
        }
    }

    return zajedniciPrefiksi

}

console.log(najduziZajednickiPrefiks(["flower", "flow", "flight"]))