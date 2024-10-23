import React, { useState, useEffect } from 'react';

const VagasDisponiveis = () => {
  const [vagasDisponiveis, setVagasDisponiveis] = useState([]);

  useEffect(() => {
    const vagasIniciais = [
      { vaga: '1A', bloco: 'A' },
      { vaga: '2B', bloco: 'B' },
      { vaga: '3C', bloco: 'C' },
      { vaga: '4D', bloco: 'D' },
      { vaga: '5E', bloco: 'E' }
    ];

    const vagasSalvas = JSON.parse(localStorage.getItem('vagasDisponiveis'));
    
    if (!vagasSalvas) {
      localStorage.setItem('vagasDisponiveis', JSON.stringify(vagasIniciais));
      setVagasDisponiveis(vagasIniciais);
    } else {
      setVagasDisponiveis(vagasSalvas);
    }
  }, []);

  return (
    <div>
      <h3>Vagas Disponíveis</h3>
      <ul>
        {vagasDisponiveis.length > 0 ? (
          vagasDisponiveis.map((vaga, index) => (
            <li key={index} className="vaga-disponivel">
              <span>Vaga: {vaga.vaga}</span>
              <span>Bloco: {vaga.bloco}</span>
            </li>
          ))
        ) : (
          <li>Nenhuma vaga disponível no momento.</li>
        )}
      </ul>
    </div>
  );
};

export default VagasDisponiveis;
