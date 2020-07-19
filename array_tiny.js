

function tinyFriend(arr){

    

    arr = ["Nayan", "Shantu", "Lalu", "Piku", "Shanjoy", "Mithun"];
    
for(let i=1; i<arr.length; ){
    let smallest = arr[0];
    if(arr[i]<smallest){

        smallest= arr[i];
        return smallest;
    }
 i++;


}
    
  


}
let output = tinyFriend();
console.log("Tiny Friend is:" +output);