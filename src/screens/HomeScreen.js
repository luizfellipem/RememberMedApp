import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ReminderDetailsModal from '../components/ReminderDetailsModal';
import { useReminders } from '../context/RemindersContext';
import { COLORS, SPACING } from '../styles/theme';

const ReminderItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.reminderItem}>
      <Text style={styles.reminderText}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { reminders } = useReminders();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);

  const handleReminderPress = (reminder) => {
    setSelectedReminder(reminder);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedReminder(null);
  };

  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader userEmail="zilmar@example.com" onLogout={handleLogout} />
      
      <FlatList
        data={reminders}
        renderItem={({ item }) => <ReminderItem item={item} onPress={() => handleReminderPress(item)} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => <Text style={styles.headerTitle}>Minhas receitas</Text>}
      />

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => router.push('/ReminderForm')}
      >
        <Ionicons name="add" size={30} color={COLORS.WHITE} />
      </TouchableOpacity>

      <ReminderDetailsModal 
        reminder={selectedReminder} 
        visible={modalVisible} 
        onClose={handleCloseModal} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY, // Fundo levemente cinza
  },
  headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS.BLACK,
      paddingHorizontal: SPACING.LARGE,
      marginBottom: SPACING.MEDIUM,
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
  reminderItem: {
    backgroundColor: COLORS.WHITE,
    padding: SPACING.MEDIUM,
    borderRadius: 10,
    marginBottom: SPACING.MEDIUM,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  reminderText: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
});