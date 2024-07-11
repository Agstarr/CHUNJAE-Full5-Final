function VIEWTOP({itemList}){
    return <>
        <div className="view-top">
            <div className="paper-info">
                <span>수학</span>
                선생님 이름
            </div>
            <button className="btn-default btn-research">
               <i className="research"></i>재검색
            </button>
            <button className="btn-default pop-btn">출제범위</button>
        </div>
    </>
}
export default VIEWTOP;