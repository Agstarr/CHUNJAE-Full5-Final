import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactDOMServer from 'react-dom/server';
import html2pdf from "html2pdf.js/src";
import PdfComp from "./PdfComp";
import PdfComp2 from "./PdfComp2";
import 'jspdf-autotable';

const PdfSave = ({data}) => {
    const handleGeneratePDF = () => {

        // PDF로 만들 컴포넌트를 HTML 문자열로 변환
        const htmlContent = ReactDOMServer.renderToStaticMarkup(
            <PdfComp2 data={data} />
        );

        const options = {
            margin: 0.25,  // 페이지 여백 (단위: 인치)
            filename: 'test.pdf',  // PDF 파일 이름
            image: { type: 'jpeg', quality: 0.98 },  // 이미지 포맷 및 품질
            html2canvas: { scale: 2 },  // HTML을 캔버스로 변환할 때의 스케일
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait'}  // jsPDF 설정
        };

        // // HTML을 PDF로 변환하고 저장
        html2pdf().from(htmlContent).set(options).save();

    };

    data.map(item=>{
        console.log(item.passageHtml)
    })

    return <>
        <button className="btn-step next"
                onClick={handleGeneratePDF}>시험지 저장하기</button>
    </>
};

export default PdfSave;
