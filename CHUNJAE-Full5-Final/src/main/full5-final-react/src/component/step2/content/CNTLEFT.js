import React, {useState} from 'react';
import CNTLIST from "./CNTLIST";
import CNTBOTTOM from "./CNTBOTTOM";


function CNTLEFT({itemList}) {

    return <>
        <div className="cnt-box">
            <div className="cnt-top">
                <span className="title">문제 목록</span>
                <div className="right-area">
                    <div className="select-wrap">
                        <ul className="select-list">

                        </ul>
                    </div>
                    <div className="select-wrap">

                        <ul className="select-list">

                        </ul>
                    </div>
                </div>
            </div>
            <CNTLIST itemList={itemList}/>
            <CNTBOTTOM itemList={itemList}/>
        </div>
    </>
}

export default CNTLEFT;
