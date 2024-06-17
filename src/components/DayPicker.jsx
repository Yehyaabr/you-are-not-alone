import { useState, useEffect } from "react";

import { DayPicker, DayPickerProps } from "react-day-picker";

const DayPicker = () => {
  const [selectedDate, setSelectedDate] =
    (useState < Date) | (undefined > undefined);

  // Initialize modifiers with the correct type
  const [modifiers, setModifiers] = useState < DayPickerProps["modifiers"] > {};
  useEffect(() => {
    // Update modifiers based on selectedDate
    if (selectedDate) {
      setModifiers({ selected: selectedDate });
    } else {
      setModifiers({});
    }
  }, [selectedDate]);

  return (
    <div>
      <DayPicker
        modifiers={modifiers}
        onDayClick={(day, modifiers) => {
          if (modifiers.selected === day) {
            setSelectedDate(undefined); // Deselect the day
            setModifiers({}); // Clear the modifier
          } else {
            setSelectedDate(day); // Select the day
            setModifiers({ selected: day }); // Update the modifier
          }
        }}
        footer={
          selectedDate ? `You selected ${selectedDate.toDateString()}` : ""
        }
      />
    </div>
  );
};

export default DayPicker;
