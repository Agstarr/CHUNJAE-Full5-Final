import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import PdfSave from "./pdfTest/PdfSave";
import PdfComp from "./pdfTest/PdfComp";
import PdfComp2 from "./pdfTest/PdfComp2";
import PdfSave2 from "./pdfTest/PdfSave2";

function S3stepbtn(){

    const [response, setResponse]=useState([]);
    const targetRef = useRef();

    useEffect(()=>{
        const paperList=async ()=>{
            try{
                const apiUrl = "api/item/exam/item-list"
                const data = {
                    // examId: "1515"
                    examId: "1517"
                }

                /** 6번 API */
                const response=await axios
                    .post(apiUrl, data);
                setResponse(response.data.itemList);
                // console.log(response.data.itemList);

                response.data.itemList.map(item=>{
                    // console.log(item.question);
                })
            }catch (error){
                console.log(error,'.....error.....');
            }
        }
        paperList();
    },[]) // [] : 한 번만 호출

/*    const submit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/pdf', { response });
            console.log('successful!!!');
        } catch (error) {
            console.log(error,'.....error.....');
        }
    };*/

    return <>
        <Link to="/"><button className="btn-step">STEP 2 문항 편집</button></Link>
        {/*<Link><button className="btn-step next"*/}
        {/*              onClick={()=>savePaper()}>시험지 저장하기</button></Link>*/}
        {/*<PdfComp ref={targetRef} itemList={response}></PdfComp>*/}
        {/*<PdfSave data={response}></PdfSave>*/}
        {/*<PdfSave2 data={response}></PdfSave2>*/}
        <Link to="/pdf"></Link>
{/*        <form onSubmit={submit}>
            <button type="submit">시험지 저장하기</button>
        </form>*/}
    </>
}
export default S3stepbtn;