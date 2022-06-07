import {con} from './connection.js'

export async function adcionarVilao (vilao){
    const comando = 
    `insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poder )
    values(?,?, ?);`

    const [resposta] = await con.query(comando,[vilao.nome,vilao.maldades,vilao.poder])
    return resposta
}