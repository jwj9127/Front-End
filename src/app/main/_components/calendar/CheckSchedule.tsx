import React, { useState } from 'react';
import style from '../../../../../styles/main/calendar.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { deleteCalendarAPI, getCalendarAPI } from '../../../../../store/main/calendarAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Schedule } from '../../_interface/ModalInterface';
import Swal from 'sweetalert2';

interface CheckScheduleProps {
    isViewingSchedule: boolean;
}

const CheckSchedule: React.FC<CheckScheduleProps> = ({ isViewingSchedule }) => {

    const dispatch = useDispatch<AppDispatch>();
    const userId = window.localStorage.getItem('userId');
    const [myDate, setMyDate] = useState([]);

    if (isViewingSchedule === true) {
        dispatch(getCalendarAPI(userId!))
            .unwrap()
            .then((response) => {
                setMyDate(response.data)
            })
            .catch(console.error);
    }

    const formatDateToString = (dateArray: any) => {
        if (!dateArray || dateArray.length < 3) return '';
        const [year, month, day] = dateArray;
        return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`;
    };

    const deleteCalendar = (id: any) => {
        dispatch(deleteCalendarAPI(id))
            .unwrap()
            .then((response) => {
                if (response.status == 200) {
                    Swal.fire({
                        title: "일정을 삭제했습니다"
                    });
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    Swal.fire({
                        title: "일정이 삭제 되지 않았습니다."
                    })
                }
            });
    }

    return (
        <>
            <div className={style.check_schedule_div} onClick={(e) => e.stopPropagation()}>
                <p className={style.check_schedule_top}>일정</p>
                <div className={style.check_schedule_main_div}>
                    {myDate && myDate.length > 0 ? (
                        myDate.map((schedule: Schedule) => (
                            <div key={schedule.id} className={style.check_schedule_content_div}>
                                <div className={style.check_schedule_top_div}>
                                    <div className={style.check_schedule_date_div}>
                                        <p>{formatDateToString(schedule.startDay)} ~ {formatDateToString(schedule.endDay)}</p>
                                    </div>
                                    <FontAwesomeIcon icon={faTrashCan} size='2x' onClick={() => deleteCalendar(schedule.id)} className={style.check_schedule_close} />
                                </div>
                                <p className={style.check_schedule_content}>{schedule.title}</p>
                            </div>
                        ))
                    ) : (
                        <p>일정이 없습니다.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default CheckSchedule;