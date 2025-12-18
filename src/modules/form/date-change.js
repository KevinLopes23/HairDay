import { schedulesDay } from "../schedules/load.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

//Recarrega a lista de horarios quando a data for alterada
selectedDate.onchange = () => schedulesDay();
