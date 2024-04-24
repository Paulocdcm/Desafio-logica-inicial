let heroi = "Raze";
let xp = 8050;
let rank

if (xp < 1001) {
    rank= "ferro"
} else if (xp > 1000 && xp < 2001) {
    rank= "bronze"
} else if (xp > 2000 && xp < 6001) {
    rank="Prata"
} else if (xp > 6000 && xp < 7001) {
    rank="Ouro"
} else if (xp > 7000 && xp < 8001) {
    rank="Platina"
} else if (xp > 8000 && xp < 9001) {
    rank="Ascendente"
} else if (xp > 9000 && xp < 10001) {
    rank="Imortal"
} else {
    rank="Radiante"
}

console.log("O herói de nome " + heroi + " está no nível de xp " + xp + " com o rank de " + rank);