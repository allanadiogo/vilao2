import {Router} from 'express'
import {adcionarVilao} from '../repository/vilaoRepository.js'

const server = Router();

server.post ('/vilao', async (req,resp) => {
    try 
    {
        const vilao = req.body;
        const inserirVilao = await adcionarVilao(vilao)
        resp.send(inserirVilao)
    } catch (err) {
        resp.send({
            erro:err.message
        })
        
    }
})

export default server