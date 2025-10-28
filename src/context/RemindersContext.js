import { createContext, useContext, useState } from 'react';


const MOCK_REMINDERS = [
  { id: '1', name: 'Rivotril', time: '08:00', frequency: 'Diário' },
  { id: '2', name: 'Amoxicilina', time: '14:30', frequency: 'A cada 8h' },
  { id: '3', name: 'Dipirona', time: '20:00', frequency: 'Se necessário' },
];


const RemindersContext = createContext();


export function RemindersProvider({ children }) {
  const [reminders, setReminders] = useState(MOCK_REMINDERS);

  const addReminder = (reminder) => {
   
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


export function useReminders() {
  return useContext(RemindersContext);
}
