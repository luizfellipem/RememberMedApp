import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, SPACING } from '../styles/theme';

export default function ReminderFormScreen() {
  const router = useRouter();
  const [medicationName, setMedicationName] = useState('');
  const [dose, setDose] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSave = () => {
    console.log('Medicamento:', medicationName);
    console.log('Dose:', dose);
    console.log('Frequência:', frequency);
    router.back();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Nova Receita</Text>
        
        <View style={styles.formGroup}>
            <Text style={styles.label}>Nome do Medicamento</Text>
            <TextInput
                style={styles.input}
                value={medicationName}
                onChangeText={setMedicationName}
                placeholder="Ex: Paracetamol"
                placeholderTextColor={COLORS.GREY}
            />
        </View>
        <View style={styles.formGroup}>
            <Text style={styles.label}>Dose</Text>
            <TextInput
                style={styles.input}
                value={dose}
                onChangeText={setDose}
                placeholder="Ex: 500mg"
                placeholderTextColor={COLORS.GREY}
            />
        </View>
        <View style={styles.formGroup}>
            <Text style={styles.label}>Frequência</Text>
            <TextInput
                style={styles.input}
                value={frequency}
                onChangeText={setFrequency}
                placeholder="Ex: A cada 8 horas"
                placeholderTextColor={COLORS.GREY}
            />
        </View>
        
      </ScrollView>
      
      <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.saveButton} 
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>+ Adicionar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY,
  },
  scrollContent: {
    padding: SPACING.LARGE,
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: SPACING.LARGE,
      color: COLORS.BLACK,
  },
  formGroup: {
      marginBottom: SPACING.MEDIUM,
  },
  label: {
      fontSize: 16,
      color: COLORS.BLACK,
      marginBottom: SPACING.SMALL,
  },
  input: {
      height: 50,
      backgroundColor: COLORS.WHITE,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: COLORS.GREY,
      paddingHorizontal: SPACING.MEDIUM,
      color: COLORS.BLACK,
  },
  buttonContainer: {
      padding: SPACING.LARGE,
      backgroundColor: COLORS.WHITE,
      borderTopWidth: 1,
      borderColor: COLORS.LIGHT_GREY,
  },
  saveButton: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.RED,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});


 