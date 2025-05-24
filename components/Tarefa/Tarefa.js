import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Tarefa ({ item, onConcluir, onExcluir }) {
  return (
    <View style = {styles.tarefa}>
      <Text style = {[styles.textoTarefa, item.concluido && styles.concluida]}>
        {item.texto}
      </Text>
      <View style = {styles.botoes}>
        {!item.concluido && (<TouchableOpacity style={styles.botaoConcluir} onPress={() => onConcluir(item.id)}>
            <Text style={styles.textoBotao}>Concluir</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.botaoExcluir} onPress={() => onExcluir(item.id)}>
          <Text style={styles.textoBotao}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  textoTarefa: {
    fontSize: 16
  },
  concluida: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  botoes: {
    flexDirection: 'row',
    gap: 5,
  },
   botaoConcluir: {
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  botaoExcluir: {
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 14,
  },
});