import React from 'react';
import styles from '../../../../styles/main/background.module.css';
import { BackGround } from '../../_interface/ModalInterface';

interface BackgroundImageItemProps {
    background: BackGround;
    isLocked: boolean;
    onSave: (backgroundId: string) => void;
}

const BackgroundImageItem: React.FC<BackgroundImageItemProps> = ({ background, isLocked, onSave }) => {
    return (
        <div
            key={background.id}
            className={`${styles.img} ${isLocked ? styles.locked : ''}`}
            title={isLocked ? '' : background.fileName}
            onClick={() => !isLocked && onSave(background.id)}
        >
            {isLocked && <span className={styles.lockIcon}>🔒</span>}
        </div>
    );
};

export default BackgroundImageItem;