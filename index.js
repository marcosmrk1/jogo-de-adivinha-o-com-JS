let computerNumber

let userNumbers = []

let tentativas = 0

let maxtentativas = 10

let maior = 100



function newGame() {

     window.location.reload()
}



function init() {
    
    computerNumber = Math.floor(Math.random() * 100 + 1)

    console.log(computerNumber)
  

}

function compareNumbers(){
    
    
    const userNumber = Number(document.getElementById('inputBox').value)
    
    userNumbers.push(" " + userNumber)
    
    document.getElementById('guesses').innerHTML = userNumbers






    if (tentativas < maxtentativas){


       

        
        if (userNumber > computerNumber ){

            document.getElementById('textOutput').innerHTML = 'your number is high'
            
            document.getElementById('inputBox').value = ""
    
            tentativas++
    
            document.getElementById('attempts').innerHTML = tentativas
            
            document.getElementById("inputBox").setAttribute("readonly")
            
        }
    
        else if (userNumber < computerNumber ){
    
            document.getElementById('textOutput').innerHTML = 'your number is low'
    
            document.getElementById('inputBox').value = ""
            
            tentativas++
    
            document.getElementById('attempts').innerHTML = tentativas
            
        }   
    
    
        else {
    
    
            document.getElementById('textOutput').innerHTML = 'congratulations'
    
            tentativas++
    
            document.getElementById('attempts').innerHTML = tentativas
            document.getElementById("inputBox").setAttribute('Readonly', 'Readonly') 
        
        }
    
    
        
    
    }
    
        else  {

            document.getElementById("textOutput").innerHTML = 'você perdeu, o número gerado foi ' +  computerNumber 
            document.getElementById("inputBox").setAttribute('Readonly', 'Readonly') 
        
        }
    



    }

