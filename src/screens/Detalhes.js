import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes() {
  const item = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text>{item.descricao}</Text>
      <Text>Status: {item.concluido === "true" ? "Ativo" : "Inativo"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold' }
});