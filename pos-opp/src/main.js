//TODO: Please write code in this file.
var promoArray = loadPromotions();

function FormatItems(inputs){
    this.content = {};

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

    return this.content;
}

var SPLITMARKER = '-';
function splitname (barc){
    var sname = barc.split(SPLITMARKER);
    if (sname.length < 2) {
        sname[1] = 1;
    }
    return sname
}


function AllItemsInfo(formatItemList){
    this.purchasedItemsInfo = [];
    for(var barc in formatItemList){
        var itemInfo = getItemInfo(barc, formatItemList[barc]);
        this.purchasedItemsInfo.push(itemInfo);
    }
    return this.purchasedItemsInfo
}

function getItemInfo(barcode, itemCount){
    var itemsIndex = loadAllItems();
    for(var i in itemsIndex){
        if(itemsIndex[i].barcode == barcode){
            return {name: itemsIndex[i].name,
                    barcode: itemsIndex[i].barcode,
                    unit:  itemsIndex[i].unit,
                    price:  itemsIndex[i].price,
                    count: itemCount,
                    account: itemsIndex[i].price * itemCount
                    }
        }
    }
}

function printInventory(inputs) {
    var itemsFormat = new FormatItems(inputs);
//    console.log(itList);
    var itemBill = new AllItemsInfo(itemsFormat);
    console.log(itemBill);
}
