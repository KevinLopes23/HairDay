import { hoursLoad } from "../form/hours-load";

//Seleciona o input de data
const selectedDate = document.getElementById("date");

export function schedulesDay() {
  //Obtem a data selecionada pelo usuário
  const date = selectedDate.value;

  //Renderiza as horas disponíveis na página de agendamentos
  hoursLoad({ date });
}
