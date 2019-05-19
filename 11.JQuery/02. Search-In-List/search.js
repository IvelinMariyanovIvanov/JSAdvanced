function search() {
   let searchText = $("#searchText").val();
   // let allTownsList = $("#towns").children().toArray().map(li => li.textContent);
   let allTownsList = $("#towns").children().toArray();
   let count = 0;
   // reset bol for new searches
   allTownsList.forEach(town => {
      $(town).css('font-weight', 'normal');
   });

   // includes - for string
   // contains - for whole element - $("li:contains(is)")
   allTownsList.forEach(town => {
      if(town.textContent.includes(searchText)){
         $(town).css('font-weight', 'Bold');
         count ++;
      }
   });

   // cast to jquery to use text()
   // allTownsList.forEach(town => {
   //    if($(town).text().includes(searchText)){
   //       $(town).css('font-weight', 'Bold');
   //    }
   // });

   $("#result").text(`maches ${count}`)

}