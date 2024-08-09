const imgArr =["./Images/1.jpg","./Images/2.jpg","./Images/3.jpg","./Images/4.jpg","./Images/5.jpg"];
let imgIndex =0;
function prev(){
    if(imgIndex ==0){
        imgIndex = imgArr.length-1;
    }else{
        imgIndex--;
    }
    const imgElement =document.getElementById("img");
    imgElement.src =imgArr[imgIndex]
}
function next(){
    if(imgIndex == imgArr.length-1){
        ImgIndex =0;
    }else{
        imgIndex++;
    }
    const imgElement =document.getElementById("img");
    imgElement.src =imgArr[imgIndex];
}