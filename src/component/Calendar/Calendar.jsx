import Modal from 'react-modal';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React_Calendar from "react-calendar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'


export default function Calendar() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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
            <div>
                <p></p>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p></p>
            </div>
            <Modal isOpen={true} style={chatStyles}>
                <FontAwesomeIcon icon={faX} color='white' className='main_page_todolist_template_title_out' />
                <React_Calendar
                    onChange={onChange}
                    value={selectedDate}
                    calendarType="gregory"
                    minDetail="year"
                    prev2Label={null}
                    next2Label={null}
                    showNeighboringMonth={true}
                />
                <p className='react_calendar_plus_schedule'>일정 추가</p>
            </Modal>
            <div className='react_calendar_plus_schedule_div'>
                <div className='react_calendar_plus_schedule_div_top'>
                    <p>새로운 일정</p>
                    <FontAwesomeIcon icon={faX} color='white' className='react_calendar_plus_schedule_div_top_out' />
                </div>
                <div className='react_calendar_plus_schedule_div_title'>
                    <p>제목</p>
                    <input type='text' placeholder='제목을 입력해주세요' />
                </div>
                <div className='react_calendar_plus_schedule_div_date'>
                    <div className='react_calendar_plus_schedule_div_start_date'>
                        <p>시작</p>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText='날짜 선택'
                            className='date_selector'
                            dateFormat="yyyy. M. d"
                        />
                    </div>
                    <div className='react_calendar_plus_schedule_div_end_date'>
                        <p>종료</p>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText='날짜 선택'
                            className='date_selector'
                            dateFormat="yyyy. M. d"
                        />
                    </div>
                </div>
                <p className='react_calendar_plus_schedule_save'>저장</p>
            </div>
        </>
    )
}