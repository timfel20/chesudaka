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



function printGallery(){
    gallerySite.innerHTML=
    `<div class ="gallery__box--principal">
            <div class ="box gallery__xlBox__img">
                <img class = "gallery__img" src="${listOfPicture[0].Img}" alt="foto Che sudaka">
            </div>
    </div>
    <div class ="gallery__box--secundary">    
            <div class ="box gallery__smallBox__img">
                <img class = "gallery__img uno" src="${listOfPicture[1].Img}" alt="foto Che sudaka">
            </div>   
            <div class ="box gallery__smallBox__img">
                <img class = "gallery__img dos" src="${listOfPicture[2].Img}" alt="foto Che sudaka">
            </div>
            <div class ="box gallery__smallBox__img">
                <img class = "gallery__img tres" src="${listOfPicture[3].Img}" alt="foto Che sudaka">
            </div>
            <div class ="box gallery__smallBox__img">
                <img class = "gallery__img cuatro" src="${listOfPicture[4].Img}" alt="foto Che sudaka">
            </div>
    </div>`
}

function loadGallery(){
    
    listOfPicture.forEach((object, index)=> printGallery(object, index))
};

loadGallery();




