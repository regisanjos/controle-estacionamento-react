import React, { useState, useEffect } from 'react';

const CadastroVaga = () => {
  const [formData, setFormData] = useState({
    nome: '',
    apartamento: '',
    bloco: '',
    placa: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const [vagasDisponiveis, setVagasDisponiveis] = useState(() => {
    return JSON.parse(localStorage.getItem('vagasDisponiveis')) || [
      { vaga: '1A', bloco: 'A' },
      { vaga: '2B', bloco: 'B' },
      { vaga: '3C', bloco: 'C' },
      { vaga: '4D', bloco: 'D' },
      { vaga: '5E', bloco: 'E' }
    ];
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const vagaSelecionada = vagasDisponiveis.find(vaga => vaga.vaga === formData.vaga);
    
    if (!vagaSelecionada) {
      alert('Essa vaga já foi cadastrada ou não está disponível!');
      return;
    }

  
    const vagasExistentes = JSON.parse(localStorage.getItem('vagas')) || [];
    const novasVagas = [...vagasExistentes, formData];
    localStorage.setItem('vagas', JSON.stringify(novasVagas));

 
    const novasVagasDisponiveis = vagasDisponiveis.filter(vaga => vaga.vaga !== formData.vaga);
    setVagasDisponiveis(novasVagasDisponiveis);
    localStorage.setItem('vagasDisponiveis', JSON.stringify(novasVagasDisponiveis));

   
    setFormData({
      nome: '',
      apartamento: '',
      bloco: '',
      placa: '',
      modelo: '',
      cor: '',
      vaga: ''
    });
    alert('Vaga cadastrada com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome do proprietário:</label>
      <input name="nome" value={formData.nome} onChange={handleChange} required />
      
      <label>Apartamento:</label>
      <input name="apartamento" value={formData.apartamento} onChange={handleChange} required />
      
      <label>Bloco:</label>
      <input name="bloco" value={formData.bloco} onChange={handleChange} required />


      <label>Placa do veículo:</label>
      <input name="placa" value={formData.placa} onChange={handleChange} required />

      <label>Modelo:</label>
      <input name="modelo" value={formData.modelo} onChange={handleChange} required />

      <label>Cor:</label>
      <input name="cor" value={formData.cor} onChange={handleChange} required />

      <label>Vaga:</label>
      <select name="vaga" value={formData.vaga} onChange={handleChange} required>
        <option value="">Selecione uma vaga</option>
        {vagasDisponiveis.map((vaga, index) => (
          <option key={index} value={vaga.vaga}>{vaga.vaga} - Bloco: {vaga.bloco}</option>
        ))}
      </select>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroVaga;
