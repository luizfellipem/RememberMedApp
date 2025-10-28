import { Stack } from 'expo-router';
import { RemindersProvider } from '../src/context/RemindersContext';

export default function RootLayout() {
  return (
    <RemindersProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Splash" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Home" options={{ title: 'Lembretes', headerShown: false }} />
        <Stack.Screen name="ReminderForm" options={{ title: 'Nova Receita' }} />
      </Stack>
    </RemindersProvider>
  );
}
