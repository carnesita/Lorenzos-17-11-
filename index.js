function openPage(pageName, elmnt, color) {
    // Esconder todos los elementos con clase"tabcontect" por defecto */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // remove el fondo de clor de todos los botones 
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Mostrar el contenido específico de la pestaña
    document.getElementById(pageName).style.display = "block";
  
    // Agregue el color específico al botón utilizado para abrir el contenido de la pestaña
    elmnt.style.backgroundColor = color;
  }
  
  // Cambia la clase del boton para que se mantenga abierto
  document.getElementById("defaultOpen").click();

