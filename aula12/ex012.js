
let getValHours = new Date();

let hours = getValHours.getHours();

console.log(`Agora são exatamente ${hours} horas.`);

if (hours < 12 && hours > 5) {
    console.log("Bom Dia");
}
else if (hours >= 12 && hours <= 18) {
    console.log("Boa Tarde");
}
else if (hours > 18 && hours <= 24) {
    console.log("Boa  Noite")
}
else {
    console.log("Boa Madrugada");
}