let listOfPicture =[
    {img: "fotos/chesudaka3.jpg"},
    {img: "fotos/che1.jpg"},
    {img: "fotos/che2.jpg"},
    {img: "fotos/che3cachafaz.jpg"},
    {img: "fotos/che4.jpg"}
]

let galleryPrincipal = document.getElementById("galleryPrincipal");
let gallerySecundary = document.getElementById("gallerySecundary");

function orderPicture(){
    listOfPicture.reverse();
}

function printElemento(i,photo){
    if(i==0){
        galleryPrincipal.innerHTML =`
                                    <div class ="box gallery__xlBox__img">
                                        <img class = "gallery__img" src="${photo}" alt="foto Che sudaka">
                                    </div>
                                    ` 
    }
    else{
        gallerySecundary.innerHTML +=`
                                    <div class ="box gallery__smallBox__img">
                                        <img class = "gallery__img uno" src="${photo}" alt="foto Che sudaka">
                                    </div>
                                    `
        }
}

function loadElemento(){
    orderPicture();
    for(let i=0;i<listOfPicture.length;i++){
        let photo = listOfPicture[i].img
        printElemento(i,photo);
    }

}
loadElemento();



