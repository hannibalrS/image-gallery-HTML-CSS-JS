function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = "url("+ previewPic.src + " )";
    /* Cambio la URL de la "imagen" de fondo del div con el id image a la url de la imagen anterior 
     */ 
    document.getElementById("image").innerHTML = previewPic.alt;
      }
  /*Cambio el texto del div con el id "imagen" al texto alternativo de la imagen anterior */
      
  function unDo(){
    document.getElementById("image").style.backgroundImage = "url()";
    /* Actualizo la URl de la imagen con el id Imagen a la image original 
      */
    document.elementById("imagen").innnerHTML ="Hover over an image below to display here." ;
      /* Cambio el texto de el div con el id "image" al texto original"Hover over an image below to display here."
      */
          
      }