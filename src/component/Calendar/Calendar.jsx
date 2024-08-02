import Modal from 'react-modal';
import { useState } from 'react';
import React_Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'


export default function Calendar() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const chatStyles = {
        overlay: {
            backgroundColor: "#29293E",
            zIndex: 1,
            position: "static",
            top: 0,
            left: 0,
        },
        content: {
            width: "550px",
            height: "600px",
            zIndex: 1,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: 0,
            borderRadius: "7px",
            backgroundColor: "#29293E",
        }
    };

    const onChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <Modal isOpen={true} style={chatStyles}>
                <React_Calendar
                    onChange={onChange}
                    value={selectedDate}
                    calendarType="gregory"
                    minDetail="year"
                    prev2Label={null}
                    next2Label={null}
                    showNeighboringMonth={false}
                />
            </Modal>
        </>
    )
}