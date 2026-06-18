// App.js
import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { 
  Provider as PaperProvider, 
  Card, 
  Title, 
  Paragraph, 
  Button, 
  Text,
  Appbar 
} from 'react-native-paper';

import { players } from './data';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPlayer = players[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % players.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? players.length - 1 : prev - 1
    );
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Figurinhas Brasil" subtitle="26 Convocados - Copa 2026" />
        </Appbar.Header>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {currentPlayer && (
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Image 
                  source={{ uri: currentPlayer.avatar }} 
                  style={styles.avatar} 
                />
                <Title style={styles.name}>{currentPlayer.jogador}</Title>
                <Paragraph style={styles.info}>
                  {currentPlayer.pais} • {currentPlayer.posicao}
                </Paragraph>
                <Paragraph style={styles.number}>
                  Camisa #{currentPlayer.numero}
                </Paragraph>
              </Card.Content>
            </Card>
          )}

          <View style={styles.navigation}>
            <Button 
              mode="contained" 
              onPress={goToPrevious}
              style={styles.navButton}
              icon="arrow-left"
            >
              Anterior
            </Button>

            <Text style={styles.counter}>
              {currentIndex + 1} / {players.length}
            </Text>

            <Button 
              mode="contained" 
              onPress={goToNext}
              style={styles.navButton}
              icon="arrow-right"
            >
              Próxima
            </Button>
          </View>

          <Text style={styles.tip}>
            26 Convocados da Seleção Brasileira • Navegação circular
          </Text>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContent: { padding: 16, alignItems: 'center' },
  card: { 
    width: '100%', 
    maxWidth: 380, 
    marginVertical: 16, 
    elevation: 6 
  },
  cardContent: { alignItems: 'center', padding: 20 },
  avatar: {
    width: 240,
    height: 240,
    borderRadius: 120,
    marginBottom: 16,
    borderWidth: 5,
    borderColor: '#00A859',
  },
  name: { fontSize: 26, textAlign: 'center', marginBottom: 8 },
  info: { fontSize: 18, textAlign: 'center' },
  number: { fontSize: 24, fontWeight: 'bold', color: '#00A859', marginTop: 8 },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  navButton: { flex: 1, marginHorizontal: 8 },
  counter: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginHorizontal: 20,
    textAlign: 'center'
  },
  tip: { 
    marginTop: 30, 
    color: '#666', 
    fontStyle: 'italic', 
    textAlign: 'center' 
  },
});
