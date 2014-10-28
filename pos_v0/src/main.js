//TODO: Please write code in this file.
function printInventory(inputs) {
  console.log('***<没钱赚商店>购物清单***');
  var tot = 0;
  for(var item in inputs){
  	var t_price = item.price * item.count;
    	console.log('名称:' + item.name + ',数量:' + item.count + item.unit + ',单价:' + item.price + '(元),小计:' + t_price + '(元)');
	tot += t_price
  };
  console.log('----------------------');
  console.log('总计：' + tot + '(元)');
  console.log('**********************');

}
