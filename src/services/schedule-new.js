import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    // Faz a requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    });

    //Exibe mensagem de sucesso no agendamento
    alert("Horário agendado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar o horário. Tente novamente mais tarde.");
  }
}
