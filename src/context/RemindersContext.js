import React, { createContext, useContext, useState } from 'react';

// Dados de simulação iniciais
const MOCK_REMINDERS = [
  { id: '1', name: 'Rivotril', time: '08:00', frequency: 'Diário' },
  { id: '2', name: 'Amoxicilina', time: '14:30', frequency: 'A cada 8h' },
  { id: '3', name: 'Dipirona', time: '20:00', frequency: 'Se necessário' },
];

// 1. Criar o Contexto
const RemindersContext = createContext();

// 2. Criar o Provedor (Provider)
export function RemindersProvider({ children }) {
  const [reminders, setReminders] = useState(MOCK_REMINDERS);

  const addReminder = (reminder) => {
    // Adiciona o novo lembrete à lista, gerando um ID simples
    setReminders(prevReminders => [
      ...prevReminders,
      { ...reminder, id: String(Date.now()) },
    ]);
  };

  return (
    <RemindersContext.Provider value={{ reminders, addReminder }}>
      {children}
    </RemindersContext.Provider>
  );
}

// 3. Criar um hook customizado para facilitar o uso
export function useReminders() {
  return useContext(RemindersContext);
}
