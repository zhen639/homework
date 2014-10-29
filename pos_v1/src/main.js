//TODO: Please write code in this file.
function printInventory(inputs) {

  var index = {
    'ITEM000001':
      {
        name: '雪碧',
        unit: '瓶',
        price: 3
      },
    'ITEM000003':
      {
        name: '荔枝',
        unit: '斤',
        price: 15
      },
    'ITEM000005':
      {
        name: '方便面',
        unit: '袋',
        price: 4.5
      }
    }


  function splitname(name){
    var sname = name.split('-');
    if (sname.length < 2) {
      sname[1] = 1
    }
    return sname
  }

  function gifts_items(items){
    this.items_copy = items
    var gifts = {}
    for (ui in this.items_copy){
      if (this.items_copy[ui].count > 2) {
        items[ui].t_price -= 1 * index[ui].price;
        gifts[ui] = {count: 1, price: index[ui].price};
      }
    }
    return [gifts, items]
  }

  function output(items, gifts){
    var tot_price = 0, tot_save = 0;
    var result = '***<没钱赚商店>购物清单***\n';
    for(it in items){
      result += '名称：' + index[it].name + '，数量：' +
                items[it].count + index[it].unit + '，单价：' +
                index[it].price.toFixed(2) + '(元)，小计：' +
                items[it].t_price.toFixed(2) + '(元)\n';
      tot_price += items[it].t_price;
    };
    result += '----------------------\n';
    result += '挥泪赠送商品：\n';
    for(it in gifts){
      result += '名称：' + index[it].name + '，数量：' + gifts[it].count + '\n';
      tot_save += gifts[it].price
    };
    result += '----------------------\n';
    result += '总计：' + tot_price.toFixed(2).toString() + '(元)\n';
    result += '节省：' + tot_save.toFixed(2).toString() + '(元)\n';
    result += '**********************'
    console.log(result);
  };

  function isinIndex(name){
    var flag = false
    for (tk in index) {
      if (tk == name) {
        flag = true
        break
      }
    }
    return flag
  };

  function isinItems(){
    var flag2 = false
    for (to in items) {
      if (to == name) {
        flag2 = true
        break
      }
    }
    return flag2;
  };


  var items = {}

  for(var i = 0; i < inputs.length; i++){
    var sname = splitname(inputs[i]); //将商品名分开 检验一个条形码包含有多个商品
    var name = sname[0], num = sname[1];

    if (isinIndex(name)) {  //商品是否在index内
      if (isinItems(name)) {  //商品是否已经存在于items中
        items[arg].count += num;
        var tp = index[name].price * items[arg].count;
        items[arg].t_price = tp;
      }
      else {
        var arg = name
        items[arg] = {count: Number(num), t_price: index[name].price * Number(num)}
      }
    }
  }

  var result = gifts_items(items);
  var gifts = result[0], items = result[1];

  output(items, gifts);


}
