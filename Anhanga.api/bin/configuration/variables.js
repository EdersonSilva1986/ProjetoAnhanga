const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        //conexão local com o mongodb instalado no pc
        connection: process.env.connection || 'mongodb://127.0.0.1:27017/AnhangaFood?gssapiServiceName=mongodb' 
        //conexão com o mongodb na nuvem através do site MongoDB.Atlas
        //connection: process.env.connection || 'mongodb+srv://mnihouze_usr_app:app753951@cluster0-g9gen.mongodb.net/AnhangaFood?retryWrites=true'
    }
}
module.exports = variables;

