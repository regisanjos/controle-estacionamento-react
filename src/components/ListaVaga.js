import React from 'react';

const ListaVaga = () => {
  const vagas = [
    { placa: 'AAA-1234', nome: 'Geromel', apartamento: '101', bloco: 'A', vaga: '12A' },
    { placa: 'BBB-5678', nome: 'Felipe', apartamento: '202', bloco: 'B', vaga: '15B' }
  ];

  return (
    <div>
      <h3>Vagas Cadastradas</h3>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index}>
            <span>{vaga.nome} - {vaga.placa}</span>
            <span>Apt: {vaga.apartamento} - Bloco: {vaga.bloco}</span>
            <span>Vaga: {vaga.vaga}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVaga;
