//console.log("hello")


let date = new Date()
console.log(date)



function today(){
    return new Date().toISOString().split('T')[0]
}
console.log(today())


function now(){
    return new Date()
}
console.log(now())


function getMontName(){
    return [
        new Date().toLocaleDateString("en-US",{month:"numeric"}),
        new Date().toLocaleDateString("en-US",{month:"short"}),
    ]
}
console.log(getMontName()[0])


function getMontNameQ(form){
    return new Date().toLocaleDateString("en-US",{month:`${form}`})   
}
console.log(getMontNameQ("short"))


function getDay(form){
    return new Date().toLocaleDateString("en-US",{weekday:`${form}`})   
}
console.log(getDay("long"))

//2026-07-01

//01-07-2026
// 01-July-2026
console.log("2026-07-01".split("-").reverse().join("-")) //["2026",07,01]

console.log( new Date().toLocaleDateString("en-US",{month:`long`}) , new Date().getFullYear(),new Date().getDate())