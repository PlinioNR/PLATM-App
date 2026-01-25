import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * @component ConclusionScreen
 * @description Componente de interface funcional que apresenta as conclusões finais de uma 
 * investigação sobre arquiteturas de desenvolvimento móvel. O ecrã sintetiza as escolhas 
 * tecnológicas baseadas em desempenho, custo e acessibilidade, utilizando uma abordagem 
 * comparativa entre soluções Nativas, Híbridas e Web Apps.
 * * @returns {React.JSX.Element} Renderiza uma ScrollView com o resumo executivo do projeto.
 */
const ConclusionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.paragraph}>
          A análise realizada demonstra que não existe uma "solução única" no desenvolvimento móvel. A escolha da arquitetura deve ser guiada pelo contexto do projeto, orçamento e requisitos de desempenho.
        </Text>

        <View style={styles.summaryBox}>
          <View style={styles.summaryItem}>
            <MaterialCommunityIcons name="star-outline" size={24} color="#f1c40f" />
            <Text style={styles.summaryText}>
              <Text style={styles.bold}>Desempenho Crítico:</Text> Aplicações como o Spotify exigem arquitetura Nativa para garantir fluidez máxima.
            </Text>
          </View>

          <View style={styles.summaryItem}>
            <MaterialCommunityIcons name="currency-usd" size={24} color="#27ae60" />
            <Text style={styles.summaryText}>
              <Text style={styles.bold}>Custo-Benefício:</Text> Abordagens Híbridas e Cross-Compiled (como no Pinterest) permitem reutilização de código sem sacrificar demasiada performance.
            </Text>
          </View>

          <View style={styles.summaryItem}>
            <MaterialCommunityIcons name="cloud-check-outline" size={24} color="#3498db" />
            <Text style={styles.summaryText}>
              <Text style={styles.bold}>Acessibilidade:</Text> PWAs e Web Apps (STCP e Gmail) são ideais para acesso rápido e ampla compatibilidade sem instalação obrigatória.
            </Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Conclui-se que o sucesso de uma aplicação móvel depende da capacidade da equipa técnica em alinhar a tecnologia escolhida com os objetivos estratégicos da organização.
        </Text>

        <View style={styles.finalNote}>
          <Text style={styles.finalNoteText}>
            Investigação concluída com foco na diversidade de plataformas e tendências do mercado móvel atual.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

/**
 * @constant styles
 * @type {StyleSheet}
 * @description Definições de estilo para o componente ConclusionScreen, utilizando o motor de 
 * estilização nativo do React Native para garantir uma interface responsiva e legível.
 */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', marginBottom: 20 },
  paragraph: { fontSize: 16, lineHeight: 24, color: '#34495e', marginBottom: 15, textAlign: 'justify' },
  summaryBox: { marginVertical: 15 },
  summaryItem: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    marginBottom: 15,
    paddingRight: 15 
  },
  summaryText: { flex: 1, fontSize: 15, color: '#2c3e50', marginLeft: 10, lineHeight: 22 },
  bold: { fontWeight: 'bold' },
  finalNote: { 
    marginTop: 20, 
    padding: 15, 
    backgroundColor: '#ecf0f1', 
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#bdc3c7'
  },
  finalNoteText: { fontSize: 14, color: '#7f8c8d', textAlign: 'center', fontStyle: 'italic' }
});

export default ConclusionScreen;