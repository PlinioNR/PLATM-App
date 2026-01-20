import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const architectures = [
  { id: '1', type: 'Nativas', icon: 'android', color: '#1A237E' }, // Ícone corrigido
  { id: '2', type: 'Híbridas Trad.', icon: 'layers-outline', color: '#1A237E' },
  { id: '3', type: 'Cross-Compiled', icon: 'infinity', color: '#1A237E' },
  { id: '4', type: 'Web Native', icon: 'web', color: '#1A237E' },
  { id: '5', type: 'Web', icon: 'google-chrome', color: '#1A237E' },
  { id: '6', type: 'PWA', icon: 'lightning-bolt', color: '#1A237E' },
];

const DevGridScreen = ({ navigation }) => {
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