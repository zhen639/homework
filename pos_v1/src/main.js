//TODO: Please write code in this file.
function printInventory(inputs) {
  var itemsIndex = loadAllItems();
  var promoArray = loadPromotions();

  function splitname(barc){
    var sname = barc.split('-');
    if (sname.length < 2) {
      sname[1] = 1;
    }
    return sname
  }

  function get_gifts_items(items, protype){  //获得赠品清单与要付款商品清单
    for (var i = 0; i < promoArray.length; i++) {
      if (promoArray[i].type == protype){
        var promoItems = promoArray[i].barcodes;
        break;
      }
    }

    this.items_copy = items
    var gifts = {}
    for (barc in this.items_copy){
      for (var i = 0; i < promoItems.length; i++) {
        if (promoItems[i] == barc){
          var yu = items[barc].count % 3
          var shang = (items[barc].count - yu) / 3
          items[barc].t_price -= shang * items[barc].price;
          gifts[barc] = {name: items[barc].name, unit: items[barc].unit, count: shang, price: items[barc].price};
        }
      }
    }
    return [gifts, items]
  }

  function output(items, gifts){  //输出
    var tot_price = 0, tot_save = 0;
    var result = '***<没钱赚商店>购物清单***\n';
    for(it in items){
      result += '名称：' + items[it].name + '，数量：' +
                items[it].count + items[it].unit + '，单价：' +
                items[it].price.toFixed(2) + '(元)，小计：' +
                items[it].t_price.toFixed(2) + '(元)\n';
      tot_price += items[it].t_price;
    };
    result += '----------------------\n';
    result += '挥泪赠送商品：\n';
    for(it in gifts){
      result += '名称：' + gifts[it].name + '，数量：' + gifts[it].count + gifts[it].unit + '\n';
      tot_save += gifts[it].price
    };
    result += '----------------------\n';
    result += '总计：' + tot_price.toFixed(2).toString() + '(元)\n';
    result += '节省：' + tot_save.toFixed(2).toString() + '(元)\n';
    result += '**********************'
    console.log(result);
  };


  function isinItems(barc, items){
    for (to in items) {
      if (to == barc) {
        return true
      }
    }
    return false;
  };

  function get_allitems(inputs){
    var items = {}
    for(barc_raw in inputs){

    //此处有疑惑  如果用
    // for(var i = 0; i<inputs.length; i++){
    //   var splname = splitname(inputs[i]);
    //则无法产生正确结果

      var splname = splitname(inputs[barc_raw]); //将商品名分开 检验一个条形码包含有多个商品
      var barc = splname[0], num = Number(splname[1]);

      if (isinItems(barc, items)) {  //商品是否已经存在于items中
        items[barc].count += num;
        var tp = items[barc].price * items[barc].count;
        items[barc].t_price = tp;
      }
      else {
        for (var i = 0; i < itemsIndex.length; i++) {
          if (itemsIndex[i].barcode == barc){
            items[barc] = {name: itemsIndex[i].name, unit: itemsIndex[i].unit,
                          count: num, t_price: itemsIndex[i].price * num,
                          price: itemsIndex[i].price};
            break;
          }
        }
      }
    }
    return items;
  }

  var items = get_allitems(inputs);  //获得购买的商品信息
  var result = get_gifts_items(items, 'BUY_TWO_GET_ONE_FREE');  //根据促销方式不同 获得赠品清单
  var gifts = result[0], items = result[1];
  output(items, gifts); //输出结果

}
