//feet to mile conversion //

    function feetToMile(feet){
        let mile= feet* 0.00018939;
        return mile;
        }
      
        
      

        let mileCount = feetToMile(5281);
        console.log("Total Mile is:" +mileCount);

/*  tiny Friend Program */

        

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


 
 /* wood Calculator Program */
 
 
 let chairCubic = 2; // cubic needed to make a chair, table and bed;//
let tableCubic = 4;
let bedCubic = 7;

 function woodCalculator (chairNeeded, tableNeeded, bedNeeded){
  
let totalChairCubic = chairCubic * chairNeeded; //how many cubic needed for chair assigned to this variable//
let totalTableCubic = tableCubic * tableNeeded;//how many cubic needed for table assigned to this variable//
let totalBedCubic = bedCubic * bedNeeded;  //how many cubic needed for bed assigned to this variable//
let summationOfCubic = totalChairCubic+ totalTableCubic+ totalBedCubic; //Total Cubic //
return summationOfCubic;

}
let totalCubic = woodCalculator(3, 2 , 1); //3 chair, 2 table, 1 bed inputted by user and assigned to  totalCubic//
console.log("Total Cubic needed to make  Chair, Table, and Bed  is:"+totalCubic); //print how many cubic needed//

// bricksCalculator program----//


function brickCalculator (totalFloor){
  
  let bricksPerFeet = 1000;
let uptoFloor_10 = 10; // upto 1-10th floor its height 10 feet per floor; //
let uptoFloor_20 = 9; //  upto 11-20th floor its height 9 feet per floor; // 
let uptoFloor_30 = 8;  //  upto 21-30th floor its height 8 feet per floor; //

let totalUpTo_30Floor  = 30; //  total floor count upto 30th floor of the Building; //
let Floor_30_plus = totalFloor - totalUpTo_30Floor; //  rest of the floor/ floor remaining after 30th floor //

let totalFeetFloor10 = 10 *10; // total feet in 1-10th floor;//
let totalFeetFloor20 = 9*10; //total feet in 11-20th floor;//
let totalFeetFloor30 = 8*10; // total feet in 21-30th floor;//
let totalFeetFloor30Plus = 7 * Floor_30_plus; //total feet in 31-plus floor//


let bricksCount10 = totalFeetFloor10 * bricksPerFeet;
let bricksCount20 = totalFeetFloor20 * bricksPerFeet;
let bricksCount30 = totalFeetFloor30 * bricksPerFeet;
let bricksCount30Plus = totalFeetFloor30Plus * bricksPerFeet;

let bricksCount =  bricksCount10 + bricksCount20 + bricksCount30 + bricksCount30Plus; 
return bricksCount; //return Grand Total of Bricks//
}
let bricksAmount =  brickCalculator(45);
console.log("Total Bricks Needed To Build This Enourmous Edifice :" +bricksAmount);

