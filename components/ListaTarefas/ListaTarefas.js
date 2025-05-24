import { FlatList } from 'react-native';
import Tarefa from '../Tarefa/Tarefa';

export default function ListaTarefas ({ tarefas, onConcluir, onExcluir }) {
  return (
    <FlatList
      data = {tarefas}
      keyExtractor = {(item) => item.id.toString()}
      renderItem = {({ item }) => 
      (<Tarefa item = {item} onConcluir = {onConcluir} onExcluir={onExcluir} />)}
      />
  );
}