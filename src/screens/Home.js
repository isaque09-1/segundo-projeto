import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { DADOS_MOCK } from '../mocks/dados'; 

export default function Home() {
  const [lista, setLista] = useState(DADOS_MOCK);

  const alternarStatus = (id) => { 
    const novaLista = lista.map(item => 
      item.id === id ? { ...item, concluido: !item.concluido } : item
    );
    setLista(novaLista);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, item.concluido ? styles.cardAtivo : styles.cardInativo]}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => alternarStatus(item.id)}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text>{item.concluido ? "✅ Ativado" : "❌ Desativado"}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  card: { padding: 15, marginBottom: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#eee' },
  cardAtivo: { backgroundColor: '#e2f9e1' },
  cardInativo: { backgroundColor: '#f9e2e2' },
  titulo: { fontWeight: 'bold', fontSize: 16 }
});
