let list = document.getElementById("band");


let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let newArr =[];

for( const value of touristSpots){
  newArr.push(value.replace(/The |An | a | an | the/gi, ""))
}
newArr.sort()
console.log(newArr)

for (let lists in newArr) {
         var li = document.createElement('li');
         li.innerText = newArr[lists];
         list.appendChild(li);
      }