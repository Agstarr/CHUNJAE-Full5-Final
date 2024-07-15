/*
import React, { useRef, useEffect, useState } from 'react';
import './pdf2.css';

const PdfSave2 = ({ data }) => {
    const [pageHeight, setPageHeight] = useState(0);
    const questionRefs = useRef([]);

    useEffect(() => {
        // 문제들의 높이 측정
        let totalHeight = 0;
        questionRefs.current.forEach((questionRef) => {
            if (questionRef) {
                totalHeight += questionRef.clientHeight;
            }
        });
        setPageHeight(totalHeight);
    }, [data]);

    return (
        <div className="exam-container">
            {data.map((item, index) => (
                <div key={index} className="question" ref={(element) => (questionRefs.current[index] = element)}>
                    <h2>Question {index + 1}</h2>
                    <p>{item.passage}</p>
                </div>
            ))}
        </div>
    );
};

export default PdfSave2;
*/

