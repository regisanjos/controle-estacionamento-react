import React, { useState, useEffect } from 'react';

const ListaVaga = () => {
  // Carregar as vagas do Local Storage ao montar o componente
  const [vagas, setVagas] = useState(() => {
    return JSON.parse(localStorage.getItem('vagas')) || [];
  });

  const [vagasDisponiveis, setVagasDisponiveis] = useState(() => {
    return JSON.parse(localStorage.getItem('vagasDisponiveis')) || [];
  });

  // Função para remover a vaga e atualizar o Local Storage
  const removerVaga = (index) => {
    const vagaRemovida = vagas[index];

    // Adicionar a vaga removida de volta às vagas disponíveis
    const novasVagasDisponiveis = [...vagasDisponiveis, { vaga: vagaRemovida.vaga, bloco: vagaRemovida.bloco }];
    setVagasDisponiveis(novasVagasDisponiveis);
    localStorage.setItem('vagasDisponiveis', JSON.stringify(novasVagasDisponiveis));

    // Atualizar a lista de vagas cadastradas
    const novasVagas = vagas.filter((_, i) => i !== index);
    setVagas(novasVagas);
    localStorage.setItem('vagas', JSON.stringify(novasVagas));
  };

  return (
    <div>
      <h3>Vagas Cadastradas</h3>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index}>
            <span>{vaga.nome} - {vaga.placa}</span>
            <span>Apt: {vaga.apartamento} - Bloco: {vaga.bloco}</span>
            <span>Vaga: {vaga.vaga}</span>
            <button onClick={() => removerVaga(index)} className="button-remove">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVaga;
