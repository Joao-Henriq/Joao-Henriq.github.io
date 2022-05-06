function criaCalculadora() {
    return {
        // Vamos organizar, deixar os atributos em cima e os métodos mais abaixo
        display: document.querySelector('.display'),    
     
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();

        },
        
        pressionaEnter(){
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },
        
        realizaConta(){
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);

            } catch(e){
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        deletaUm(){
            this.display.value = this.display.value.slice(0,-1);
        },
        
        
        cliqueBotoes(){
            document.addEventListener('click', (e) =>{
                const elemento = e.target;
                
                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText);
                }
                
                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-del')){
                    this.deletaUm();
                }

                if(elemento.classList.contains('btn-eq')){
                    this.realizaConta();
                }

                this.display.focus();

            });

        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }



    };
}
const calculadora = criaCalculadora();
calculadora.inicia();
