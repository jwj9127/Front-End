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