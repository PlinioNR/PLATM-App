import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * @constant architectures
 * @type {Array<{id: string, type: string, icon: string, color: string}>}
 * @description Estrutura de dados estática que define a taxonomia das arquiteturas móveis analisadas.
 * Serve como fonte de verdade (source of truth) para a geração dinâmica do menu de navegação,
 * associando cada tipo de desenvolvimento ao seu identificador visual (ícone) e metadados.
 */
const architectures = [
  { id: '1', type: 'Nativas', icon: 'android', color: '#1A237E' }, // Ícone corrigido
  { id: '2', type: 'Híbridas Trad.', icon: 'layers-outline', color: '#1A237E' },
  { id: '3', type: 'Cross-Compiled', icon: 'infinity', color: '#1A237E' },
  { id: '4', type: 'Web Native', icon: 'web', color: '#1A237E' },
  { id: '5', type: 'Web', icon: 'google-chrome', color: '#1A237E' },
  { id: '6', type: 'PWA', icon: 'lightning-bolt', color: '#1A237E' },
];

/**
 * @component DevGridScreen
 * @description Ecrã de navegação principal (Dashboard) da aplicação.
 * Este componente implementa um padrão de interface "Launchpad", apresentando as opções de estudo
 * numa disposição em grelha (Grid Layout). O objetivo é oferecer um ponto de acesso centralizado
 * e intuitivo para os diferentes módulos da investigação.
 * * @param {object} props - Propriedades do componente.
 * @param {object} props.navigation - Objeto de navegação injetado pelo React Navigation stack, 
 * utilizado para transitar para o ecrã de detalhes ('Details').
 * @returns {React.JSX.Element} A interface de seleção de arquiteturas.
 */
const DevGridScreen = ({ navigation }) => {
  
  /**
   * @function renderItem
   * @description Função de renderização para cada item da FlatList.
   * Cria um componente tocável (TouchableOpacity) que encapsula o ícone e o rótulo da arquitetura.
   * @param {object} listObj - Objeto passado pela FlatList.
   * @param {object} listObj.item - O item de dados individual da array `architectures`.
   */
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.gridItem} 
      onPress={() => navigation.navigate('Details', { type: item.type })}
    >
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={item.icon} size={40} color="#2196F3" />
      </View>
      <Text style={styles.itemText}>{item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Selecione uma arquitetura para ver a análise técnica:</Text>
      <FlatList
        data={architectures}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

/**
 * @constant styles
 * @type {StyleSheet}
 * @description Folha de estilos que define o layout da grelha.
 * Destaca-se o uso de `elevation` e `shadow` para criar profundidade visual (Material Design guidelines),
 * sugerindo interatividade nos botões da grelha.
 */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1A237E', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#546E7A', marginBottom: 20 },
  list: { paddingBottom: 20 },
  gridItem: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    height: 140,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 50,
    marginBottom: 10
  },
  itemText: { fontSize: 14, fontWeight: 'bold', color: '#1A237E', textAlign: 'center' }
});

export default DevGridScreen;