import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../styles/theme';

const ProfileHeader = ({ userEmail, onLogout }) => {
  const getInitials = (email) => {
    if (!email) return '';
    return email.charAt(0).toUpperCase();
  };

  const getNameFromEmail = (email) => {
    if (!email) return '';
    return email.split('@')[0];
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.profilePic}>
        <Text style={styles.initials}>{getInitials(userEmail)}</Text>
      </View>
      <Text style={styles.userName}>{getNameFromEmail(userEmail)}</Text>
      <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color={COLORS.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.LARGE,
    paddingTop: SPACING.LARGE,
    backgroundColor: COLORS.WHITE,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: SPACING.MEDIUM,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.RED,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.MEDIUM,
  },
  initials: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.BLACK,
    flex: 1,
  },
  logoutButton: {
    padding: SPACING.SMALL,
  },
});

export default ProfileHeader;
