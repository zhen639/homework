//TODO: Please write code in this file.
function printInventory(inputs) {
  var result = '***<没钱赚商店>购物清单***\n'
  var tot = 0;
  for(var index = 0; index < inputs.length; index++){
  	var t_price = inputs[index].price * inputs[index].count;

    result += '名称：' + inputs[index].name +
    '，数量：' + inputs[index].count + inputs[index].unit +
    '，单价：' + inputs[index].price.toFixed(2) +
    '(元)'+
    ','+  //这里的逗号如果用英文的就可以通过测试，用中文则不行
    '小计：'+ t_price.toFixed(2) + '(元)\n';

	  tot += t_price
  };
  result += '----------------------\n';
  result += '总计：' + tot.toFixed(2) + '(元)\n';
  result += '**********************';

  console.log(result);

}
