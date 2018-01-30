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

const arrayToTree = (array) => {
  let result = [], hash = {}, children = 'children'
  array.forEach((item, index) => {
    hash[item.id] = item
  })

  array.forEach((item, index) => {
    let mpid = item.mpid
    if (mpid === '0') {
      result.push(item)
    }
    else {
      let hashvp = hash[item.mpid]
      // console.log(hashvp);
      if (!hashvp[children]) {
        hashvp[children] = []
      }
      hashvp[children].push(item)
    }
  })
  return result
  // console.log(result);
}
console.log(arrayToTree(arr));
