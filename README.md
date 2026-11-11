<div align="center">

# ✂️ HairDay

**Agendamento de cortes de cabelo com horários disponíveis em tempo real**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)
[![Ver online](https://img.shields.io/badge/Ver_online-222?style=for-the-badge&logo=githubpages&logoColor=white)](https://kevinlopes23.github.io/HairDay/)

<br>

<img src="docs/preview.webp" alt="Tela do HairDay" width="74%">&nbsp;
<img src="docs/preview-mobile.webp" alt="Tela do HairDay no celular" width="20%">

</div>

## 💡 Sobre

Aplicação web para barbearias e salões: o cliente escolhe a data, um horário livre e informa o nome. Os agendamentos do dia aparecem separados por período e podem ser cancelados. O front-end é empacotado com Webpack e consome uma API REST (JSON Server).

## ✨ Funcionalidades

- Seleção de data com bloqueio de dias passados
- Horários disponíveis calculados a partir dos agendamentos existentes
- Agendamentos agrupados em manhã, tarde e noite
- Cancelamento com confirmação
- Datas e horas com Day.js em pt-BR
- Layout responsivo

## 🛠️ Tecnologias

HTML5 · CSS3 · JavaScript (ES6+, módulos) · Day.js · Webpack · Babel · JSON Server

## 🚀 Como rodar

```bash
git clone https://github.com/KevinLopes23/HairDay.git
cd HairDay
npm install
npm run server   # API fake na porta 3333
npm run dev      # front-end em http://localhost:3000
```

> A versão online usa uma API hospedada no Render (`src/services/api-config.js`); no plano gratuito, a primeira requisição pode demorar alguns segundos.

## 👤 Autor

Feito por [Kevin Lopes](https://github.com/KevinLopes23)
