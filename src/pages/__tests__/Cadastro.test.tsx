import { Cadastro } from '../Cadastro';

import { render } from '@testing-library/react'

const makeSut = () => {
  return render(
    <Cadastro />
  );
}

describe('Cadastro Page', () => {
  beforeEach(jest.clearAllMocks);
  beforeEach(makeSut);

  it('deve preencher todos os campos para submeter o form', () => {});

  it('deve validar o formato de e-mail no cadastro', () => {});

  it('deve validar os critérios de aceitação da senha', () => {
    // senha deve ter 8 dígitos ou mais
    // senha deve ter letra maiuscula
    // senha deve ter letra minúscula
    // senha deve ter números
    // senha deve ter caracteres especiais
  });

  it('deve garantir que senha e confirmação sejam iguais', () => {});

  it('deve enviar o formulário se todos os dados estiverem preenchidos corretamente', () => {});

  it('deve notificar o usuário que o cadastro foi efetuado com sucesso', () => {});

  it('deve apresentar os erros de validação para o usuário, caso a API retorne erro', () => {});
});
