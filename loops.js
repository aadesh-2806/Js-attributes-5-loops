//////////////////////////////////////////////////for loop/////////////////////////////////////////////////

/*
for(let i=0;i<10;i++){console.log(i)}
VM1010:1 0  VM1010:1 1  VM1010:1 2  VM1010:1 3  VM1010:1 4  VM1010:1 5  VM1010:1 6  VM1010:1 7  VM1010:1    VM1010:1 9  
undefined   

arr=['df','sfd','sffdxc','aadesh','awaze']
(5) ["df", "sfd", "sffdxc", "aadesh", "awaze"]0: "df"1: "sfd"2: "sffdxc"3: "aadesh"4: "awaze"length: 5__proto__: Array(0)

for(let i=0;i<arr.length;i++){console.log(arr[i])}
VM1241:1 df VM1241:1 sfd    VM1241:1 sffdxc     VM1241:1 aadesh     VM1241:1 awaze
*/
/////////////////////////////////////////////////for.....of/////////////////////////////////////////////////////

/*
arr=['df','sfd','sffdxc','aadesh','awaze']
(5) ["df", "sfd", "sffdxc", "aadesh", "awaze"]

for(let a of arr){console.log(a)}
VM874:1 df
VM874:1 sfd
VM874:1 sffdxc
VM874:1 aadesh
VM874:1 awaze
*/
//////////////////////////////////////////////////////while////////////////////////////////////////////////////////

/*
let l=0;while(l<10){console.log(l++);}
VM290:1 0
VM290:1 1
VM290:1 2
VM290:1 3
VM290:1 4
VM290:1 5
VM290:1 6
VM290:1 7
VM290:1 8
VM290:1 9

break;//comes out  of loop;
*/
//////////////////////////////////////////////////////for...in....class//////////////////////////////

/*
for(let a of t){console.log(a)}
VM1296:1 Uncaught TypeError: t is not iterable
    at <anonymous>:1:14
(anonymous) @ VM1296:1

for(let a in t){console.log(a)}
VM1361:1 1990
VM1361:1 1991
undefined

Object.keys(t)
(2) ["1990", "1991"]

Object.values(t)
(2) ["dfhuh", "Next Year to !(()"]0: "dfhuh"1: "Next Year to !(()"length: 2__proto__: Array(0)

Object.entries(t)
(2) [Array(2), Array(2)]0: (2) ["1990", "dfhuh"]1: Array(2)0: "1991"1: "Next Year to !(()"length: 2__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Objectlength: 2__proto__: Array(0)

for(let a of Object.values(t)){console.log(a)}
VM1618:1 dfhuh
VM1618:1 Next Year to !(()
*/