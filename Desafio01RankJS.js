let heroi = "Raze";
let xp = 8050;
let rank

if (xp < 1001) {
    console.log("Ferro");
    rank= "ferro"
} else if (xp > 1000 && xp < 2001) {
    console.log("Bronze");
    rank= "bronze"
} else if (xp > 2000 && xp < 6001) {
    console.log("Prata");
    rank="Prata"
} else if (xp > 6000 && xp < 7001) {
    console.log("Ouro");
    rank="Ouro"
} else if (xp > 7000 && xp < 8001) {
    console.log("Platina");
    rank="Platina"
} else if (xp > 8000 && xp < 9001) {
    console.log("Ascendente");
    rank="Ascendente"
} else if (xp > 9000 && xp < 10001) {
    console.log("Imortal");
    rank="Imortal"
} else {
    console.log("Radiante");
    rank="Radiante"
}

console.log("O herói de nome " + heroi + " está no nível de xp " + xp + " com o rank de " + rank);