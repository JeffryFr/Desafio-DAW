//Se crea el objeto Libro
//Se registra el evento click del boton de ingresar
function Iniciar(){
    var btnIngresar = document.getElementById("ingresar");

    if(btnIngresar.addEventListener){
        btnIngresar.addEventListener("click", function(){
            var addLibro;
            //var img = document.forms.image.setFieldImage;
            addLibro = new Libro(document.frmforms.libroid.value, document.frmforms.titulo.value, document.frmforms.autorname.value, document.frmforms.autorlast.value, document.frmforms.categoria.value, document.frmforms.precio.value);
            addLibro.mostrar();
        }, false);
    }else if(btnIngresar.attachEvent){
        btnIngresar.addEventListener("onclick", function(){
            var addLibro;
            var img = document.forms.image.setFieldImage;
            addLibro = new Libro(document.frmforms.libroid.value, document.frmforms.titulo.value, document.frmforms.autorname.value, document.frmforms.autorlast.value, document.frmforms.categoria.value, document.frmforms.precio.value);
            addLibro.mostrar();
        });
    }
}

var datos = new Array(14);
datos["id"] = [];
datos["titulo"] = [];
datos["nombre"] = [];
datos["apellido"] = [];
datos["categoria"] = [];
datos["precio"] = [];


function Libro(libroid, titulo, nombre, apellido, categoria, precio){
    //propiedades del objeto
    this.ids = libroid;
    this.titulo = titulo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.categoria = categoria;
    this.precio = precio;
    //libro.img = img;

    this.mostrar = function(){
        var info = document.getElementById("infoLibros");

        datos.id.push(libroid);
        datos.titulo.push(titulo);
        datos.nombre.push(nombre);
        datos.apellido.push(apellido);
        datos.categoria.push(categoria);
        datos.precio.push(precio);

        var tblBook = "";
        tblBook += "<table class=\"bookinfo\">\n";
        tblBook += "<thead>\n\t<tr>\n";
        tblBook += "\t\t<th>Id</th>\n";
        tblBook += "\t\t<th>Titulo</th>\n";
        tblBook += "\t\t<th>Nombre</th>\n";
        tblBook += "\t\t<th>Apellido</th>\n";
        tblBook += "\t\t<th>categoria</th>\n";
        tblBook += "\t\t<th>precio</th>\n";
        tblBook += "\t</tr>\n</thead>\n";
        tblBook += "<tbody>\n";
        for(i=0;i<datos.length + 1;i++){
            if(datos.id[i] == undefined){
                continue;
            }
            tblBook += "\t<tr>\n";
            tblBook += "\t\t<td>" + datos.id[i] + "</td>\n";
            tblBook += "\t\t<td>" + datos.titulo[i] + "</td>\n";
            tblBook += "\t\t<td>" + datos.nombre[i] + "</td>\n";
            tblBook += "\t\t<td>" + datos.apellido[i] + "</td>\n";
            tblBook += "\t\t<td>" + datos.categoria[i] + "</td>\n";
            tblBook += "\t\t<td>" + datos.precio[i] + "</td>\n\t\t</tr>";
        }
        //tblBook += "\t\t<td>" + libro.img + "</td>\n";
        tblBook += "\n</tbody>\n";
        tblBook += "</table>\n";
        info.innerHTML = tblBook;
    }
}

//Función que manejara el evento al cargar la página
if(window.addEventListener){
    window.addEventListener("load", Iniciar, false);
}else if(window.attachEvent){
    window.attachEvent("onload", Iniciar);
}