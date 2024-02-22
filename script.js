const jedi = [

]
jedi[0] = `Luke`
const jedi2 = jedi.push(`Obi-Wan Kenobi`)
const yoda = jedi.unshift(`Yoda`)

console.log(jedi);

console.log(jedi[1]);

const pop = jedi.pop()
console.log(jedi);

const shift = jedi.shift()
console.log(jedi);

const sithLords = [
    `Darth Vader`,
    `Darth Sidious`,
    `Darth Maul`
]

const imperialOfficers = [
    `Grand Moff Tarkin`,
    `Orson Krennic`
]

const starWarsVillains = sithLords.concat(imperialOfficers)
console.log(starWarsVillains);

const slice = starWarsVillains.slice(2,4)
console.log(slice);

const droids = {
    astromech: `R2-D2`,
    protocol: `C-3PO`,
    assassin: `IG-88`
}

console.log(droids[`astromech`]);
console.log(droids.protocol);
droids[`assassin`] = `IG-11`
console.log(droids.assassin);