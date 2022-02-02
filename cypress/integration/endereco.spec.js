/// <reference types ="cypress"/>

import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
const dadosEndereco_entrega = require('../fixtures/endereco_entrega.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() =>{
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
       
    });
    it('Deve fazer cadastro de faturamente com sucesso', () => {
       EnderecoPage.editarEnderecoFaturamento('Alisson', 'Ferreira' , 'Google' , 'Brasil' ,'Av. Brasil' , '3100' ,'São Paulo' ,' São Paulo' , '01000100' ,'1199999999' ,'alisson@gmail.com' )
       cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
       
    });
 
    it('Deve fazer cadastro de faturamente com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
    
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
        
     });

     it('Deve fazer cadastro de entrega com sucesso' , () => {
         EnderecoPage.editarEnderecoEntrega('Hugo', ' Souza' , 'Facebook' , 'Brasil', 'Av Senador Afonso Pena', 'Av Juscelino Kubitschek', 'Belo Horizonte', 'Minas Gerais','03000200' )
         cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')

     })

     it('Deve fazer cadastro de entrega com sucesso - Usando arquivo de dados' , () => {
        EnderecoPage.editarEnderecoEntrega(
             dadosEndereco_entrega[2].nome,
             dadosEndereco_entrega[2].sobrenome,
             dadosEndereco_entrega[2].empresa,
             dadosEndereco_entrega[2].pais,
             dadosEndereco_entrega[2].endereco1,
             dadosEndereco_entrega[2].endereco2,
             dadosEndereco_entrega[2].cidade,
             dadosEndereco_entrega[2].estado,
             dadosEndereco_entrega[2].cep
        )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')

    })
});