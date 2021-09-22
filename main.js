let listOfPicture =[
    {img: "fotos/chesudaka3.jpg"},
    {img: "fotos/che1.jpg"},
    {img: "fotos/che2.jpg"},
    {img: "fotos/che3cachafaz.jpg"},
    {img: "fotos/che4.jpg"}
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
    listOfPicture.pop();
    listOfPicture.reverse();
    for(let i=0; i<listOfPicture.length;i++){
        let secundaryPhoto = listOfPicture[i]
        gallerySecundary.innerHTML += `
                                        <div class ="box gallery__smallBox__img">
                                             <img class = "gallery__img uno" src="${secundaryPhoto.img}" alt="foto Che sudaka">
                                        </div>
                                    `
    }
    
  
        
    
    

}

function loadGallery(){
    printPrincipalPhoto();
    printSecundaryPhoto();
}

loadGallery();



