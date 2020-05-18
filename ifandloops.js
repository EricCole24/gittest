let val = 51
var friends = ['matt',"Eric","david", "dadday"]
if(val === 50){
    console.log("True")
}
else if(val < 50){
    console.log("less than 50")
}
else{
    console.log("False")
}
console.log("ended Program")

for(let i=0; i<friends.length; i++){
    console.log(friends[i])
    if(friends[i] === 'david'){
        console.log("found")
        break
    }
}
let count = 0;
while (count < friends.length){
    console.log(friends[count])
    count++
}