let num=11
let count=0
for(i=1;i<=num;i++){
    if(num%i==1){
        count++
    }
}
if(count==0){
    console.log("prime");
}else{
    console.log("not prime");
}