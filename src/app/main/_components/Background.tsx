import React from 'react';
import { ModalProps } from '../_interface/ModalInterface';

const Background: React.FC<ModalProps> = ({ isModalOpen, closeModal }) => {

    if (!isModalOpen) return null;

    return React.createElement(
        'div'
    )

}

export default Background;