let num = 9;
let res = 1;
if (num === 0){
    console.log(1)
}else if(num === 1){
    console.log(1)
}else{
    let space = "";
    do {
        space = space + num + "x";
        res = res * num;
        num --;

    } while (num >= 1);
    let newStr = ""
    for(let i=0;i<space.length -1;i++){
        newStr = newStr +" "+ space.charAt(i)
    }
    console.log(newStr +" = "+ res)
}