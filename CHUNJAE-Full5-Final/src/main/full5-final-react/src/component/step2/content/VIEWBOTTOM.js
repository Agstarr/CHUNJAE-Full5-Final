import CNTLEFT from "./CNTLEFT";
import CNTRIGHT from "./CNTRIGHT";

function VIEWBOTTOM({itemList}){
    return <>
        <div className="view-bottom type01">
            {/* 문제 목록 */}
            <CNTLEFT itemList={itemList}/>
            {/* 문제지 요약, 유사문제, 문제삭제 */}
            <CNTRIGHT itemList={itemList}/>
        </div>
    </>
}
export default VIEWBOTTOM;