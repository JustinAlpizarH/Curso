// FUNCTION WITH STANDARD JAVASCRIPT

function ConsultarNombre() {

    document.getElementById("txtNombre").value = "";
    let identificacion = document.getElementById("txtIdentificacion").value;

    const xhttpr = new XMLHttpRequest();
    xhttpr.open('GET', 'https://apis.gometa.org/cedulas/' + identificacion, true);
    xhttpr.send();

    xhttpr.onload = ()=> {
        if (xhttpr.status === 200) {
            const response = JSON.parse(xhttpr.response);
                document.getElementById("txtNombre").value = response.nombre;
        }
    };

}

// FUNCTION WITH JQUERY
// This function is similar to the previous one but uses jQuery for the AJAX request.

function ConsultarNombre2() {

    $("#txtNombre").val("");
    let identificacion = $("#txtIdentificacion").val();

    $.ajax({
        type : 'GET',
        url :  'https://apis.gometa.org/cedulas/' + identificacion,
        dataType : 'json',
        success: function(response){
            $("#txtNombre").val(response.nombre);
        }
    });

}