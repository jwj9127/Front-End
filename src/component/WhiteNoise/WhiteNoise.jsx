import Modal from 'react-modal';

export default function WhiteNoise() {


    const chatStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            zIndex: 1,
            position: "static",
            top: 0,
            left: 0,
        },
        content: {
            width: "400px",
            height: "500px",
            zIndex: 150,
            position: "fixed",
            top: "53%",
            left: "81%",
            transform: "translate(-50%, -50%)",
            borderRadius: "1rem",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            overflow: "auto",
            padding: 0
        },
    };

    return (
        <>
            <Modal isOpen={true} style={chatStyles}>
                <div>WhiteNoise</div>
            </Modal>
        </>
    );
}