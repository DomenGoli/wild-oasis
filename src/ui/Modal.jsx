import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { cloneElement } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: all 0.5s;
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
        color: var(--color-grey-500);
    }
`;

// 1.) create context
const ModalContext = createContext();

// 2.) create Parent
function Modal({ children }) {
    const [openName, setOpenName] = useState("");

    function handleCloseWindow() {
        setOpenName("");
    }
    function handleOpenWindow(opens) {
        setOpenName(opens);
    }

    return (
        <ModalContext value={{ openName, handleOpenWindow, handleCloseWindow }}>
            <div>{children}</div>
        </ModalContext>
    );
}
// 3.) create children
function Open({ children, opens }) {
    const { handleOpenWindow } = useContext(ModalContext);
    return cloneElement(children, { onClick: () => handleOpenWindow(opens) });
    // cloniramo children, da lahko dodamo onClick prop
}

function Window({ children, name }) {
    const { openName, handleCloseWindow } = useContext(ModalContext);

    const {ref} = useOutsideClick(handleCloseWindow);
    // const ref = useRef(); // za rocno izbiro elementa

    //Effekt za zapiranje modala z klikom izvn okna. Mora biti posebaj, ker moramo tudi onemogocit funkcijo z clean
    // useEffect(function () {
    //     function handleClick(e) {
    //         if (ref.current && !ref.current.contains(e.target)) handleCloseWindow();
    //     }

    //     document.addEventListener("click", handleClick, true); // true; event bo handlan v capturing phase, namesto v bubling 

    //     return () => document.removeEventListener("click", handleClick, true);
    // }, [handleCloseWindow]);

    if (name !== openName) return null;

    return createPortal(
        <Overlay>
            <StyledModal ref={ref}>
                <Button onClick={handleCloseWindow}>
                    <HiXMark />
                </Button>
                <div>
                    {cloneElement(children, {
                        onCloseModal: handleCloseWindow,
                    })}
                </div>
                {/* moramo dodati onCloseModal props, da lahko tudi nas Form zapre Modal */}
            </StyledModal>
        </Overlay>,
        document.body
    );
}

// 4.) add children as properties
Modal.Open = Open;
Modal.Window = Window;

// Old vezija
// function Modal({ children, onClose }) {
//     return createPortal(
//         <Overlay>
//             <StyledModal>
//                 <Button onClick={onClose}>
//                     <HiXMark />
//                 </Button>
//                 <div>{children}</div>
//             </StyledModal>
//         </Overlay>,
//         document.body
//     );
// }

export default Modal;
