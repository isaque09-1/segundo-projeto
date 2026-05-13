import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Detalhes({ item, aoVoltar, aoAlternarStatus }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      
      <Text style={styles.status}>
        Status atual: {item.concluido ? "✅ Concluído" : "❌ Pendente"}
      </Text>
      
      <View style={styles.acoesContainer}>
        {/* Botão para mudar o status de concluído/pendente */}
        <View style={styles.espacoBotao}>
          <Button 
            title={item.concluido ? "Marcar como Pendente" : "Marcar como Concluído"} 
            onPress={aoAlternarStatus} 
            color={item.concluido ? "#FF3B30" : "#34C759"} 
          />
        </View>

        {/* Botão para voltar para a lista */}
        <View style={styles.espacoBotao}>
          <Button title="Voltar para Lista" onPress={aoVoltar} color="#007AFF" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  descricao: { fontSize: 18, color: '#666', marginBottom: 20, textAlign: 'center' },
  status: { fontSize: 16, fontWeight: '600', marginBottom: 40, textAlign: 'center' },
  acoesContainer: { width: '100%', paddingHorizontal: 20 },
  espacoBotao: { marginBottom: 15 }
});
