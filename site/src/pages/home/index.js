import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

import './index.scss'

export default function Index(){
    return(
        <main className='page page-home'>
            <Menu />
            <div className='container'>
                <Cabecalho/>
                
                <div className='conteudo'>
                    <img className='logo' src='' alt='logo estilizado'/>
                    <h1>PAI</h1>
                </div>
            </div>
        </main>
    )
}