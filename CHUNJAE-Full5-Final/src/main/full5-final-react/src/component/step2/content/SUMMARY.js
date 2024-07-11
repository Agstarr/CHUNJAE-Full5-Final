function SUMMARY(){
    return<div className="contents on">
        <div className="table half-type no-passage">
            <div className="fix-head">
                <span>이동</span>
                <span>번호</span>
                <span>단원명</span>
                <span>문제 형태</span>
                <span>난이도</span>
            </div>
            <div className="tbody">
                <div className="scroll-inner">
                    <div className="test ui-sortable" id="table-1">
                        <div className="col">
                            <a>
                                <span className="dragHandle ui-sortable-helper">
                                    <img src={require('../../../images/common/ico_move_type01.png')} alt="drag handle" />
                                </span>
                                {/* api 받아오는 */}
                                <span className=""></span>
                                <span className=""></span>
                                <span className="tit">
                                    {/* tooltip 내용 api 처리 */}
                                    <div className="tooltip-wrap">
                                        <button className="btn-tip"></button>
                                    </div>
                                </span>
                                <span className=""></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-box">
            <div className="que-badge-group">
                <div className="que-badge-wrap">
                    <span className="que-badge gray">
                        객관식
                    </span>
                    <span className="num">숫자</span>
                </div>
                <div className="que-badge-wrap">
                     <span className="que-badge gray">
                        주관식
                    </span>
                    <span className="num">숫자</span>
                </div>
            </div>
        </div>
    </div>
}
export default SUMMARY;