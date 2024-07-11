import React, { useState } from 'react';
import SUMMARY from "./SUMMARY";
import SIMILAR from "./SIMILAR";
import DELETE from "./DELETE";

function CNTRIGHT({itemList}) {
    const [tab, setTab] = useState(0);

    const renderContent = () => {
        switch (tab) {
            case 0:
                return <div><SUMMARY itemList={itemList}/></div>;
            case 1:
                return <div><SIMILAR itemList={itemList}/></div>;
            case 2:
                return <div><DELETE itemList={itemList}/></div>;
            default:
                return null;
        }
    };

    return (
        <div className="cnt-box type01">
            <div className="tab-wrap">
                <ul className="tab-menu-type01">
                    <li className={tab === 0 ? 'active' : ''}>
                        <a onClick={() => setTab(0)} className={tab === 0 ? 'active' : ''}>
                            문제지 요약
                        </a>
                    </li>
                    <li className={tab === 1 ? 'active' : ''}>
                        <a onClick={() => setTab(1)} className={tab === 1 ? 'active' : ''}>
                            유사 문제
                        </a>
                    </li>
                    <li className={tab === 2 ? 'active' : ''}>
                        <a onClick={() => setTab(2)} className={tab === 2 ? 'active' : ''}>
                            삭제 문항
                        </a>
                    </li>
                </ul>
                <div className="">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default CNTRIGHT;
