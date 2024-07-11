import {useEffect, useState} from "react";
import axios from "axios";
import VIEWTOP from "./content/VIEWTOP";
import VIEWBOTTOM from "./content/VIEWBOTTOM";

function S2content() {

    const [response, setResponse] = useState([]);

    useEffect(() => {
        const List = async () => {
            try {
                const url = '/api/item-img/exam-list/item-list'

                /** STEP 1 에서 넘겨주는 examId  **/
                const data = {
                    examIdList: ["500"]
                };

                const response = await axios.post(url, data);
                console.log(response.data.itemList);
                setResponse(response.data.itemList);
            } catch (error) {
                console.error('Error response api .... ', error)
            }
        };
        List();
    }, [])

    return <div className="view-box">
        {/* 컨텐트 정보 */}
        <VIEWTOP itemList={response}/>
        {/* 컨텐트 리스트, 문제 요약, 유사, 삭제 */}
        <VIEWBOTTOM itemList={response}/>
    </div>
}

export default S2content;