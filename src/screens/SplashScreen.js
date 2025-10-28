import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

// Definição de cores para o tema da tela de splash
const COLORS = {
  TEAL: '#00A896', // Verde-água vibrante
  WHITE: '#FFFFFF',
};

export default function SplashScreen() {
  const navigation = useNavigation();

  // Navega para a tela de Login após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.TEAL} />
      
      <View style={styles.iconContainer}>
        <Ionicons name="add" size={60} color={COLORS.WHITE} />
      </View>

      <Text style={styles.title}>REMEMBER</Text>
      <Text style={styles.title}>MED</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TEAL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent', // O quadrado é da mesma cor do fundo
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    // A cruz está "dentro" do quadrado, então não precisa de bordas extras
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    letterSpacing: 1.5,
    lineHeight: 35, // Ajuste para aproximar as linhas
  },
});
