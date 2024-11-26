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