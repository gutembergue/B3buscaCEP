// ações de interação com a página

const el = require('./elements').ELEMENTS;

class Buscacep{
    acessarBuscacep(){
        cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php');
    }

    preencherCepinexistente(){
        cy.get(el.cep).type('80700000');
        cy.get(el.btnbuscar).click();
        cy.get(el.msgnencontrado).contains('Dados não encontrado');
    }

    preencherCepexistente(){
        cy.get(el.cep).type('01013-001');
        cy.get(el.btnbuscar).click();
        cy.get(el.logradouro).contains('Rua Quinze de Novembro - lado ímpar');
        cy.get(el.cidade).contains('São Paulo/SP'); 
    }

}

export default new Buscacep();