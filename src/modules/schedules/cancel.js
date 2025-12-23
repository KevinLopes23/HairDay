import { schedulesDay } from "./load";
import { scheduleCancel } from "../../services/schedule-cancel";
const periods = document.querySelectorAll(".period");

//Gera evento de click para cada lista(manhã, tarde e noite)
periods.forEach((period) => {
  //Captura o evento de click na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //Obtém a li pai do elemento clicado.
      const item = event.target.closest("li");

      //Pega o id do agendamento para remover
      const id = item.dataset.id;

      //Confirma a exclusão do agendamento
      if (id) {
        //Mostra um confirm para o usuário
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse agendamento?"
        );

        if (isConfirm) {
          //Chama a função de cancelamento do agendamento
          await scheduleCancel({ id });
          //Recarrega a lista de agendamentos do dia
          schedulesDay();
        }
      }
    }
  });
});
