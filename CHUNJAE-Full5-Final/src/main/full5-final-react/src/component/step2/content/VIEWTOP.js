import ModalTest from "./ModalTest";
import {useState} from "react";

function VIEWTOP({itemList}){

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "unset";
    };

    return <>
        <div className="view-top">
            <div className="paper-info">
                <span>수학</span>
                선생님 이름
            </div>
            {/** 신규 시험지 만들기시 활성화 / 선택한 시험지 선택시 비활성화 **/}
            <button className="btn-default btn-research">
               <i className="research"></i>재검색
            </button>
            <button onClick={openModal} className="btn-default pop-btn">출제범위</button>
            <ModalTest data={itemList} open={modalOpen} onClose={closeModal} />
        </div>
    </>
}
export default VIEWTOP;