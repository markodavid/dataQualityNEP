/**
 * Created by mgarcia on 24/05/15.
 */
var Sequelize = require ("sequelize");

/*var sequelize = new Sequalize("dhis", "mgarcia", "solar123",{
    dialect:"postgres",
    storage:__dirname + "/database.db",
    define:{
        timestamps:false,
        freezeTableName:true
    }
});*/

var sequelize = new Sequelize('postgres://postgres:solar123@localhost:5433/migracion');
sequelize.authenticate().success(function(){
    console.log("baselista");
});

//mapeos de las tablas
var Evento_100 = sequelize.define("evento_100",{
    evento_100_cod_eve: Sequelize.TEXT,
    evento_100_fec_not: Sequelize.TEXT,
    evento_100_pri_nom_: Sequelize.TEXT,
    evento_100_seg_nom_: Sequelize.TEXT,
    evento_100_pri_ape_: Sequelize.TEXT,
    evento_100_seg_ape_: Sequelize.TEXT,
    evento_100_num_ide_: Sequelize.TEXT

},{
    tableName:'evento_100'
});


module.exports.Evento_100 = Evento_100;