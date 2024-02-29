import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.frase}>"Nunca espere que as pessoas reconheçam o quanto você andou, essa tarefa é sua, não delas".</Text>
      <Text style={styles.quote}>@habitosquemudam</Text>
      <Text style={styles.nome}>Maria Eduarda Costa de Araújo Vieira - RM 98760</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frase: {
    color: '#A52A2A',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  quote: {
    textAlign: 'right',
    paddingBottom: 20,
    fontSize: 12,
    fontStyle: 'italic',
  },
  nome: {
    marginTop: 20,
  }
});
