import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * @component GoalsScreen
 * @description Componente informativo que estabelece o âmbito e a direção do projeto de investigação.
 * Este ecrã apresenta o Objetivo Geral e os Objetivos Específicos (Seção 2.1), servindo como
 * referencial teórico para o utilizador compreender o propósito da análise comparativa entre
 * as diferentes arquiteturas móveis.
 * * Estruturalmente, utiliza uma lista vertical de itens com ícones semânticos para facilitar a
 * leitura e retenção dos pontos-chave da investigação.
 * * @returns {React.JSX.Element} A renderização dos objetivos do projeto.
 */
const GoalsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.paragraph}>
          O objetivo geral deste projeto é realizar uma investigação aprofundada sobre as diversas arquiteturas de desenvolvimento de aplicações móveis e as tecnologias subjacentes. Isto visa fornecer uma base de conhecimento para a tomada de decisões informadas no desenvolvimento de software móvel.
        </Text>

        <Text style={styles.subtitle}>2.1 Objetivos Específicos</Text>
        
        <View style={styles.goalItem}>
          <MaterialCommunityIcons name="magnify" size={24} color="#3498db" />
          <Text style={styles.goalText}>
            <Text style={styles.boldText}>Análise de Casos Práticos: </Text>
            Investigar e analisar casos reais para cada um dos seis tipos de arquitetura estudados.
          </Text>
        </View>

        <View style={styles.goalItem}>
          <MaterialCommunityIcons name="gavel" size={24} color="#3498db" />
          <Text style={styles.goalText}>
            <Text style={styles.boldText}>Julgamento de Decisão: </Text>
            Avaliar a decisão estratégica e empresarial tomada pelas equipas de desenvolvimento.
          </Text>
        </View>

        <View style={styles.goalItem}>
          <MaterialCommunityIcons name="file-document-outline" size={24} color="#3498db" />
          <Text style={styles.goalText}>
            <Text style={styles.boldText}>Fundamentação Técnica: </Text>
            Analisar as vantagens e desvantagens de cada tecnologia escolhida.
          </Text>
        </View>

        <View style={styles.goalItem}>
          <MaterialCommunityIcons name="comment-check-outline" size={24} color="#3498db" />
          <Text style={styles.goalText}>
            <Text style={styles.boldText}>Opinião Crítica: </Text>
            Propor melhorias ou alternativas justificadas para cada cenário analisado.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

/**
 * @constant styles
 * @type {StyleSheet}
 * @description Definições de estilo para a apresentação textual dos objetivos.
 * Utiliza um esquema de cores sóbrio (tons de azul e cinza) para manter o foco na legibilidade
 * do conteúdo académico. Os blocos de objetivos (`goalItem`) possuem fundo destacado para
 * criar hierarquia visual.
 */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', marginBottom: 15 },
  subtitle: { fontSize: 18, fontWeight: 'bold', color: '#2980b9', marginTop: 20, marginBottom: 15 },
  paragraph: { fontSize: 16, lineHeight: 24, color: '#34495e', marginBottom: 20, textAlign: 'justify' },
  goalItem: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    backgroundColor: '#f1f8ff', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 10 
  },
  goalText: { flex: 1, fontSize: 15, color: '#2c3e50', marginLeft: 10, lineHeight: 22 },
  boldText: { fontWeight: 'bold' }
});

export default GoalsScreen;