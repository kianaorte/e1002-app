import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import styles from "./Reminders.module.scss";

interface Reminder {
  id: number;
  reminder: string;
  completed: boolean;
}

const MOCK_REMINDERS: Reminder[] = [
  {
    id: 1,
    reminder: "Take bubbsy tubbsy on date",
    completed: false,
  },
  {
    id: 2,
    reminder: "Watch Charles Leclerc despair",
    completed: false,
  },
  {
    id: 3,
    reminder: "Buy groceries for dinner",
    completed: false,
  },
  {
    id: 4,
    reminder: "Water the plants",
    completed: false,
  },
  {
    id: 5,
    reminder: "Call Mum",
    completed: false,
  },
  {
    id: 6,
    reminder: "Book a dentist appointment",
    completed: false,
  },
  {
    id: 7,
    reminder: "Go for an afternoon walk",
    completed: false,
  },
];

const Reminders = () => {
  const [reminders, setReminders] = useState(MOCK_REMINDERS);

  const setCompleted = (id: number, completed: boolean) => {
    setReminders((currentReminders) =>
      currentReminders.map((reminder) =>
        reminder.id === id ? { ...reminder, completed } : reminder,
      ),
    );
  };

  return (
    <Card className={styles.remindersCard}>
      <CardHeader>
        <CardTitle>Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        {reminders.map((reminder) => (
          <div key={reminder.id}>
            <div className={styles.reminderRow}>
              <Checkbox
                checked={reminder.completed}
                onCheckedChange={(checked) =>
                  setCompleted(reminder.id, checked)
                }
              />
              <p className={reminder.completed ? styles.completed : undefined}>
                {reminder.reminder}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Reminders;
