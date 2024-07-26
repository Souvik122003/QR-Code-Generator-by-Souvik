
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let exit = document.getElementById("exit-btn");
let jpg = document.getElementById("jpg-btn");
let png = document.getElementById("png-btn");
let svg = document.getElementById("svg-btn");

exit.addEventListener('click', ()=>{
    imgBox.classList.remove("show-img");
});
function generateQR(){

    let inputData = qrText.value;
    if(qrText.value.length > 0){
     let ApiUrl =`https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=30&data=${inputData}`;
     qrImage.src = ApiUrl;
    imgBox.classList.add("show-img");

    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
   
}

let fileName = "QR CODE";
    jpg.addEventListener('click',()=>{
    let imgPath = qrImage.getAttribute('src')+`&format=jpeg`;
    saveAs(imgPath, fileName);  
        });

    png.addEventListener('click',()=>{
    let imgPath2 = qrImage.getAttribute('src')+`&format=png`;
    saveAs(imgPath2, fileName);
    });
    

    svg.addEventListener('click',()=>{
        let imgPath3 = qrImage.getAttribute('src')+`&format=svg`;
        saveAs(imgPath3, fileName);
        });
        

        qrText.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
              event.preventDefault();
              generateQR();
            }
          });