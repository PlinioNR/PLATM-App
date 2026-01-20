import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DetailsScreen = ({ route }) => {
  const type = route?.params?.type || 'Nativas';
  const [imageError, setImageError] = useState(false);

  const content = {
    'Nativas': {
      case: 'Spotify',
      tech: 'KOTLIN & SWIFT',
      icon: 'spotify',
      logo: require('../assets/spotify.png'),
      description: 'A arquitetura nativa é o "benchmark" de performance. Ao utilizar linguagens compiladas para o processador específico de cada SO, o Spotify consegue gerir buffers de áudio em tempo real com latência próxima de zero. Esta abordagem permite o uso profundo de APIs de sistema para reprodução em segundo plano e integração com sistemas de som automóvel (CarPlay/Android Auto) que seriam instáveis em outras arquiteturas.',
      advantages: [
        'Performance bruta: Processamento de áudio sem camadas de abstração.',
        'Eficiência energética: Menor consumo de bateria em execuções longas.',
        'UX Superior: Resposta tátil e animações a 60 FPS estáveis.'
      ],
      disadvantages: [
        'Time-to-market: Necessidade de desenvolver a mesma função duas vezes.',
        'Custo Operacional: Requer especialistas em ambientes Apple e Google.'
      ],
      critique: 'Avaliamos esta decisão como vital. Para um serviço de streaming, a estabilidade do "background play" e a velocidade de resposta da UI são os maiores diferenciais competitivos. O Spotify não seria o líder de mercado se a app falhasse ou consumisse bateria excessiva devido a uma arquitetura híbrida mal otimizada.',
      isPositive: true
    },
    'Híbridas Trad.': {
      case: 'SNS 24',
      tech: 'CORDOVA & IONIC',
      icon: 'medical-bag',
      logo: require('../assets/sns24.jpg'), // Confirma se é .png ou .jpg
      description: 'As apps híbridas tradicionais funcionam através de uma WebView (um navegador interno). A lógica reside em HTML/JavaScript e comunica com o hardware via "plugins bridge". No caso do SNS 24, esta escolha permitiu um lançamento rápido e universal, mas cria uma dependência crítica de motores de renderização de terceiros que variam conforme a versão do Android do utilizador.',
      advantages: [
        'Custo-Benefício: Um único código para iOS, Android e Web.',
        'Manutenção Simples: Updates de conteúdo via servidor (Hot Code Push).',
        'Talento: Utiliza a vasta base de programadores Web do mercado.'
      ],
      disadvantages: [
        'Performance de UI: Scroll e transições podem apresentar "lag".',
        'Segurança: Maior superfície de ataque por correr em ambiente Web.'
      ],
      critique: 'A nossa análise é crítica quanto a esta escolha para o setor público. Sendo o SNS 24 uma ferramenta de saúde, a fiabilidade e segurança biométrica deveriam ser prioritárias. A arquitetura híbrida introduz camadas de incerteza e uma performance que pode frustrar o cidadão em momentos de urgência.',
      isPositive: false
    },
    'Cross-Compiled': {
      case: 'Pinterest',
      tech: 'REACT NATIVE',
      icon: 'pinterest',
      logo: require('../assets/pinterest.png'),
      description: 'Diferente das híbridas, esta técnica traduz o código para componentes nativos reais. O Pinterest utiliza o React Native para partilhar lógica de negócio complexa entre plataformas, enquanto mantém a renderização visual nativa. Isso permite uma interface rica em imagens e scroll infinito sem os gargalos de uma WebView, mantendo a produtividade da equipa elevada.',
      advantages: [
        'Agilidade: Partilha de até 90% do código fonte.',
        'Experiência Nativa: Componentes visuais reais do sistema operativo.',
        'Comunidade: Ecossistema vasto de bibliotecas prontas.'
      ],
      disadvantages: [
        'Debugging: Erros que ocorrem na ponte (bridge) são difíceis de rastrear.',
        'Tamanho: O pacote final da app tende a ser maior que o nativo puro.'
      ],
      critique: 'Consideramos esta a decisão mais inteligente para redes sociais modernas. O Pinterest consegue inovar rapidamente em ambas as plataformas simultaneamente, sem sacrificar a estética visual que é o núcleo do seu produto. É o equilíbrio perfeito entre custo e qualidade percebida.',
      isPositive: true
    },
    'Web Native': {
      case: 'Canva',
      tech: 'HTML5 / CANVAS',
      icon: 'draw',
      logo: require('../assets/canva.png'),
      description: 'O Canva opera num nicho onde a paridade de design é absoluta. Ao utilizar a API Canvas do HTML5 e WebAssembly, eles garantem que o motor de renderização gráfica seja idêntico no browser e no telemóvel. É uma abordagem "Web-First" otimizada para manipulação de vetores e imagens pesadas que não depende de componentes de interface padrão do telemóvel.',
      advantages: [
        'Consistência: O design no PC é exatamente igual ao no Mobile.',
        'Colaboração: Sincronização em tempo real nativa da arquitetura Web.',
        'Escalabilidade: Facilidade em suportar novos formatos de ecrã.'
      ],
      disadvantages: [
        'Overhead de Memória: Manipulação de imagens consome muita RAM.',
        'Interação: Menor integração com gestos nativos específicos do sistema.'
      ],
      critique: 'A escolha é tecnicamente brilhante para o propósito do Canva. Como o valor do produto está na fidelidade visual e na edição multiplataforma, sacrificar o acesso a APIs nativas (como sensores) em troca de um motor gráfico universal foi uma jogada estratégica correta.',
      isPositive: true
    },
    'Web': {
      case: 'Gmail',
      tech: 'AJAX / JS',
      icon: 'gmail',
      logo: require('../assets/gmail.png'),
      description: 'A versão Web do Gmail foca na universalidade absoluta. Utiliza técnicas de carregamento assíncrono para permitir que o utilizador consulte correio em qualquer dispositivo com um browser básico. É a solução de menor atrito, pois não exige download, instalação ou atualizações manuais por parte do utilizador, residindo inteiramente no servidor.',
      advantages: [
        'Acessibilidade: Funciona em qualquer dispositivo com internet.',
        'Zero Atrito: Não ocupa espaço de armazenamento interno.',
        'Controlo Total: O desenvolvedor controla a versão que todos usam.'
      ],
      disadvantages: [
        'Offline: Funcionalidade muito limitada sem ligação ativa.',
        'Hardware: Não consegue aceder a notificações robustas ou Bluetooth.'
      ],
      critique: 'Concordamos com a estratégia. O Gmail é um serviço de utilidade pública global; ter uma versão Web forte garante que mesmo utilizadores com dispositivos obsoletos ou sem memória interna possam aceder a comunicações críticas. É a democracia do acesso à informação.',
      isPositive: true
    },
    'PWA': {
      case: 'STCP',
      tech: 'SERVICE WORKERS',
      icon: 'bus',
      logo: require('../assets/stcp.png'),
      description: 'A PWA da STCP utiliza "Service Workers" para criar uma camada de cache inteligente. Isto permite que a app carregue instantaneamente mesmo em paragens de autocarro com má cobertura de rede. É uma evolução da Web App que permite ser "instalada" no ecrã principal, mas sem a burocracia das lojas de aplicações (App Store/Play Store).',
      advantages: [
        'Eficiência de Dados: Cache offline para horários e percursos.',
        'Instalação Direta: Menor taxa de abandono do utilizador.',
        'Custo Zero de Loja: Sem necessidade de pagar taxas à Apple/Google.'
      ],
      disadvantages: [
        'Limitação iOS: A Apple restringe algumas funções de PWAs.',
        'Descoberta: Não aparece nos tops de download das lojas oficiais.'
      ],
      critique: 'Avaliamos como a solução ideal para transportes públicos. O passageiro não quer baixar uma app de 80MB para ver um horário; ele quer uma resposta imediata. A PWA resolve o problema com leveza, custo mínimo de desenvolvimento e eficácia máxima no serviço ao cliente.',
      isPositive: true
    }
  };

  const data = content[type];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        {/* LOGO COM FALLBACK: Se não carregar a imagem, mostra o ícone */}
        {!imageError ? (
          <Image 
            source={data.logo} 
            style={styles.logo} 
            resizeMode="contain" 
            onError={() => setImageError(true)}
          />
        ) : (
          <MaterialCommunityIcons name={data.icon} size={80} color="#1A237E" style={{marginBottom: 20}} />
        )}
        
        <Text style={styles.caseLabel}>CASO DE ESTUDO</Text>
        <Text style={styles.caseTitle}>{data.case}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.tech}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Análise Técnica</Text>
        <Text style={styles.desc}>{data.description}</Text>

        <View style={styles.cardsRow}>
          <View style={[styles.miniCard, styles.advBorder]}>
            <Text style={[styles.cardHeader, {color: '#2E7D32'}]}>Vantagens</Text>
            {data.advantages.map((item, i) => <Text key={i} style={styles.itemText}>• {item}</Text>)}
          </View>
          
          <View style={[styles.miniCard, styles.disBorder]}>
            <Text style={[styles.cardHeader, {color: '#C62828'}]}>Limitações</Text>
            {data.disadvantages.map((item, i) => <Text key={i} style={styles.itemText}>• {item}</Text>)}
          </View>
        </View>

        <View style={[styles.critique, { borderLeftColor: data.isPositive ? '#2E7D32' : '#C62828' }]}>
          <View style={styles.critiqueHeader}>
            <MaterialCommunityIcons 
              name={data.isPositive ? "thumb-up" : "thumb-down"} 
              size={24} 
              color={data.isPositive ? '#2E7D32' : '#C62828'} 
            />
            <Text style={[styles.critiqueTitle, {color: data.isPositive ? '#2E7D32' : '#C62828'}]}>Avaliação do Grupo</Text>
          </View>
          <Text style={styles.critiqueText}>{data.critique}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  hero: { backgroundColor: '#fff', paddingVertical: 40, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  logo: { width: 120, height: 120, marginBottom: 15 },
  caseLabel: { fontSize: 12, fontWeight: 'bold', color: '#90A4AE', letterSpacing: 1.5 },
  caseTitle: { fontSize: 36, fontWeight: '900', color: '#1A237E' },
  badge: { backgroundColor: '#1A237E', paddingHorizontal: 20, paddingVertical: 6, borderRadius: 20, marginTop: 15 },
  badgeText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  body: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1A237E', marginBottom: 10 },
  desc: { fontSize: 16, color: '#455A64', lineHeight: 24, textAlign: 'justify', marginBottom: 25 },
  cardsRow: { marginBottom: 10 },
  miniCard: { backgroundColor: '#fff', padding: 18, borderRadius: 15, marginBottom: 15, elevation: 3 },
  advBorder: { borderTopWidth: 5, borderTopColor: '#2E7D32' },
  disBorder: { borderTopWidth: 5, borderTopColor: '#C62828' },
  cardHeader: { fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  itemText: { fontSize: 14, color: '#546E7A', marginBottom: 6 },
  critique: { backgroundColor: '#fff', padding: 20, borderRadius: 15, borderLeftWidth: 10, elevation: 4 },
  critiqueHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  critiqueTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  critiqueText: { fontSize: 15, fontStyle: 'italic', color: '#263238', lineHeight: 24 },
});

export default DetailsScreen;