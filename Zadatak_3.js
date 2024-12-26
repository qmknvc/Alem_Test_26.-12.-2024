




function validanString(ulazanString){
    
    let otvoreneZagrade = ["(", "[", "{"]
    let zatvoreneZagrade = [")", "]", "}"]
    let prvoSlovo = ulazanString[0]
    let zadnjeSlovo = ulazanString[ulazanString.length - 1]
    let brojacIndeksa = 0
    let result = ''
    let breaker = true

    while(breaker){
        if (otvoreneZagrade.includes(prvoSlovo) && zatvoreneZagrade.includes(zadnjeSlovo)){
            if (prvoSlovo === otvoreneZagrade[brojacIndeksa] && zadnjeSlovo === zatvoreneZagrade[brojacIndeksa]){
                result = true
                breaker = false
            }
            else{
                result = false
                breaker = false
            }
        }
        else{
            result = false
            breaker = false
        }
        brojacIndeksa++
    }

    return result

}

console.log(validanString("([])"))
console.log(validanString("()]{}"))