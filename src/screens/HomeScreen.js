import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { COLORS, SPACING } from '../styles/theme';

import { useReminders } from '../context/RemindersContext';

// ... (código existente)

export default function HomeScreen() {
  const router = useRouter();
  const { reminders } = useReminders();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.greetingText}>Olá, Usuário!</Text>
          <Text style={styles.headerTitle}>Minhas receitas</Text>
      </View>
      
      <FlatList
        data={reminders}
        renderItem={({ item }) => <ReminderItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => router.push('/ReminderForm')}
      >
        <Ionicons name="add" size={30} color={COLORS.WHITE} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY, // Fundo levemente cinza
  },
  header: {
    padding: SPACING.LARGE,
    paddingTop: 0, 
    backgroundColor: COLORS.WHITE,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: SPACING.MEDIUM,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  greetingText: {
      fontSize: 14,
      color: COLORS.GREY,
      marginBottom: SPACING.SMALL / 2,
  },
  headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS.BLACK,
  },
  listContent: {
    paddingHorizontal: SPACING.LARGE,
    paddingBottom: SPACING.LARGE * 4, // Espaço para o botão flutuante
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: COLORS.RED, // A cor do botão flutuante parece ser vermelha no Figma
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.RED,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});