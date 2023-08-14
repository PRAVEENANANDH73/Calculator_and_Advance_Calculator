function sumofnumber(){
    var x = parseInt(document.getElementById("input").value);
    if(x){
var y=x+1;
var sum = (x*y)/2;
document.getElementById("output").value=sum;
}
else{
    document.getElementById("output").value="Invalid";
}
}
function Clear1(){
document.getElementById("input").value="";
document.getElementById("output").value="";

}
function lcmofnumber(){
    var x = parseInt(document.getElementById("input1").value);
    var y = parseInt(document.getElementById("input2").value);
    if(x&&y){
let res=0,hcf=0;
for (let i = 1; i <= x && i <= y; i++) {
if( x % i == 0 && y % i == 0) {
hcf = i;
}
}
res = (x*y)/hcf;
document.getElementById("output1").value=res;}
else{
    document.getElementById("output1").value="Invalid"; 
}
}
function Clear2(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
document.getElementById("output1").value="";

}
function hcfofnumber(){
    var x = parseInt(document.getElementById("input3").value);
    var y = parseInt(document.getElementById("input4").value);
    if(x&&y){
let hcf=0;
for (let i = 1; i <= x && i <= y; i++) {
if( x % i == 0 && y % i == 0) {
hcf = i;
}
}
document.getElementById("output2").value=hcf;
}
else{
    document.getElementById("output2").value="Invalid"; 
}}
function Clear3(){
    document.getElementById("input3").value="";
    document.getElementById("input4").value="";
document.getElementById("output2").value="";
}
function Power(){
    var x = parseInt(document.getElementById("input5").value);
    var y = parseInt(document.getElementById("input6").value);
    if(x && y){
    var z=1;
    for(let i=0;i<y;i++){
z=z*x;
    }
    document.getElementById("output3").value=z;
}
else{
    document.getElementById("output3").value="Invalid";
}
}
function Clear4(){
    document.getElementById("input5").value="";
    document.getElementById("input6").value="";
document.getElementById("output3").value="";
}