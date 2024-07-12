function CNTBOTTOM({itemList}){


     // let upperCount = itemList.filter(e => '상' === e).length;
     // let middleCount = itemList.filter(e => '상' === e).length;
     // let lowerCount = itemList.filter(e => '상' === e).length;

     // itemList.map(item=>{
     //     // console.log(item.difficultyName);
     //     let level = item.difficultyName;
     //     // console.log(level.filter(e => '상' === e).length);
     //     console.log(level);
     // });

    /** 상중하 각 몇 문제인지 총 몇 문제인지 **/
    return <div className="bottom-box">
        <div className="que-badge-group type01">
            <div className="que-badge-wrap">
                <span className="que-badge purple">하</span>
                <span className="num">?</span>
            </div>
            <div className="que-badge-wrap">
                <span className="que-badge green">중</span>
                <span className="num">?</span>
            </div>
            <div className="que-badge-wrap">
                <span className="que-badge yellow">상</span>
                <span className="num">?</span>
            </div>
        </div>
        <p className="total-num">총<span>{itemList.length}</span>문제</p>
    </div>
}
export default CNTBOTTOM;