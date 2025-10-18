import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import dados from "./produtos.json";

// Função para importar todos os produtos do JSON na coleção "produtos"
async function importarProdutos() {
  for (const produto of dados) {
    await addDoc(collection(db, "produtos"), produto);
  }
  alert("Importação concluída!");
}

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  // Busca todos os produtos cadastrados no banco ao montar o componente
  const carregarProdutos = async () => {
    const querySnapshot = await getDocs(collection(db, "produtos"));
    const lista = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setProdutos(lista);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div>
      <h2>Produtos cadastrados no sistema</h2>
      <button onClick={importarProdutos}>Importar produtos do JSON</button>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <strong>{produto.sabor || produto.nome}</strong> — 
            Tipo: {produto.tipo} — 
            Preço: {produto.preco 
              ? `R$ ${produto.preco.toFixed(2)}` 
              : produto.tamanhos 
                ? produto.tamanhos.map(t => `${t.pedaços} pedaços: R$ ${t.preco.toFixed(2)}`).join(", ")
                : "sem preço"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProdutos;
