import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DetailsScreen = ({ route }) => {
  const { type } = route.params;

  // Dados extraídos do seu relatório
  const content = {
    'Nativas': {
      case: 'Spotify',
      tech: 'Kotlin / Swift',
      description: 'Aplicações desenvolvidas especificamente para um sistema operativo, garantindo acesso total ao hardware.',
      advantages: ['Desempenho máximo', 'Experiência fluida', 'Acesso total a APIs'],
      disadvantages: ['Custo elevado', 'Manutenção duplicada'],
      critique: 'O Spotify escolhe a via nativa porque a performance em streaming de áudio e gestão de bateria é um requisito não negociável para o sucesso do produto.'
    },
    'Híbridas Trad.': {
      case: 'SNS 24',
      tech: 'Cordova / Ionic',
      description: 'Web apps encapsuladas num container nativo, facilitando o desenvolvimento multiplataforma.',
      advantages: ['Baixo custo', 'Código partilhado', 'Desenvolvimento rápido'],
      disadvantages: ['Desempenho limitado', 'Dependência de plugins'],
      critique: 'Embora eficiente em custo, uma app de saúde como o SNS 24 beneficiaria da robustez nativa para garantir maior segurança e rapidez em situações críticas.'
    },
    'Cross-Compiled': {
      case: 'Pinterest',
      tech: 'React Native',
      description: 'Compilação de código intermédio em componentes nativos, oferecendo alta performance.',
      advantages: ['90% de código partilhado', 'Performance próxima ao nativo', 'UI consistente'],
      disadvantages: ['Curva de aprendizagem', 'Configuração nativa complexa'],
      critique: 'O Pinterest prova que o React Native é ideal para apps focadas em conteúdo visual que precisam de iterar funcionalidades rapidamente em ambos os SOs.'
    },
    'Web Native': {
      case: 'Canva',
      tech: 'JavaScript / Webview',
      description: 'Utiliza motores web avançados dentro da app para manter funcionalidades complexas de design.',
      advantages: ['Paridade total Desktop/Mobile', 'Atualização sem loja'],
      disadvantages: ['Consumo de RAM elevado'],
      critique: 'Para o Canva, a consistência das ferramentas de design entre plataformas é mais importante do que a fluidez absoluta da interface.'
    },
    'Web': {
      case: 'Gmail',
      tech: 'AJAX / HTML5',
      description: 'Acessível via browser, foca na compatibilidade universal.',
      advantages: ['Sem instalação', 'Compatibilidade total'],
      disadvantages: ['Dependência de internet', 'Acesso nulo ao hardware'],
      critique: 'O Gmail na web é o exemplo máximo de acessibilidade; a prioridade é que o utilizador consiga ler o seu email em qualquer terminal do mundo.'
    },
    'PWA': {
      case: 'STCP',
      tech: 'Service Workers',
      description: 'Websites que se comportam como apps, permitindo instalação e uso offline parcial.',
      advantages: ['Leveza (KB)', 'Instalação instantânea'],
      disadvantages: ['Limitações no iOS'],
      critique: 'A STCP utiliza PWA para fornecer horários em tempo real de forma leve, removendo a barreira de ter de baixar uma app pesada na paragem do autocarro.'
    }
  };

  const data = content[type] || content['Nativas'];

  // Função auxiliar para renderizar os cartões de Prós e Contras
  const renderCard = (title, items, isAdvantage) => (
    <View style={[styles.card, isAdvantage ? styles.advCard : styles.disCard]}>
      <View style={styles.cardHeader}>
        <MaterialCommunityIcons 
          name={isAdvantage ? "check-circle" : "alert-circle"} 
          size={22} 
          color={isAdvantage ? "#2E7D32" : "#C62828"} 
        />
        <Text style={[styles.cardTitle, { color: isAdvantage ? "#2E7D32" : "#C62828" }]}>
          {title}
        </Text>
      </View>
      {items.map((item, i) => (
        <Text key={i} style={styles.cardItem}>• {item}</Text>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho com tons azulados */}
      <View style={styles.header}>
        <Text style={styles.typeLabel}>{type}</Text>
        <Text style={styles.caseTitle}>Caso: {data.case}</Text>
        <View style={styles.techBadge}>
          <Text style={styles.techText}>{data.tech}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Resumo da Arquitetura</Text>
        <Text style={styles.descriptionText}>{data.description}</Text>

        <View style={styles.cardsContainer}>
          {renderCard("Principais Vantagens", data.advantages, true)}
          {renderCard("Desvantagens / Riscos", data.disadvantages, false)}
        </View>

        {/* Destaque para a Avaliação Crítica */}
        <View style={styles.critiqueBox}>
          <View style={styles.critiqueHeader}>
            <MaterialCommunityIcons name="comment-text-outline" size={24} color="#1A237E" />
            <Text style={styles.critiqueTitle}>Avaliação Crítica</Text>
          </View>
          <Text style={styles.critiqueText}>{data.critique}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { 
    backgroundColor: '#1A237E', 
    padding: 30, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  typeLabel: { color: '#90CAF9', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 12 },
  caseTitle: { color: '#fff', fontSize: 26, fontWeight: 'bold', marginTop: 5 },
  techBadge: { 
    backgroundColor: '#2196F3', 
    alignSelf: 'flex-start', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 20, 
    marginTop: 15 
  },
  techText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  body: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1A237E', marginBottom: 10 },
  descriptionText: { fontSize: 15, color: '#546E7A', lineHeight: 22, marginBottom: 20 },
  cardsContainer: { marginVertical: 10 },
  card: { 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 16, 
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1 
  },
  advCard: { backgroundColor: '#E8F5E9', borderLeftWidth: 5, borderLeftColor: '#2E7D32' },
  disCard: { backgroundColor: '#FFEBEE', borderLeftWidth: 5, borderLeftColor: '#C62828' },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
  cardItem: { fontSize: 14, color: '#37474F', marginBottom: 5, paddingLeft: 5 },
  critiqueBox: { 
    backgroundColor: '#E3F2FD', 
    borderRadius: 16, 
    padding: 20, 
    marginTop: 10, 
    borderStyle: 'dashed', 
    borderWidth: 1, 
    borderColor: '#1A237E' 
  },
  critiqueHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  critiqueTitle: { fontSize: 17, fontWeight: 'bold', color: '#1A237E', marginLeft: 10 },
  critiqueText: { fontSize: 15, fontStyle: 'italic', color: '#2c3e50', lineHeight: 22 }
});

export default DetailsScreen;