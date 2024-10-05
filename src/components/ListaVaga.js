import React from 'react';

const ListaVaga = () => {
  const vagas = [
    { placa: 'AAA-1234', nome: 'João', vaga: '12A' },
    { placa: 'BBB-5678', nome: 'Maria', vaga: '15B' }
  ];

  return (
    <div>
      <h2>Vagas Cadastradas</h2>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index}>
            {vaga.nome} - {vaga.placa} - Vaga: {vaga.vaga}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVaga;
