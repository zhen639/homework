//TODO: Please write code in this file.

var itemsIndex = loadAllItems();
var promoArray = loadPromotions();



//function splitname(barc){
//    var sname = barc.split('-');
//    if (sname.length < 2) {
//        sname[1] = 1;
//    }
//    return sname
//}

function FormatItems(inputs){
    this.content = {};

//    inputs.forEach(function (barcode){
//        var spName = splitname(barcode);
//        var itemName = spName[0], itemCount = spName[1];
//        if (content.hasOwnProperty(itemName)){
//            content[itemName] += itemCount;
//        }
//        else{
//            content[itemName] = 1;
//        }
//    })

    for (var i in inputs){
        var spName = splitname(inputs[i]);
        var itemName = spName[0], itemCount = spName[1];
        if (this.content.hasOwnProperty(inputs[i])){
            this.content[itemName] += itemCount;
        }
        else{
            this.content[itemName] = Number(itemCount);
        }
    }

    this.splitname = function (){
        var sname = barc.split('-');
        if (sname.length < 2) {
            sname[1] = 1;
        }
        return sname
    }

    return this.content;
}
//
function splitname (barc){
    var sname = barc.split('-');
    if (sname.length < 2) {
        sname[1] = 1;
    }
    return sname
}



function ItemBill(itemList){
    this.bill = [];
    itemList.forEach(function (barcode, count){
        for (var i in itemsIndex){
            if (itemsIndex[i].hasOwnProperty(barcode)){
                item = {name: itemsIndex[i].name,
                        barcode: itemsIndex[i].barcode,
                        count: count,
                        unit:  itemsIndex[i].unit,
                        price:  itemsIndex[i].price,
                        totPrice:  itemsIndex[i].price * count}
                this.bill.push(item);
            }
        }
    })
    return this.bill;
}

ItemBill.prototype.getDetailInfo = function (){
    if (itemsIndex.hasOwnProperty(barcode)){
        return 0;
    }
}

function printInventory(inputs) {
    var itList = new FormatItems(inputs);
    console.log(itList);
}
