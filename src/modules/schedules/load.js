import { hoursLoad } from "../form/hours-load";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { schedulesShow } from "./show.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  //Obtem a data selecionada pelo usuário
  const date = selectedDate.value;

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  //Exibe os agendamentos
  schedulesShow({ dailySchedules });

  //Renderiza as horas disponíveis na página de agendamentos
  hoursLoad({ date, dailySchedules });
}
