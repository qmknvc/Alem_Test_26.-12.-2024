// Napiši funkciju koja prima niz i separator te vraća string u kojem su elementi niza spojeni tim separatorom.


function seperateWords(niz, seperator){

    let result = []
    let kopijaNiza = [...niz]

    kopijaNiza.forEach(element => {
        result.push(element)
        result.push(seperator)
    });

    result.pop()
    result = result.join('')

    return result

}

console.log(seperateWords(["Sings", "like", "Thunder"], "-"))