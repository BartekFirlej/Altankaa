let count = 1;
function change(){
    let photo = document.querySelector("#photo")
    if(count==3){
        photo.src=`1.jpg`
        count=1
    }else{
        photo.src=`${count+1}.jpg`
        count++
    }
}
