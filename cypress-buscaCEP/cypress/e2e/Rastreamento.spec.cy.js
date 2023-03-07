/// <reference types="cypress" />
import Rastreamento from "../support/pages/rastreamento";

describe('Rastreamento correios', () => {
    it('validar Código de rastreamento', () => {
        Rastreamento.acessarRastreamento();
        Rastreamento.preencherCodRastreamento();
      //Exite um captcha impedindo prosseguir a consulta de forma robótica.
       

    });


});                                                                                                                                                                  