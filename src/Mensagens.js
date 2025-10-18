import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

function Mensagens() {
  const [mensagens, setMensagens] = useState([]);

  const adicionarMensagem = async () => {
    await addDoc(collection(db, "mensagens"), {
      texto: "Olá, pizzaria! " + new Date().toLocaleString(),
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "mensagens"),
      (snapshot) => {
        const msgs = snapshot.docs.map(doc => doc.data().texto);
        setMensagens(msgs);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Teste Firebase - Pizzaria</h2>
      <button onClick={adicionarMensagem}>Adicionar mensagem de teste</button>
      <ul>
        {mensagens.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mensagens;
