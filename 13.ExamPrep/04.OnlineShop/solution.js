function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;

    $(selector).html(form);
    
    let product = $('.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let submitBtn = $('#submit');
    let inventory = $('.display');
    let totaltInventoryCapacity = 0;
    let totalInventoryPrice = 0;
    let sum = $('#sum');
    let capacity = $('#capacity');
    product.on('input', unlockSubmitBtn);

    submitBtn.on('click', addOrder)

    function addOrder(){
        // if(currentInventoryCapacity + Number(quantity.val()) < 150){
           
        // }

        let newLiOrder = $('<li>');
        newLiOrder.text(`Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}`);

        console.log(price.val());
        console.log(quantity.val());
        inventory.append(newLiOrder);
        
        totaltInventoryCapacity += Number(quantity.val());
        capacity.val(totaltInventoryCapacity);

        totalInventoryPrice += Number(price.val());
        // totalInventoryPrice += Number(quantity.val()) * Number(price.val());
        sum.val(totalInventoryPrice);

        if(totaltInventoryCapacity > 149){
            capacity.addClass('fullCapacity');
            capacity.val('full');
            
            submitBtn.attr('disabled', true);
            product.attr('disabled', true);
            price.attr('disabled', true);
            quantity.attr('disabled', true);
        }

        product.val('');
        price.val(1);
        quantity.val(1);
       
    }

    function unlockSubmitBtn(){
        let isEmprty = product.val() === '';

        submitBtn.attr('disabled', isEmprty);
    }
}