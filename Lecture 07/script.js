var co = document.getElementsByClassName("co");
var div1 = document.getElementsByClassName("div1");
var div2 = document.getElementsByClassName("div2");
var div3 = document.getElementsByClassName("div3");
var p1 = document.getElementsByClassName("p1");
var p2 = document.getElementsByClassName("p2");
var p3 = document.getElementsByClassName("p3");
var array1, array2, array3, count, value1, value2, value3;

function Init(){
    count = 1;
    // array1 = new Array();
    array1 = new Array();
    array2 = new Array();
    array3 = new Array();

    array1.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥<br>");
    array1.push("🟨🟨🟨🟨🟨🟨🟨🟨🟨<br>");
    array1.push("🟩🟩🟩🟩🟩🟩🟩<br>");
    array1.push("🟦🟦🟦🟦🟦<br>");
    array1.push("🟪🟪🟪<br>");
    array1.push("⬛<br>");
    // console.log(array1[0].length);
    // console.log(array1[1].length);
    // console.log(array1[2].length);
    // console.log(array1[3].length);
    // console.log(array1[4].length);
    // console.log(array1[5].length);
    draw();
}

function draw(){
    count = 0;
    p1[0].innerHTML = array1;
    p2[0].innerHTML = array2;
    p3[0].innerHTML = array3;

    //value1 = array1[1].length;
    value1 = array1.length; //1~6
    value2 = array2.length;
    value3 = array3.length;
    // console.log("v1 : "+value1);
    // console.log("v2 : "+value2);
    // console.log("v3 : "+value3);

    if(value1 >= 0){
        if(array1[array1.length-1].length > array2[array2.length-1].length ||
            array1[array1.length-1].length > array3[array3.length-1].length)
        {
            console.log("1이 크군");
        }else{
            console.log("1이 작군");
        }
        
    }
    // else{
    //     value1 = 0;
    // }
    if(array2.length>0){

    }if(array3.length>0){
        
    }
    
}

function move(){

}

function click1(){
    if(count == 0){
        count = 1;
    }else{
        if(count == 2){
            array1.push(array2.pop());
        }else if(count == 3){
            array1.push(array3.pop());
        }
        draw();
    }  
}
function click2(){
    if(count == 0){
        count = 2;
    }else{
        if(count == 1){
            array2.push(array1.pop());
        }else if(count == 3){
            array2.push(array3.pop());
        }
        draw();
    }  
}
function click3(){
    if(count == 0){
        count = 3;
    }else{
        if(count == 1){
            array3.push(array1.pop());
        }else if(count == 2){
            array3.push(array2.pop());
        }
        draw();
    }
}

