import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../../../store/store";
import { ListProp } from "../_interface/MusicInterface";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../../../styles/music/music.module.css';
import { addListByUrlAPI, deleteListAPI, getUserListAPI } from "../../../../store/music/musicAPI";
import Swal from "sweetalert2";

export default function UserPlayList({ handleTitleClick }: { handleTitleClick: (url: string) => void }) {

    const dispatch = useDispatch<AppDispatch>();
    const userId = window.localStorage.getItem('userId');
    const list = useSelector((state: RootState) => state.musicAPI.userList);

    const [videoUrl, setVideoUrl] = useState<string>();

    useEffect(() => {
        dispatch(getUserListAPI(userId!))
    }, [])

    const onChange = (e: any) => {
        setVideoUrl(e.target.value)
    }

    const addUrlList = () => {
        const addUrlDTO = {
            userId: userId!,
            videoUrl: videoUrl!
        }
        if (videoUrl) {
            dispatch(addListByUrlAPI(addUrlDTO))
                .unwrap()
                .then(() => {
                    Swal.fire({
                        title: "추가 완료"
                    })
                    setVideoUrl('');
                    dispatch(getUserListAPI(userId!))
                })
                .catch((error) => {
                    if (error && error.status === 400) {
                        Swal.fire({
                            text: error.message
                        })
                    }
                });
        } else {
            Swal.fire({
                title: "빈 칸은 작성이 안됩니다.",
            });
        }
    }

    const deleteList = (id: string) => {
        const deleteListDTO = {
            userId: userId!,
            videoId: id
        }
        dispatch(deleteListAPI(deleteListDTO))
            .unwrap()
            .then(() => {
                Swal.fire({
                    title: "삭제 완료"
                })
                dispatch(getUserListAPI(userId!))
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    Swal.fire({
                        title: "오류가 발생하였습니다."
                    })
                }
            });
    }

    return (
        <>
            <div>
                <div className={styles.list_top}>
                    <input
                        type="text"
                        value={videoUrl}
                        placeholder="url을 입력하면 재생목록에 추가됩니다."
                        onChange={onChange}
                    />
                    <button onClick={() => addUrlList()}>추가</button>
                </div>
                <div className={styles.list_div}>
                    {list.length > 0 ?
                        (list).map((prop: ListProp) => (
                            <div className={styles.prop_div}>
                                <div
                                    className={styles.list_url}
                                    style={{ backgroundImage: `url(${prop.thumbnailUrl})` }}
                                    onClick={() => handleTitleClick(prop.videoUrl)}
                                ></div>
                                <div className={styles.title_div}>
                                    <p>{prop.title}</p>
                                    <p>{prop.channelTitle}</p>
                                </div>
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    size='2x'
                                    className={styles.trash}
                                    onClick={() => deleteList(prop.videoId)} />
                            </div>
                        )) :
                        (
                            <div className={styles.list_div}>
                                <p>재생 목록이 비어있어요!</p>
                            </div>
                        )}
                </div>
            </div>
        </>
    )
}