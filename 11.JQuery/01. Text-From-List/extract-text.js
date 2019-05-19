function extractText() {
   
   // 
   let jqueryEl = $("#items").children().toArray();

   // transform from jquery object to js
   let ul = jqueryEl.map(li => li.textContent).join(', ');


   $("#result").text(ul);
}
