# curso_ebac_frontend
Repositorio criado para apresentar exercicio de git.

O **MJML** (Mailjet Markup Language) é uma linguagem focada na criação de e-mails responsivos de maneira mais simples e eficiente. Ele funciona como um **framework de e-mails**, semelhante ao que o Tailwind faz para o CSS, permitindo que você escreva menos código e tenha um design responsivo automaticamente.  

### **Principais Conceitos para Aprender no MJML**  

1️⃣ **Estrutura básica de um e-mail**  
Todo e-mail em MJML segue essa estrutura:  
```mjml
<mjml>
  <mj-head>
    <mj-preview>Pré-visualização do e-mail</mj-preview>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text>Olá, este é um e-mail responsivo!</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```
🔹 `<mjml>` → Envolve todo o código  
🔹 `<mj-head>` → Define metadados do e-mail  
🔹 `<mj-body>` → Contém o conteúdo principal do e-mail  
🔹 `<mj-section>` → Cria uma linha dentro do e-mail  
🔹 `<mj-column>` → Divide em colunas (necessário para estrutura responsiva)  

---

2️⃣ **Criando layouts responsivos automaticamente**  
MJML já faz o trabalho pesado da responsividade. Basta dividir o conteúdo em **seções** e **colunas**:  
```mjml
<mj-section>
  <mj-column>
    <mj-text>Coluna 1</mj-text>
  </mj-column>
  <mj-column>
    <mj-text>Coluna 2</mj-text>
  </mj-column>
</mj-section>
```
✅ Em telas grandes → As colunas ficam lado a lado  
✅ Em telas pequenas → As colunas empilham automaticamente  

---

3️⃣ **Adicionando imagens e botões**  
É fácil inserir elementos comuns de e-mails, como imagens e botões.  
```mjml
<mj-section>
  <mj-column>
    <mj-image width="100px" src="https://via.placeholder.com/100"></mj-image>
    <mj-button background-color="#007bff" color="white" href="https://exemplo.com">
      Clique Aqui
    </mj-button>
  </mj-column>
</mj-section>
```
🔹 `<mj-image>` → Insere uma imagem responsiva  
🔹 `<mj-button>` → Cria um botão estilizado  

---

4️⃣ **Personalizando estilos**  
Você pode customizar estilos usando **atributos inline** ou CSS global.  
```mjml
<mj-text font-size="20px" color="#333">
  Texto personalizado
</mj-text>
```
Ou definir estilos globais no `<mj-head>`:  
```mjml
<mj-head>
  <mj-style inline="inline">
    .custom-text { color: red; font-weight: bold; }
  </mj-style>
</mj-head>
<mj-text class="custom-text">Texto vermelho e negrito</mj-text>
```

---

5️⃣ **Testando e convertendo para HTML**  
O MJML precisa ser convertido para HTML antes de ser enviado como e-mail. Você pode fazer isso de várias formas:  
- **Editor online:** [mjml.io](https://mjml.io/try-it-live)  
- **Linha de comando:**  
  ```bash
  mjml input.mjml -o output.html
  ```
- **Node.js:**  
  ```javascript
  const mjml2html = require('mjml')
  console.log(mjml2html('<mjml>...</mjml>').html)
  ```

---

### **Conclusão**  
📌 **MJML simplifica muito a criação de e-mails responsivos**, evitando a necessidade de tabelas complicadas e CSS inline manual. É ideal para newsletters, e-mails promocionais e comunicações automatizadas.  

Você tem interesse em testar o MJML em algum projeto específico, como um e-mail de boas-vindas ou uma newsletter? 🚀
