function initializeTable() {

    let table = $('#countriesTable');

    createRow(table, 'Bulgaria', 'Sofia');
    createRow(table, 'Germany', 'Berlin');
    createRow(table, 'Russia', 'Moscow');

    

    let createRowBtn = $("#createLink").on('click', function(){

        let country = $("#newCountryText").val();
        let capital = $("#newCapitalText").val();
        
        if(country != '' && capital != ''){
            createRow(table, country, capital);
        } else {
            alert('Enter a valid name');
        }
    });

   

    function createRow(table, countryName, capitalName){
       
        let newRow = $(document.createElement('tr'));

        let capital = $(document.createElement('td'));
        capital.text(countryName);
        let town = $(document.createElement('td'));
        town.text(capitalName);
        let actions = $(document.createElement('td'));

        let up = $(document.createElement('a'));
        up.text('Up');
        up.click(upFunc);

        let donw = $(document.createElement('a'));
        donw.text('Down');
        donw.click(downFunc);

        let deleteAction = $(document.createElement('a'));
        deleteAction.text('Delete');
        deleteAction.click(deleteFunc);

        actions.append(up, donw, deleteAction);
        
        newRow.append(capital, town, actions);

        table.append(newRow);    

        fixRowLinks();

    }

    function upFunc(){
        let currentRow = $(this).parent().parent();

        currentRow.insertBefore(currentRow.prev());

        fixRowLinks();
    }

    function downFunc(){

        let currentRow = $(this).parent().parent();

        currentRow.insertAfter(currentRow.next());

        fixRowLinks();
    }

    function deleteFunc(){
        let currentRow = $(this).parent().parent();

        currentRow.remove();
    }

    function fixRowLinks() {
        // Show all links in the table
        // $('#countriesTable a').css('display', 'inline');
        
        $('#countriesTable a').show();

        // Hide [Up] link in first table data row
        // let tableRows = $('#countriesTable tr');
        // $(tableRows[2]).find("a:contains('Up')")
        //   .css('display', 'none');

        $('#countriesTable tr:nth-child(3) td:nth-child(3) a:first-child').hide();
      
        // Hide the [Down] link in the last table row
        // $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
        //   .css('display', 'none');
        // }

        $('#countriesTable tr:last-child td:nth-child(3) a:nth-child(2)').hide();
    }
      
}