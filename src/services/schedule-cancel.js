import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.error("Erro ao cancelar o agendamento:", error);
    alert(
      "Não foi possível cancelar o agendamento. Tente novamente mais tarde."
    );
  }
}
