const arr = [
  { id: '1', mpid: '0', name: '首页' },
  { id: '2', mpid: '0', name: '账户管理' },
  { id: '3', mpid: '0', name: '物业资料' },
  { id: '31', mpid: '3', name: '商业体管理' },
  { id: '32', mpid: '3', name: '层管理' },
  { id: '33', mpid: '3', name: '铺管理' },
  { id: '331', mpid: '33', name: 'children铺管理' },
]

const re = [
  { id: '1', mpid: '0', name: '首页' },
  { id: '2', mpid: '0', name: '账户管理' },
  {
    id: '3', mpid: '0', name: '物业资料', children: [
      { id: '31', mpid: '3', name: '商业体管理' },
      { id: '32', mpid: '3', name: '层管理' },
      {
        id: '33', mpid: '3', name: '铺管理', children: [
          { id: '331', mpid: '33', name: 'children铺管理' }
        ]
      }
    ]
  },
]

const arrayToTree = array => {
  let result = [], hash = {}, children = 'children';

  array.map(item => {
    hash[item.id] = item
  })

  array.map((item, index) => {
    if (item.mpid == 0) {
      result.push(item)
    }
    else {
      if (!hash[item.mpid][children]) {
        hash[item.mpid][children] = []
      }
      hash[item.mpid][children].push(item)
    }
  })

  return result

  // console.log(hash);
}

// console.log(arrayToTree(arr));



var str = 'adffsdfdsfsfssss';
var o = {};

for(var i = 0; i < str.length; i++) {
  var v = str.charAt(i);
  if (o[v] && o[v].value == v) {
    o[v].count = ++ o[v].count
  }else {
    o[v] = {};
    o[v].value = v;
    o[v].count = 1
  }
}
console.log(o);



