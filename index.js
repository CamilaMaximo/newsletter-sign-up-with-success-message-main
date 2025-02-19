
 
function cadastrarEmail() {
    const email = document.getElementById("email").value;
 
    if  (email === "") {
        alert("Por favor, insira um e-mail válido.");
        return;
    
    }else{

    localStorage.setItem("userEmail", email); // Armazena o e-mail temporariamente
    window.location.href = "sucess.html"; // Redireciona para a página de agradecimento
}

    }
        function voltar() {
            window.location.href = "index.html"; // Retorna para a página inicial
        }


