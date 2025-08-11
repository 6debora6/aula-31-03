function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById("container");
  
    const artigo = document.createElement("article");
    artigo.classList.add("cartao");
  
    const conteudo = document.createElement("div");
    conteudo.classList.add("cartao__conteudo");
  
    const titulo = document.createElement("h3");
    titulo.textContent = categoria;
  
    const perguntaDiv = document.createElement("div");
    perguntaDiv.classList.add("cartao__conteudo__pergunta");
    perguntaDiv.innerHTML = `<p>${pergunta}</p>`;
  
    const respostaDiv = document.createElement("div");
    respostaDiv.classList.add("cartao__conteudo__resposta");
    respostaDiv.innerHTML = `<p>${resposta}</p>`;
  
    conteudo.appendChild(titulo);
    conteudo.appendChild(perguntaDiv);
    conteudo.appendChild(respostaDiv);
    artigo.appendChild(conteudo);
    container.appendChild(artigo);
  }
  
  // Criar flashcards
  criaCartao("Programação", "O que é JavaScript?", "O JavaScript é uma linguagem de programação");
  criaCartao("Geografia", "Qual a capital da França?", "A capital da França é Paris");
  criaCartao("Programação", "O que é uma função?", "Uma função é um bloco de código que executa alguma tarefa");
  












































