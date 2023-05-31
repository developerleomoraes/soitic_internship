/*
Alocação ideal
dia_1 = 90 + 80 + 60 + 70
dia_2 = 80 + 85 + 45
dia_3 = 75 + 65
*/

// Object ______________________________________
const pacientes = {
    maria_clara: 80,
    pedro_henrique: 90,
    ana_lauiza: 60,
    gabriel_oliveira: 70,
    laura_beatriz: 45,
    joao_miguel: 80,
    isabela_fernandes: 65,
    lucas_santos: 85,
    beatriz_almeida: 75
}


// Variables declarations ______________________
const dia_1 = 300
const dia_2 = 240
const dia_3 = 180


// main ________________________________________________________________
const result = calcHours(pacientes, dia_1, dia_2, dia_3)
console.log(`Os pacientes do 1º dia são: ${result.dia_1_pacientes.join(',')}`)
console.log(`Os pacientes do 2º dia são: ${result.dia_2_pacientes.join(',')}`)
console.log(`Os pacientes do 3º dia são: ${result.dia_3_pacientes.join(',')}`)



 // Fucntions __________________________________

 function calcHours(pacientes, dia_1, dia_2, dia_3){

    let dia_1_pacientes = []
    let dia_2_pacientes = []
    let dia_3_pacientes = []

    for(let i in pacientes) {
        if(dia_1 >= pacientes[i]) {
            dia_1 -= pacientes[i]
            dia_1_pacientes.push(i)
        } else if (dia_2 >= pacientes[i]) {
            dia_2 -= pacientes[i]
            dia_2_pacientes.push(i)
        } else if (dia_3 >= pacientes[i]) {
            dia_3 -= pacientes[i]
            dia_3_pacientes.push(i)
        }
     }
     return {
        dia_1_pacientes,
        dia_2_pacientes, 
        dia_3_pacientes
     }
 }

