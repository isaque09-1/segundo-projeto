import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DADOS_MOCK } from '../mocks/dados'; // Ajustado para buscar da pasta mocks dentro de src
import Detalhes from './Detalhes';

export default function Home() {
  const [lista, setLista] = useState(DADOS_MOCK);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const alternarStatus = (id) => {
    const novaLista = lista.map(item =>
      item.id === id ? { ...item, concluido: !item.concluido } : item
    );
    setLista(novaLista);


    if (itemSelecionado && itemSelecionado.id === id) {
      const itemAtualizado = novaLista.find(item => item.id === id);
      setItemSelecionado(itemAtualizado);
    }
  };

  if (itemSelecionado) {
    return (
      <Detalhes 
        item={itemSelecionado} 
        aoVoltar={() => setItemSelecionado(null)} 
        aoAlternarStatus={() => alternarStatus(itemSelecionado.id)} 
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaConteudo} 
        renderItem={({ item }) => (
          <View style={[styles.card, item.concluido ? styles.cardAtivo : styles.cardInativo]}>
            <TouchableOpacity 
              style={{ flex: 1 }} 
              onPress={() => setItemSelecionado(item)}
            >
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text>{item.concluido ? "✅ Concluído" : "❌ Pendente"}</Text>
            </TouchableOpacity>

            {/* Botão rápido na lista para alternar o status sem precisar entrar nos detalhes */}
            <TouchableOpacity 
              style={styles.botaoStatusRapido} 
              onPress={() => alternarStatus(item.id)}
            >
              <Text style={styles.textoBotaoIcone}>{item.concluido ? "✔️" : "❌"}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  listaConteudo: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20 },
  card: { 
    padding: 15, 
    marginBottom: 20, 
    borderRadius: 8, 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#eee',
    justifyContent: 'space-between'
  },
  cardAtivo: { backgroundColor: '#e2f9e1' },
  cardInativo: { backgroundColor: '#f9e2e2' },
  titulo: { fontWeight: 'bold', fontSize: 16 },
  botaoStatusRapido: { padding: 10, backgroundColor: '#fff', borderRadius: 6, borderWidth: 1, borderColor: '#ccc' },
  textoBotaoIcone: { fontSize: 16 }
});