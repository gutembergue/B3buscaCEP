// ações de interação com a página

const el = require('./elements').ELEMENTS;

class Rastreamento {
    acessarRastreamento(){
        cy.visit('https://rastreamento.correios.com.br/app/index.php');
    }
    preencherCodRastreamento(){
        cy.get(el.codrastreamento).type('SS987654321BR');
    }

}
export default new Rastreamento();