// 快速排序
var arr = [11, 133, 44, 66, 55, 8, 6, 0]

// function quickSort(array) {
//   let _arr = array.slice();
//   if (_arr.length <= 1) {
//     return _arr
//   }

//   let middleNumber = _arr.splice(Math.floor(_arr.length / 2), 1)[0]
//   let left = [], right = []

//   for (let i = 0; i < _arr.length; i++) {
//     if (_arr[i] < middleNumber) {
//       left.push(_arr[i])
//     }
//     else {
//       right.push(_arr[i])
//     }
//   }
//   return quickSort(left).concat([middleNumber] ,quickSort(right)) 
// }
// console.log(quickSort(arr));


// function quickSort(arr) {
//   if (arr.length <=1) {
//     return arr
//   }
//   let left = arr.slice(1).filter(item => item <= arr[0])
//   let right = arr.slice(1).filter(item => item > arr[0])

//   return quickSort(left).concat(arr[0],quickSort(right))
// }

// console.log(quickSort(arr))

function quickSort(arr) {
  return arr.length <=1 ? arr : quickSort(arr.slice(1).filter(item => item <= arr[0])).concat(arr[0], quickSort(arr.slice(1).filter(item => item > arr[0])))
}
console.log(quickSort(arr))

// var a = {
//   1: { xs: 24 },
//   2: { xs: 24, sm: 12 },
//   3: { xs: 24, sm: 12, md: 8 },
//   4: { xs: 24, sm: 12, md: 6 },
// }

// console.log(...a[1]);

var name = {
	style: {
		paddingleft: 16,
		paddingright: 16
	}
}

var { style } = name;
console.log(style);  










// 快速排序2
// function quickSort(a) {
//   return a.length <= 1 ? a : quickSort(a.slice(1).filter(item => item <= a[0])).concat(a[0], quickSort(a.slice(1).filter(item => item > a[0])));
// }











