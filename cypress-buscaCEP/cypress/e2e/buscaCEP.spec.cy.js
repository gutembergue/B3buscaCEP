/// <reference types="cypress" />
import Buscacep from '../support/pages/buscacep';

describe('Busca CEP correios', () => {
    it('validar CEP inexistente', () => {
        Buscacep.acessarBuscacep();
        Buscacep.preencherCepinexistente();
     
    });

    it('validar CEP existente', () => {
        Buscacep.acessarBuscacep();
        Buscacep.preencherCepexistente();
     
    });
});                                                                                                                                                                  