import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

import './index.scss'


export default function Index() {
    return (
        <main className='page page-cadastrar'>
            <Menu />
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>
                    <section>
                        <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo Vilao</h1>

                        <div className='form-colums'>
                            <div>
                                <div className='upload-capa'>
                                    <img src="/assets/images/icon-upload.svg" alt="" />
                                </div>
                            </div>
                            <div>
                                <div className='form-row'>
                                    <label>Nome:</label>
                                    <input type='text' placeholder='Nome do Vilao' />
                                </div>
                                <div className='form-row'>
                                    <label>Maldades:</label>
                                    <input type='text' placeholder='Maldades:' />
                                </div>
                                <div className='form-row'>
                                    <label>Tem poder?:</label>
                                    <input type='checkbox' /> &nbsp; Poder?
                                </div>
                                <br />
                               
                                <div className='form-row'>
                                    <label></label>
                                    <div className='btnSalvar'>
                                        <button>SALVAR</button>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}