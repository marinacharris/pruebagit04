// los eventos se llaman por métodos desde las etiquetas html
const user = "MarinaCh"
            const pw = 1234
            function verificar(){
                let usuario = document.getElementById("nombre").value
                let clave = document.getElementById("clave").value
                if(usuario == user && clave == pw){
                    alert("Login existoso")
                }else{
                    alert("Verifique los datos ingresados")
                }
            } 