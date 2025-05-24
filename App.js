import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ListaTarefas from './components/ListaTarefas/ListaTarefas';

import { db } from './firebaseConfig';
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  doc,
  query,
  orderBy
} from 'firebase/firestore';

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasRef = collection(db, 'tarefas');
    const q = query(tarefasRef, orderBy('created', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dados = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setTarefas(dados);
    });

    return () => unsubscribe();
  }, []);

  const adicionarTarefa = async () => {
    if (novaTarefa === '') return;

    await addDoc(collection(db, 'tarefas'), {
      texto: novaTarefa,
      concluido: false,
      created: new Date()
    });

    setNovaTarefa('');
  };

  const marcarComoConcluida = async (id) => {
    const tarefaRef = doc(db, 'tarefas', id);
    await updateDoc(tarefaRef, { concluido: true });
  };

  const excluirTarefa = async (id) => {
    const tarefaRef = doc(db, 'tarefas', id);
    await deleteDoc(tarefaRef);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        value={novaTarefa}
        onChangeText={setNovaTarefa}
      />

      <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
        <Text style={styles.botaoTexto}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <ListaTarefas
        tarefas={tarefas}
        onConcluir={marcarComoConcluida}
        onExcluir={excluirTarefa}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
  },
});
