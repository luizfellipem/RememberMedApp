import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { COLORS, SPACING } from '../styles/theme';

export default function ReminderDetailsModal({ reminder, visible, onClose }) {
  if (!reminder) {
    return null;
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <View style={styles.stackItem}>
                <Text style={styles.labelText}>Nome:</Text>
                <Text style={styles.infoText}>{reminder.name}</Text>
              </View>
              <View style={styles.stackItem}>
                <Text style={styles.labelText}>Dose:</Text>
                <Text style={styles.infoText}>{reminder.dose}</Text>
              </View>
              <View style={styles.stackItem}>
                <Text style={styles.labelText}>Frequência:</Text>
                <Text style={styles.infoText}>{reminder.frequency}</Text>
              </View>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={onClose}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: SPACING.LARGE,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  stackItem: {
    marginBottom: SPACING.MEDIUM,
    width: '100%',
  },
  labelText: {
    fontSize: 16,
    color: COLORS.GREY,
    marginBottom: SPACING.SMALL / 2,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  closeButton: {
    backgroundColor: COLORS.RED,
    borderRadius: 10,
    padding: SPACING.MEDIUM,
    elevation: 2,
    marginTop: SPACING.MEDIUM,
    width: '100%',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
