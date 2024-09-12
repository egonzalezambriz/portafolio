

// window.onload = function() {

       // Verifica si el nombre ya está almacenado en sessionStorage
        let nombre = sessionStorage.getItem("nombreUsuario");

        if (!nombre) {
            // Si no hay nombre almacenado, solicita el nombre al usuario
            nombre = prompt("¿Cómo te llamas?");
            
            if (nombre) { // Asegúrate de que el usuario haya ingresado algo
                sessionStorage.setItem("nombreUsuario", nombre);
                sessionStorage.setItem("saludoMostrado", "false"); // Marca que el saludo aún no ha sido mostrado
            }
        }

        // Verifica si el saludo ya fue mostrado
        let saludoMostrado = sessionStorage.getItem("saludoMostrado");

        if (nombre && saludoMostrado === "false") {
            // Muestra el saludo una única vez
            alert("¡Hola " + nombre + "! Bienvenido a mi portfolio!");
            
            // Marca el saludo como mostrado para evitar que se repita
            sessionStorage.setItem("saludoMostrado", "true");
        }

        




        // Array de frases para presentar en el footer
        const frases = [
            "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
            "El único modo de hacer un gran trabajo es amar lo que haces.",
            "No cuentes los días, haz que los días cuenten.",
            "La mente es todo. Lo que pienses, eso serás.",
            "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.",
            "La mejor venganza es un gran éxito.",
            "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
            "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello."
        ];

        // Función para generar una frase aleatoria
        function generarFrase() {
            // Genera un índice aleatorio dentro del rango de la longitud del array de frases
            const indice = Math.floor(Math.random() * frases.length);
            
            // Obtiene la frase correspondiente al índice generado
            const fraseAleatoria = frases[indice];
            
            // Muestra la frase en el footer
            document.getElementById("frase").innerText = fraseAleatoria;
        }

        // Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
        document.getElementById("btn-generar").addEventListener("click", generarFrase);

  //};