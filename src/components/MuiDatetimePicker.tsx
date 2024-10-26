'use client'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3"
import { Stack, TextField } from "@mui/material"
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers"
import { useState } from "react"

export default function DatetimePickerPage() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<Date | null>(null)
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

    return <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={4} sx={{ width: '250px' }}>
            <DatePicker
                value={selectedDate}
                onChange={(newValue) => {
                    setSelectedDate(newValue)
                    console.log(newValue)
                }}
            />

            <TimePicker
                value={selectedTime}
                onChange={(newValue) => {
                    setSelectedTime(newValue)
                    console.log(newValue)
                }}
            />

<DateTimePicker
                value={selectedDateTime}
                onChange={(newValue) => {
                    setSelectedDateTime(newValue)
                    console.log(newValue)
                }}
            />
        </Stack>
    </LocalizationProvider>

}