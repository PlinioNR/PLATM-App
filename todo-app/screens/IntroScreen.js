import React from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * @component IntroScreen
 * @description Ecrã de introdução e enquadramento teórico do relatório técnico.
 * Este componente estabelece o contexto histórico sobre a evolução dos dispositivos móveis
 * e apresenta a problemática central: a escolha estratégica entre diferentes arquiteturas de software.
 * * Design: Utiliza um cabeçalho com gradiente linear e elementos visuais (cards e info-boxes)
 * para garantir uma leitura fluida e profissional, condizente com um projeto académico de engenharia/TI.
 * * @returns {React.JSX.Element} O ecrã de introdução com o resumo executivo inicial.
 */
const IntroScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A237E" />
      
      <LinearGradient
        colors={['#1A237E', '#283593', '#3949AB']}
        style={styles.header}
      >
        <MaterialCommunityIcons name="cellphone-link" size={60} color="#fff" />
        <Text style={styles.headerTitle}>Relatório Técnico</Text>
        <Text style={styles.headerSubtitle}>Arquiteturas Móveis e Tecnologias</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.paragraph}>
            Nas últimas décadas, assistimos a uma evolução sem precedentes no hardware e software dos dispositivos móveis. As aplicações tornaram-se o pilar central da transformação digital.
          </Text>
          <Text style={styles.paragraph}>
            Este relatório investiga as diversas arquiteturas de desenvolvimento — de Nativas a PWAs — e como as decisões tecnológicas impactam o sucesso estratégico das empresas.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="#1A237E" />
          <Text style={styles.infoText}>
            A escolha da arquitetura certa define o equilíbrio entre custo, performance e alcance de mercado.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

/**
 * @constant styles
 * @type {StyleSheet}
 * @description Conjunto de estilos que implementam a identidade visual do relatório.
 * Inclui configurações para o `LinearGradient`, sombras (elevation/shadow) para destacar 
 * informações críticas e layouts responsivos baseados em Flexbox.
 */
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F7FA' 
  },
  header: { 
    paddingTop: 60, 
    paddingBottom: 40, 
    alignItems: 'center', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
    marginBottom: 10, 
  },
  content: { 
    padding: 20,
    paddingBottom: 40, 
  },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  headerSubtitle: { color: '#90CAF9', fontSize: 14 },
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