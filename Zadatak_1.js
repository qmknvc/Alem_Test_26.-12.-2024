/*
Za niz cijelih brojeva nums i cijeli broj target, trebaš vratiti indekse dva broja tako da njihov zbir bude jednak cilju (target).

Možeš pretpostaviti da svaki ulaz ima tačno jedno rješenje, i ne smiješ koristiti isti element dva puta.

Odgovor može biti vraćen u bilo kojem redoslijedu.
*/


function dvaIndeksa(nums, target){

    let result = []
    let breaker = true

    while(breaker){
        nums.forEach(element => {
            if (result.includes(nums.indexOf(element))){
                return
            }
            nums.forEach(subElement => {
                if (element + subElement === target){
                    result.push(nums.indexOf(element))
                    result.push(nums.indexOf(subElement))
                    breaker = false
                }
            })
        });
    }
    
    return result

}

console.log(dvaIndeksa([2, 7, 11, 15], 9))
console.log(dvaIndeksa([4, 5, 8, 2, 4], 6))
