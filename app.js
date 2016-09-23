/*Create  a  Ja va Sc rip t  fil e ap p .j s  an d i nc lude  t hat sc r ip t file  in to yo u r in dex .html file  
using  <sc rip t> t ag . I n
ap p .j s file , write a  Ja v aSc rip t  p rogr am to  fi nd  the  grea test 
among  3 n umbers  a nd  disp lay  the  gre atest  n umber i n c onsole.
*/

var n1 = parseFloat(prompt("Enter first number"));
var n2 = parseFloat(prompt("Enter 2nd number"));
var n3 = parseFloat(prompt("Enter 3rd number"));


if ((typeof n1 == "number") && (typeof n2 == "number")&&(typeof n3 == "number")){
var largest = n1;

	if (n2>largest) largest = n2;
	if (n3> largest) largest = n3;

	console.log("Largest number entered is "+largest);
}
else
console.log("Not a number");

