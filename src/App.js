import React from "react";
import ListaProdutos from "./ListaProdutos"; // Componente para listar produtos
import Mensagens from "./Mensagens";         // Componente para teste com mensagens (opcional)
// src/App.js
import React, { useState } from 'react';

// Importa os componentes criados
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

// Exemplo de produtos para passar ao ProductCard (substitua pelo seu fetch real!)
const produtosExemplo = [
  { sabor: 'Pizza Calabresa', tipo: 'pizza', preco: 40 },
  { sabor: 'Pastel de Carne', tipo: 'pastel', preco: 8 },
  { sabor: 'Coca-cola', tipo: 'bebida', preco: 6 }
];

function App() {
  // Controle para alternar dark/light mode da Sidebar (exemplo)
  const [isDarkSidebar, setIsDarkSidebar] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* SIDEBAR - fixo à esquerda */}
      <Sidebar isDark={isDarkSidebar} />

      {/* CONTEÚDO PRINCIPAL */}
      <main style={{ flex: 1 }}>
        <Navbar />

        {/* Botão para mudar tema do sidebar */}
        <button onClick={() => setIsDarkSidebar(!isDarkSidebar)}>
          Alternar Tema Sidebar
        </button>

        {/* Renderiza lista de cards de produtos - troque pelo seu map real */}
        <div style={{ display: 'flex' }}>
          {produtosExemplo.map((produto, i) => (
            <ProductCard produto={produto} key={i} />
          ))}
        </div>

        {/* Adicione outros componentes ou páginas aqui */}
      </main>
    </div>
  );
}
function App() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Sistema da Pizzaria</h1>
      <ListaProdutos />
      {/* Descomente a linha abaixo se quiser mostrar mensagens/teste */}
      {/* <Mensagens /> */}
    </div>
  );
}

export default App;
