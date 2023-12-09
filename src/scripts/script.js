    function formatValueBrazil(number) {

       return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}).format(number)

      
    } 
    
    
    function getReturnOnInvestment() {
        let inputText = document.getElementById('textSimulator').value
        const resultText = document.getElementById('result')
    
        if (inputText < 1000) {
           inputText *=   1.5
        } else {
            inputText *=   4
        }
        

        return (
            resultText.innerHTML = `
                <p class="text">O retorno do seu investimento será de ${formatValueBrazil(inputText)}</p>
            `
            
            
            )
    }

    document.addEventListener('input', function() {
        const inputText = document.getElementById('textSimulator').value;
        const button = document.getElementById("button");
  
        inputText.length == 0 ? button.setAttribute('disabled', 'disabled') : button.removeAttribute('disabled');
    }
    
    )
