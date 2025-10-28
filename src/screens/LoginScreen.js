import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { COLORS, SPACING } from '../styles/theme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Função para simular o login e navegar para Home
  const handleLogin = () => {
    // Apenas para simulação, navega direto para Home
    if (email && password) {
       navigation.replace('Home');
    } else {
       Alert.alert("Erro", "Preencha e-mail e senha para simular o login.");
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />

      <View style={styles.logoArea}>
        {/* Logo/Ícone do App */}
        <View style={styles.iconContainer}>
          <Ionicons name="add" size={36} color={COLORS.PRIMARY} />
        </View>
        <Text style={styles.logoText}>REMEMBER MED</Text>
      </View>

      <View style={styles.formArea}>
        <Text style={styles.title}>Faça login para acessar suas receitas</Text>
        
        {/* Campo E-mail */}
        <TextInput
          style={styles.input}
          placeholder="email@dominio.com"
          placeholderTextColor={COLORS.GREY}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Campo Senha */}
        <TextInput
          style={styles.input}
          placeholder="senha"
          placeholderTextColor={COLORS.GREY}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Link Esqueceu a Senha */}
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* Botão Principal */}
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: SPACING.LARGE,
  },
  logoArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SPACING.XLARGE * 2,
  },
  iconContainer: {
    backgroundColor: COLORS.LIGHT_GREY,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginTop: SPACING.SMALL,
  },
  formArea: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: COLORS.BLACK,
    marginBottom: SPACING.LARGE,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.LIGHT_GREY,
    borderRadius: 10,
    paddingHorizontal: SPACING.MEDIUM,
    marginBottom: SPACING.MEDIUM,
    color: COLORS.BLACK,
  },
  forgotPasswordButton: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: SPACING.LARGE * 1.5,
  },
  forgotPasswordText: {
    color: COLORS.PRIMARY,
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
