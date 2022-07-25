import React from "react";
import ModalPortal from "./ModalPortal";
import { Flex } from "../elements";

const Modal = ({ children, close }) => {
    return (
        <ModalPortal>
            <Flex
                styles={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    height: "100%",
                    top: 0,
                    left: 0,
                    zIndex: 100,
                }}
                _onClick={close}>
                {children}
            </Flex>
        </ModalPortal>
    );
};

export default Modal;