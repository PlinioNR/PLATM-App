import React from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Importação nova

const IntroScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Configura os ícones do sistema (bateria, wifi) para branco */}
      <StatusBar barStyle="light-content" backgroundColor="#1A237E" />
      
      <LinearGradient
        colors={['#1A237E', '#283593', '#3949AB']} // Tons de azul em gradiente
        style={styles.header}
      >
        <MaterialCommunityIcons name="cellphone-link" size={60} color="#fff" />
        <Text style={styles.headerTitle}>Relatório Técnico</Text>
        <Text style={styles.headerSubtitle}>Arquiteturas Móveis e Tecnologias</Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* ... resto do conteúdo igual ao anterior ... */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { 
    backgroundColor: '#1A237E', 
    padding: 40, 
    alignItems: 'center', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  headerSubtitle: { color: '#90CAF9', fontSize: 14 },
  content: { padding: 20 },
  card: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 15, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 10 
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1A237E', marginBottom: 15 },
  paragraph: { fontSize: 15, color: '#37474F', lineHeight: 24, marginBottom: 15, textAlign: 'justify' },
  infoBox: { 
    flexDirection: 'row', 
    backgroundColor: '#E3F2FD', 
    padding: 15, 
    borderRadius: 12, 
    marginTop: 20, 
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#2196F3'
  },
  infoText: { flex: 1, marginLeft: 10, color: '#1A237E', fontSize: 14, fontStyle: 'italic' }
});

export default IntroScreen;