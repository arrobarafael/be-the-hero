// const params = request.query;
// const params = request.params; route params
// const params = request.body;
// const data = request.body;
const generetaUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
        const id = generetaUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({id});
    }
}