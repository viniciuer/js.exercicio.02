let students = [
  {
    name: "Ana", 
    n1: 10, 
    n2: 9,
  },
  {
    name: "Bruno", 
    n1: 8, 
    n2: 6,
  },
  {
    name: "Carla", 
    n1: 5, 
    n2: 6,
  },
  {
    name: "Danilo", 
    n1: 3, 
    n2: 9,
  },
]

let Gpa = function(n1, n2) {
  return ((n1 + n2) / 2);
}

function printResult(student) {
  if (Gpa(student.n1, student.n2) >= 7) {
    return `A média do(a) aluno(a) ${student.name} foi de: ${Gpa(student.n1, student.n2)}. Parabéns, você foi aprovado(a) no concurso!`
  } else {
    return `A média do(a) aluno(a) ${student.name} foi de: ${Gpa(student.n1, student.n2)}. Infelizmente não foi dessa vez, ${student.name}. Você foi reprovado(a).`
  }
}

for (let student of students) {
  let GpaMssg = printResult(student)
  alert(GpaMssg)
}
