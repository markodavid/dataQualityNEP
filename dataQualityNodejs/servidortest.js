/**
 * Created by mgarcia on 24/05/15.
 */
var express = require("express");
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser());

nunjucks.configure(__dirname + "/vistas", {
    express:app
});

//REQUERIMOS MODULOS

var modelos = require("./modelos/principaltest.js")

console.log(modelos.PRUEBA);

app.listen(8080);

app.get("/articulo",function(req,res){
    //req= request
    //res=response
    res.render("articulo.html");
});

app.get("/usuario", function(req,res){
    //req= request
    //res=response
    res.render("usuario.html");
});

app.get("/blog", function(req,res){
    //req= request
    //res=response
    res.render("blog.html");
});


app.get("/editar", function(req,res){
    //req= request
    //res=response
    res.render("editar_reglas.html");
});

app.get("/consultar", function(req,res){
    //req= request
    //res=response
    modelos.Evento_100.sequelize.query("select * from evento_100").success(function(registros){
        res.render("consultar_reglas.html",{
            registros:registros
        } );


    });
});

app.get("/inicio", function(req,res){
    //req= request
    //res=response

        res.render("consultar_reglas.html" );

});

/*app.get("/guardarError/:codEvento[0-200]+)/editar", function(req,res){
    //req= request
    //res=response
    var codigoId=req.params.evento_100_cod_eve;
    modelos.Evento_100.find(codigoId).success(function(codigo){
        res.render("editar_reglas.html",{
            codigo:codigo
        });
    });


    });
*/
/*
app.post("/guardarError",function(req,res){

    var codigo=req.body.codigo;
    var fecha=req.body.fecha_creacion;
    res.send("Codigo:"+ codigo);
});*/

   // modelos.Evento_100.query("select * from 'evento_100'",{ type:).success(function(error1){
     //   console.log("Se encontro error:" + error1.evento_100_cod_eve);
       // res.rende("consultar_reglas.html", {
        //errorPrincipal:error1
      //   });
   // });

//});