import React, { useState } from 'react';
import style from '../../../../../styles/main/calendar.module.css';
import { ModalProps } from '../../_interface/ModalInterface';
import CheckSchedule from './CheckSchedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import React_Calendar from "react-calendar";
import AddSchedule from './AddSchedule';

const Calendar: React.FC<ModalProps> = ({ isModalOpen, closeModal }) => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isAddingSchedule, setIsAddingSchedule] = useState(false);
    const [isViewingSchedule, setIsViewingSchedule] = useState(false);

    if (!isModalOpen) return null;

    return (
        <>
            {isViewingSchedule ? <CheckSchedule /> : null}
            <div className=''>
                <p className='main_page_todolist_template_schedule_onf' onClick={() => { setIsViewingSchedule(!isViewingSchedule) }}>일정</p>
                <FontAwesomeIcon icon={faX} color='white' className='main_page_todolist_template_title_out' onClick={closeModal} />
                <React_Calendar
                    onChange={(date: any) => setSelectedDate(date)}
                    value={selectedDate}
                    calendarType="gregory"
                    minDetail="year"
                    prev2Label={null}
                    next2Label={null}
                    showNeighboringMonth={true}
                />
                <p className='react_calendar_plus_schedule' onClick={() => setIsAddingSchedule(true)}>일정 추가</p>
            </div>
            {isAddingSchedule ? <AddSchedule setIsAddingSchedule={setIsAddingSchedule} /> : null}
        </>
    )
}

export default Calendar;