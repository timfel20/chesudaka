let listOfPicture = [
    {
       id: 1,
       Img: "fotos/che4.jpg"
    },
    {
        id: 2,
        Img: "fotos/che1.jpg"
     },
     {
        id: 3,
        Img: "fotos/che2.jpg"
     },
     {
        id: 4,
        Img: "fotos/che3cachafaz.jpg"
     },
     {
        id: 5,
        Img: "fotos/chesudaka3.jpg",
     }


]

let gallerySite = document.getElementById("galleryPrint")
console.log(gallerySite)



function printGallery(object){
    gallerySite.innerHTML+=`<div class ="gallery__box--principal">
                                <div class ="box gallery__xlBox__img">
                                    <img class = "gallery__img" src="${object.Img}">
                                </div>
                            </div>
                            <div class ="gallery__box--secundary">    
                                <div class ="box gallery__smallBox__img">
                                    <img class = "gallery__img" src="${object.Img}">
                                </div> 
                            </div>`
}

function loadGallery(){
    
    listOfPicture.forEach((object)=> printGallery(object))
};

loadGallery();




