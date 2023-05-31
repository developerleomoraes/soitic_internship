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
let result;



// main ________________________________________
result = calcHours(pacientes, dia_1)
console.log(`Os pacientes do 1º dia são: ${result.dia_1_pacientes}`)
result = calcHours(pacientes, dia_2)
console.log(`Os pacientes do 2º dia são: ${result.dia_2_pacientes}`)
result = calcHours(pacientes, dia_3)
console.log(`Os pacientes do 3º dia são: ${result.dia_3_pacientes}`)



 // Fucntions __________________________________

 function calcHours(pacientes, diaTeste){

    let dia_1_pacientes = []
    let dia_2_pacientes = []
    let dia_3_pacientes = []
    let horarioPaciente;

    for(let i in pacientes) {
        horarioPaciente = pacientes[i]
        
        if(diaTeste >= horarioPaciente) {
            diaTeste -= horarioPaciente
            dia_1_pacientes.push(i)
        } else if (diaTeste <= dia_2) {
            diaTeste -= horarioPaciente;
            dia_2_pacientes.push(i);
        } else if (diaTeste <= dia_3) {
            diaTeste -= horarioPaciente
            dia_3_pacientes.push(i)
        }
     }
     return {
        dia_1_pacientes,
        dia_2_pacientes, 
        dia_3_pacientes
     }
 }

