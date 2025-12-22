import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  //Limpa os horários anteriores.
  hours.innerHTML = "";

  //Obtém a lista de todos os horários ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    //Recupera somente a hora.

    const [scheduleHour] = hour.split(":");

    //Adiciona a hora na date e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    //Define se o horário está disponível ou não.
    return {
      hour,
      available,
    };
  });

  //Renderiza os horários.
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    hours.append(li);
  });

  //Adiciona o evento de clique nos horários disponíveis.
  hoursClick();
}
