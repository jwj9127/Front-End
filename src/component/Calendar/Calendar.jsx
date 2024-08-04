import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTrashCan, faSquarePen } from "@fortawesome/free-solid-svg-icons";
import React_Calendar from "react-calendar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'


export default function Calendar() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [myDate, setMyDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isAddingSchedule, setIsAddingSchedule] = useState(false);
    const [isViewingSchedule, setIsViewingSchedule] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);


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
            top: "40%",
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

    const handleAddScheduleClick = () => {
        setIsAddingSchedule(true);
    };

    const handleViewScheduleClick = () => {
        setIsViewingSchedule(!isViewingSchedule);
    };

    const handleAddScheduleClose = () => {
        setIsAddingSchedule(false);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsAddingSchedule(false);
        setIsViewingSchedule(false);
    };

    return (
        <>
            {isViewingSchedule ? (
                <>
                    <div className='react_calendar_my_schedule'>
                        <p className='react_calendar_my_schedule_top'>일정</p>
                        <div className='react_calendar_my_schedule_main'>
                            <div className='react_calendar_my_schedule_main_div'>
                                <div className='react_calendar_my_schedule_main_top'>
                                    <div className='react_calendar_my_schedule_main_date'>
                                        <p>2024.8.3</p> ~ <p>2024.8.6</p>
                                    </div>
                                    <div className='react_calendar_my_schedule_main_modify'>
                                        <FontAwesomeIcon icon={faSquarePen} size='2x' />
                                        <FontAwesomeIcon icon={faTrashCan} size='2x' />
                                    </div>
                                </div>
                                <p className='react_calendar_my_schedule_main_detail'>충청톤</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                null
            )}
            <Modal isOpen={isModalOpen} style={chatStyles}>
                <p className='main_page_todolist_template_schedule_onf' onClick={handleViewScheduleClick}>일정</p>
                <FontAwesomeIcon icon={faX} color='white' className='main_page_todolist_template_title_out' onClick={handleModalClose} />
                <React_Calendar
                    onChange={onChange}
                    value={selectedDate}
                    calendarType="gregory"
                    minDetail="year"
                    prev2Label={null}
                    next2Label={null}
                    showNeighboringMonth={true}
                />
                <p className='react_calendar_plus_schedule' onClick={handleAddScheduleClick}>일정 추가</p>
            </Modal>
            {isAddingSchedule ? (
                <>
                    <div className='react_calendar_plus_schedule_div'>
                        <div className='react_calendar_plus_schedule_div_top'>
                            <p>새로운 일정</p>
                            <FontAwesomeIcon icon={faX} color='white' className='react_calendar_plus_schedule_div_top_out' onClick={handleAddScheduleClose} />
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
            ) : (
                null
            )}
        </>
    )
}