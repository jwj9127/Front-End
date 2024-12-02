import React, { useState } from 'react';
import style from '../../../../../styles/main/calendar.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { makeCalendarAPI } from '../../../../../store/main/calendarAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

interface AddScheduleProps {
    setIsAddingSchedule: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddSchedule: React.FC<AddScheduleProps> = ({ setIsAddingSchedule }) => {

    const dispatch = useDispatch<AppDispatch>();
    const userId = window.localStorage.getItem('userId');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const saveSchedule = (e: any) => {
        e.preventDefault();

        const titleElement = document.getElementById("schedule_title") as HTMLInputElement | null;
        const title = titleElement?.value.trim();

        if (!title || title === "") {
            Swal.fire({
                title: "제목을 입력해주세요"
            })
            return false;
        } else if (startDate === null) {
            Swal.fire({
                title: "시작 날짜를 입력해주세요"
            })
            return false;
        } else if (endDate === null) {
            Swal.fire({
                title: "종료 날짜를 입력해주세요"
            })
            return false;
        }

        const calendarDTO = {
            userId: userId!,
            title: title,
            startDay: startDate,
            endDay: endDate
        };
        dispatch(makeCalendarAPI(calendarDTO))
            .unwrap()
            .then((response) => {
                if (response.status == 200) {
                    Swal.fire({
                        title: "일정을 저장했습니다"
                    });
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    Swal.fire({
                        title: "일정이 저장되지 않았습니다."
                    })
                }
            });
    }

    return (
        <>
            <div className={style.add_schedule_div} onClick={(e) => e.stopPropagation()}>
                <div className={style.add_schedule_top_div}>
                    <p>새로운 일정</p>
                    <FontAwesomeIcon icon={faX} color='white' className={style.add_schedule_close} onClick={() => setIsAddingSchedule(false)} />
                </div>
                <div className={style.add_schedule_title_div}>
                    <p>제목</p>
                    <input type='text' id='schedule_title' placeholder='제목을 입력해주세요' />
                </div>
                <div className={style.add_schedule_date_div}>
                    <div className={style.add_schedule_date_start_div}>
                        <p>시작</p>
                        <DatePicker
                            selected={startDate}
                            onChange={(date: any) => setStartDate(date)}
                            placeholderText='날짜 선택'
                            className={style.date_selector}
                            dateFormat="yyyy. M. d"
                        />
                    </div>
                    <div className={style.add_schedule_date_end_div}>
                        <p>종료</p>
                        <DatePicker
                            selected={endDate}
                            onChange={(date: any) => setEndDate(date)}
                            placeholderText='날짜 선택'
                            className={style.date_selector}
                            dateFormat="yyyy. M. d"
                        />
                    </div>
                </div>
                <p className={style.add_schedule_save} onClick={saveSchedule}>저장</p>
            </div >
        </>
    )

}

export default AddSchedule;