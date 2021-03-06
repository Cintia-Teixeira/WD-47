;(function(){
    const form = document.querySelector(".formNovoCartao");
    let numeroDoCartao = 0;
    form.addEventListener("submit", function(event){
        //Evita o recarregamento automático da página ao clicar no input do tipo submit
        event.preventDefault();
        const textarea = form.querySelector(".formNovoCartao-conteudo");
        const isTextAreaVazio = textarea.value.trim().length === 0
        
        //Verifica se tem algo escrito no textarea antes de criar o cartão
        if(isTextAreaVazio){
            const msgErro = document.createElement("div");
            msgErro.classList.add("formNovoCartao-msg");
            msgErro.textContent = "Formulário inválido. Não digite vários nada!"

            const btnSubmit = form.querySelector(".formNovoCartao-salvar");
            form.addEventListener("animationend", function(event){
                event.target.remove();
            })

            form.insertBefore(msgErro, btnSubmit);
        }else{          
            adicionaCartaoNoMural({conteudo: textarea.value});
        }  
        //Limpa o textarea
        textarea.value = "";  
    })

    form.classList.remove("no-js");
})()