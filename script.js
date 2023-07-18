//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal', 'yamuna the aji'];
let newArr =[];

for( const value of touristSpots){
  newArr.push(value.replace(/The |An | a | an | the/gi, ""))
}

newArr.sort()

for(let value of newArr){
console.log(value)
}