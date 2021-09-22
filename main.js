let listOfPicture =[
    {img: "fotos/che4.jpg"},
    {img: "fotos/che1.jpg"},
    {img: "fotos/che2.jpg"},
    {img: "fotos/che3cachafaz.jpg"},
    {img: "fotos/chesudaka3.jpg"}
]

let galleryPrincipal = document.getElementById("galleryPrincipal")
let gallerySecundary = document.getElementById("gallerySecundary")



function printPrincipalPhoto(){
    let principalPhoto = listOfPicture[listOfPicture.length-1];
    
    galleryPrincipal.innerHTML = `
                                    <div class ="box gallery__xlBox__img">
                                            <img class = "gallery__img" src="${principalPhoto.img}" alt="foto Che sudaka">
                                    </div>
                                `
}
function printSecundaryPhoto(){
    let secundaryPhoto = listOfPicture.slice(0,4);
    console.log(secundaryPhoto)
    gallerySecundary.innerHTML =`
                                    <div class ="box gallery__smallBox__img">
                                        <img class = "gallery__img uno" src="${secundaryPhoto.img}" alt="foto Che sudaka">
                                    </div>
                                    <div class ="box gallery__smallBox__img">
                                        <img class = "gallery__img uno" src="${secundaryPhoto.img}" alt="foto Che sudaka">
                                    </div>
                                    <div class ="box gallery__smallBox__img">
                                        <img class = "gallery__img uno" src="${secundaryPhoto.img}" alt="foto Che sudaka">
                                    </div>
                                    <div class ="box gallery__smallBox__img">
                                        <img class = "gallery__img uno" src="${secundaryPhoto.img}" alt="foto Che sudaka">
                                    </div>
                                `
}

function loadGallery(){
    printPrincipalPhoto();
    printSecundaryPhoto();

}

loadGallery();



