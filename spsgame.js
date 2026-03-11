
let scrstr = localStorage.getItem('score')
let score =  JSON.parse(scrstr) ||{
            win : 0,
            loss : 0,
            tie : 0,
            }
        
        score.display_score = function(){
                return 'SCOREBOARD:\nWins: ' + score.win + '\nLosses: ' + score.loss + '\nTies: ' + score.tie
            }


        let computerChoice;
        
        function generateComputerChoice(){
            let randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber === 0){
                return  'stone'
            }
            else if (randomNumber === 1){
                return  'paper'
            }
            else {
                return 'scissors'
            }
            
        }
        
        function getresult(usermove,compmove){
            if (compmove === usermove){
                score.tie = score.tie + 1;
                return 'it is a tie';
            }
            else if (
                (compmove === 'stone' && usermove === 'paper') ||
                (compmove === 'paper' && usermove === 'scissors') ||
                (compmove === 'scissors' && usermove === 'stone')
            ){
                score.win = score.win + 1;
                return 'it is a win';
            }
            else {
                score.loss = score.loss + 1;
                return 'it is a loss';
            }
        }

        function  showresult(usermove,compmove,result){
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('#usermove').innerText =
            usermove != undefined ? 'u have choosen '+usermove: '';

             document.querySelector('#computermove').innerText = 
             
             compmove != undefined ? 'computer have choosen ' + compmove: '';
              
               document.querySelector('#result').innerText = 

               result != undefined ? ' the result is : '+  result : '';

                document.querySelector('#scoreboard').innerText = score.display_score()
           
        }

        // reset stored counters and show confirmation
        function resetScoreboard(){
            score.win = 0;
            score.loss = 0;
            score.tie = 0;
            localStorage.setItem('score',JSON.stringify(score))
             showresult()
        }

    