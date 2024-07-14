import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import PdfTest from "./pdfTest/PdfTest";
import generatePDF from "react-to-pdf"
import PdfSave from "./pdfTest/PdfSave";

function S3stepbtn(){

    const [response, setResponse]=useState([]);
    const targetRef = useRef();

    useEffect(()=>{
        const paperList=async ()=>{
            try{
                const apiUrl = "api/item/exam/item-list"
                const data = {
                    examId: "1515"
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


    return <>
        <Link to="/"><button className="btn-step">STEP 2 문항 편집</button></Link>
        {/*<Link><button className="btn-step next"*/}
        {/*              onClick={()=>savePaper()}>시험지 저장하기</button></Link>*/}
        {/*<PdfTest ref={targetRef} itemList={response}></PdfTest>*/}
        <PdfSave data={response}></PdfSave>
    </>
}
export default S3stepbtn;