const {
    Pokemons, Sequelize
} = require('../models/')
const Op = Sequelize.Op
class PokemonController {
    async getAll(req, res) {

        try {
            const todosPokemons = await Pokemons.findAll()
            return res.status(200).json(todosPokemons)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async getOne(req, res) {
        const { id } = req.params
        try {
            const umPokemons = await Pokemons.findOne( { 
                where:{
                    id: Number(id)
                }
            } )
            return res.status(200).json(umPokemons)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async insert(req, res) {

        try {
            const novoPokemon = await Pokemons.create(req.body)
            return res.status(200).json(novoPokemon)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async delete(req, res) {
        try {
            const alvo = await Pokemons.findByPk(req.params.id)
            if (alvo) {
                await alvo.destroy()
                return res.status(204).json(alvo)
            } else {
                return res.status(400).json({
                    mensagem: "Pokemon não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async update(req, res) {
        try {
            const alvo = await Pokemons.findByPk(req.params.id)
            if (alvo) {
                await alvo.update(req.body)
                return res.status(204).json(alvo)
            } else {
                return res.status(400).json({
                    mensagem: "Pokemon não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async getAllByName(req, res) {
        let nome = '%'+req.query.nome
        try {
            const pokemon = await Pokemons.findAll({
                where:{
                    nome: {
                        [Op.like]: nome
                    }
                }
            })
            return res.status(200).json(pokemon)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
}

module.exports = new PokemonController()