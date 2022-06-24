import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

import './index.scss'


export default function Index() {
    return (
        <main className='page page-consultar'>
            <Menu />
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome' />
                        <img src='/assets/images/icon-buscar.svg' alt='buscar' />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>NOME</th>
                                <th>MALDADES</th>
                                <th>PODER</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#01</td>
                                <td>NEGAN</td>
                                <td>Matou o Glenn</td>
                                <td>NAO</td>
            
                                <td>
                                    <img src='' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='' />
                                </td>
                            </tr>
                            <tr>
                                <td>#02</td>
                                <td>MALEVOLA</td>
                                <td>Deu sonifero para a Bela</td>
                                <td>Sim</td>
                                <td>
                                    <img src='' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='' />
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </main>
    )
}