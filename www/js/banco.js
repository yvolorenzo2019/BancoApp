$(document).on("click","#cadastrar",function(){
    var parametros = {
        "nome": $("#nome").val(),
        "email": $("#email").val()
    };

    $.ajax({
        type:"post", //como enviar
        url:"https://teste1-yvolorenzo.c9users.io/webservice/cadastra.php",//para onde enviar
        data:parametros,//o que enviar
        //se der certo
        success: function(data){
            navigator.notification.alert(data);
            $("#nome").val("");
            $("#email").val("");

        },
        //se der errado
        error: function(data){
             navigator.notification.alert(data);
        }
    });    
});

function ListarPagina(){
	location.href="lista.html";
}