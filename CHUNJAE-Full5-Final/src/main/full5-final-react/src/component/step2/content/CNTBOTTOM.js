function CNTBOTTOM(){
    return <div className="bottom-box">
        <div className="que-badge-group type01">
            <div className="que-badge-wrap">
                <span className="que-badge purple">하</span>
                <span className="num">하 몇개</span>
            </div>
            <div className="que-badge-wrap">
                <span className="que-badge green">중</span>
                <span className="num">중 몇개</span>
            </div>
            <div className="que-badge-wrap">
                <span className="que-badge yellow">상</span>
                <span className="num">상 몇개</span>
            </div>
        </div>
        <p className="total-num">총<span>?</span>몇개</p>
    </div>
}
export default CNTBOTTOM;