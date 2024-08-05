import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTrashCan, faSquarePen } from "@fortawesome/free-solid-svg-icons";
import React_Calendar from "react-calendar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Calendar() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [myDate, setMyDate] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isAddingSchedule, setIsAddingSchedule] = useState(false);
    const [isViewingSchedule, setIsViewingSchedule] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const user_id = window.localStorage.getItem('userId');
    const token = window.localStorage.getItem('token');

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
        axios({
            method: 'get',
            url: `/calendar/list/${user_id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            setMyDate(result.data.data)
        })
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

    const saveSchedule = (e) => {
        e.preventDefault();

        let title = document.getElementById("schedule_title").value.trim();

        if (title === "") {
            Swal.fire({
                title: "제목을 입력해주세요"
            })
            return false;
        } else if (startDate === "") {
            Swal.fire({
                title: "시작 날짜를 입력해주세요"
            })
            return false;
        } else if (endDate === "") {
            Swal.fire({
                title: "종료 날짜를 입력해주세요"
            })
            return false;
        }

        const calendarDTO = {
            title: title,
            startday: startDate,
            endday: endDate
        };
        axios({
            method: 'post',
            url: `/calendar/create/${user_id}`,
            data: calendarDTO,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(result => {
            if (result.status == 200) {
                Swal.fire({
                    title: "일정을 저장했습니다"
                });
            }
        }).catch(error => {
            if (error.response && error.response.status === 400) {
                Swal.fire({
                    title: "일정이 저장되지 않았습니다."
                })
            }
        });
    }

    const formatDateToString = (dateArray) => {
        if (!dateArray || dateArray.length < 3) return '';
        const [year, month, day] = dateArray;
        return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`;
    };

    const deleteCalendar = (calendar_id) => {
        axios({
            method: 'delete',
            url: `/calendar/delete/${user_id}/${calendar_id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(result => {
            if (result.status == 200) {
                Swal.fire({
                    title: "일정을 삭제했습니다"
                });
            }
        }).catch(error => {
            if (error.response && error.response.status === 404) {
                Swal.fire({
                    title: "일정이 삭제 되지 않았습니다."
                })
            }
        });
    }

    return (
        <>
            {isViewingSchedule ? (
                <>
                    <div className='react_calendar_my_schedule'>
                        <p className='react_calendar_my_schedule_top'>일정</p>
                        <div className='react_calendar_my_schedule_main'>
                            {myDate.map((schedule, index) => (
                                <div key={index} className='react_calendar_my_schedule_main_div'>
                                    <div className='react_calendar_my_schedule_main_top'>
                                        <div className='react_calendar_my_schedule_main_date'>
                                            <p>{formatDateToString(schedule.startday)} ~ {formatDateToString(schedule.endday)}</p>
                                        </div>
                                        <FontAwesomeIcon icon={faTrashCan} size='2x' onClick={() => deleteCalendar(schedule.id)} className='react_calendar_my_schedule_main_delete' />
                                    </div>
                                    <p className='react_calendar_my_schedule_main_detail'>{schedule.title}</p>
                                </div>
                            ))}
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
                            <input type='text' id='schedule_title' placeholder='제목을 입력해주세요' />
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
                        <p className='react_calendar_plus_schedule_save' onClick={saveSchedule}>저장</p>
                    </div>
                </>
            ) : (
                null
            )}
        </>
    )
}