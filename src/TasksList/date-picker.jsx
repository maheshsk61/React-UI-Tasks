import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        console.log(selectedDate)
    }, [selectedDate])

    return (
        <div>
            <DatePicker selected={selectedDate} onChange={(e) => { setSelectedDate(e); }} />
        </div>
    )
}

export default DatePick