import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * @constant references
 * @type {Array<{title: string, url: string}>}
 * @description Repositório de fontes bibliográficas e recursos digitais consultados.
 * Este array serve como a base de dados para a secção de referências, contendo links
 * diretos para documentações oficiais, blogs de engenharia e portais institucionais.
 */
const references = [
  { title: 'Spotify Engineering Blog', url: 'http://spotify.com' },
  { title: 'SNS 24 – Portal Digital do Governo', url: 'https://digital.gov.pt' },
  { title: 'React Native Documentation', url: 'https://reactnative.dev/' },
  { title: 'Pinterest Engineering Blog', url: 'https://medium.com/pinterest-engineering' },
  { title: 'Google Developers – PWA', url: 'https://developers.google.com/web' },
  { title: 'Mozilla Developer Network (MDN)', url: 'https://developer.mozilla.org/' }
];

/**
 * @component ReferencesScreen
 * @description Componente de interface que apresenta a bibliografia e as fontes técnicas
 * utilizadas no desenvolvimento da investigação. A funcionalidade principal permite que
 * o utilizador aceda às fontes originais através do módulo `Linking` do React Native.
 * * É uma parte fundamental do rigor académico do projeto, assegurando a rastreabilidade
 * das afirmações técnicas feitas nos estudos de caso.
 * * @returns {React.JSX.Element} Ecrã com a listagem de referências clicáveis.
 */
const ReferencesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Referências Bibliográficas</Text>
        <Text style={styles.subtitle}>Fontes consultadas para a investigação técnica:</Text>
        
        {references.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.refItem}
            onPress={() => Linking.openURL(item.url)}
          >
            <MaterialCommunityIcons name="link-variant" size={20} color="#3498db" />
            <View style={styles.textContainer}>
              <Text style={styles.refTitle}>{item.title}</Text>
              <Text style={styles.refUrl}>{item.url}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

/**
 * @constant styles
 * @type {StyleSheet}
 * @description Folha de estilos orientada à legibilidade de listas.
 * O design utiliza cartões (`refItem`) com bordas leves e fundos neutros para destacar 
 * as URLs azuis, que indicam interatividade de hiperligação.
 */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#7f8c8d', marginBottom: 20 },
  refItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee'
  },
  textContainer: { marginLeft: 12 },
  refTitle: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' },
  refUrl: { fontSize: 12, color: '#3498db', marginTop: 2 }
});

export default ReferencesScreen;