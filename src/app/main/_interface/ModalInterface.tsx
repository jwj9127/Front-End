import { ReactNode } from 'react';

export interface ModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
}

export interface ASMRProps extends ModalProps {
    playAudio: (src: string, asmr: Asmr | null) => void;
    stopAudio: () => void;
    currentAsmr: Asmr | null;
}

export interface Asmr {
    id: string;
    fileName: string;
    url: string;
    contentType: string;
}

export interface BackGround {
    id: string;
    fileName: string;
    url: string;
}

export interface BackgroundImageItemProps {
    background: BackGround;
    isLocked: boolean;
    onSave: (backgroundId: string) => void;
}

export interface AsmrImageItemProps {
    background: Asmr;
    isLocked: boolean;
    onSave: (backgroundId: string) => void;
}

export interface ImageItemProps {
    id: string;
    fileName: string;
    imageUrl: string;
    isLocked: boolean;
    onSave: (id: string) => void;
    isActive?: boolean | null;
    lockIcon?: React.ReactNode;
    actionIcon?: React.ReactNode;
}

export interface Schedule {
    id: string;
    title: string;
    content: string;
    startDay: Date;
    endDay: Date;
}

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    checked: boolean;
}

export interface TodoListProps {
    todos: Todo[];
    onRemove: (id: string) => void;
    onToggle: (todo: { id: string; completed: boolean }) => void;
    onChangeSelectedTodo: (todo: Todo) => void;
    onInsertToggle: () => void;
}