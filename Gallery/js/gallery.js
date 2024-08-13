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

      function initializeGallery() {
        // Selecciona todas las imágenes con la clase "preview"
        let images = document.querySelectorAll('.preview');
    
        // Recorre todas las imágenes y les agrega tabindex dinámicamente
        images.forEach((img, index) => {
            img.setAttribute('tabindex', index + 1);
            console.log("Added tabindex to image " + (index + 1));
        });
    
        // Puedes agregar otros inicializadores aquí si es necesario
        console.log("Galería inicializada.");
    }
    
    // Llama a la función de inicialización cuando la página se carga
    window.onload = initializeGallery;
    