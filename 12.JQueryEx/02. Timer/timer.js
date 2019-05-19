function timer() {

   let startBtn = $('#start-timer');
   let stopBtn = $('#stop-timer');
   let isTicking = false;

   let secondsEl = $('#seconds');
   let minutesEl = $('#minutes');
   let hoursEl = $('#hours');

   startBtn.on('click', startTimer);
   stopBtn.on('click', stopTimer);
   
   let timer;

   function startTimer(){
     
      if(isTicking == false){
         timer = setInterval(secondsUpdate, 1000);
         isTicking = true;
      }
      
   }
   

   function secondsUpdate(){

      let minutesValue = Number(minutesEl.text());
      let hoursValue = Number(hoursEl.text());

      let secondsValue = Number(secondsEl.text());
      secondsValue++;

      secondsEl.text(leadinfZeros(secondsValue));
      

      if(secondsValue === 60){
         secondsEl.text('00');
         minutesValue++;
         minutesEl.text(leadinfZeros(minutesValue));
         
      }

       if(minutesValue === 60){
         minutesEl.text('00');
         hoursValue++;
         hoursEl.text(leadinfZeros(hoursValue));       
      } 
   }

   function stopTimer(){
      clearInterval(timer);
      isTicking = false
   }

   function leadinfZeros(time){
      let result = '0' + time;

      //023
      return result.slice(-2);
   }
}