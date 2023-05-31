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
};

// Functions __________________________________
function calcHours(pacientes, dia_1, dia_2, dia_3) {
  const dia_1_pacientes = [];
  const dia_2_pacientes = [];
  const dia_3_pacientes = [];

  let disponibilidadeDia_1 = dia_1;
  let disponibilidadeDia_2 = dia_2;
  let disponibilidadeDia_3 = dia_3;

  for (let i in pacientes) {
      if (disponibilidadeDia_1 >= pacientes[i]) {
          disponibilidadeDia_1 -= pacientes[i];
          dia_1_pacientes.push(i);
      } else if (disponibilidadeDia_2 >= pacientes[i]) {
          disponibilidadeDia_2 -= pacientes[i];
          dia_2_pacientes.push(i);
      } else if (disponibilidadeDia_3 >= pacientes[i]) {
          disponibilidadeDia_3 -= pacientes[i];
          dia_3_pacientes.push(i);
      }
  }

  return {
      dia_1_pacientes,
      dia_2_pacientes,
      dia_3_pacientes
  };
}

// Variables declarations ______________________
const dia_1 = 300;
const dia_2 = 240;
const dia_3 = 180;
let result;

// main ________________________________________________________________
result = calcHours(pacientes, dia_1, dia_2, dia_3);
console.log(`Os pacientes do 1º dia são: ${result.dia_1_pacientes.join(',')}`);
console.log(`Os pacientes do 2º dia são: ${result.dia_2_pacientes.join(',')}`);
console.log(`Os pacientes do 3º dia são: ${result.dia_3_pacientes.join(',')}`);
