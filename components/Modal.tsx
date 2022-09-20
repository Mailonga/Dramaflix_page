import MuiModal from "@mui/material/Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "../Atoms/modalAtom"

function Modal(){
    const showModal = useRecoilValue(modalState)
    return <MuiModal open={showModal}>
        <>
           Modal
        </>
    </MuiModal>
}

export default Modal