import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../styles/theme';

export default function SplashScreen() {
  const navigation = useNavigation();

  // Função para navegar para a tela de Login após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Garante que o ícone de status (hora, bateria) seja branco no fundo escuro */}
      <StatusBar barStyle="light-content" backgroundColor={COLORS.PRIMARY} /> 
      
      {/* Ícone de Cruz/Mais */}
      <View style={styles.iconContainer}>
        <Ionicons name="add" size={48} color={COLORS.PRIMARY} />
      </View>

      {/* Título Principal */}
      <Text style={styles.title}>REMEMBER</Text>
      <Text style={styles.title}>MED</Text>
      
      {/* Ícone de Plus na parte inferior (baseado no design) */}
      <View style={styles.bottomIconContainer}>
        <Ionicons name="add-circle" size={32} color={COLORS.WHITE} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    letterSpacing: 2,
    marginTop: -10,
  },
  bottomIconContainer: {
    position: 'absolute',
    bottom: 50,
    left: 40,
  },
});

