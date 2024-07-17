import imgSrc from './img.png';
import imgSrc2 from './img2.png';
import "./pdf2.css"
import React, {useEffect, useRef, useState} from "react";
import ReactToPdf from 'react-to-pdf';
import axios from "axios";

/*
const PdfSave2 = () => {
    const paperStyle = {
        height: '297mm'
        , width: '210mm'
        , border: '1px solid silver'
        , margin: '0 auto'
        , backgroundColor: '#f5f5f5'
    }

    const headerStyle = {
        border: '1px solid silver'
        , height: '20mm'
        , width: '90%'
        , margin: '10mm auto'
    }

    const imgStyle = {
        width: '90mm'
        , margin: '5mm 0'
    }

    const examStyle = {
        width: '90%'
        , height: '240mm'
        , margin: '10mm auto'
        , columnCount: '2'
    }

    /!** 2단 배치 *!/
    const divRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        let divH;
        let imgH;
        if (divRef.current) {
            divH = divRef.current.offsetHeight;
        }
        if (imgRef.current) {
            imgH = imgRef.current.offsetHeight;
        }
        console.log('Height of the div:', divH);
        console.log('Height of the img:', imgH);

        if(divH < imgH){

        }else{

        }

    }, []);


    return <>
        <div style={paperStyle}>
            <div style={headerStyle}>
                <div>테스트 시험지</div>
                <div>1학년 1반 1번</div>
                <div>이름 : 000</div>
            </div>
           <div style={examStyle}>
               <div ref={divRef} className="test test1">
                   <img ref={imgRef} src={imgSrc} alt="문제1" style={imgStyle}></img>
               </div>
               <div>
                   <img src={imgSrc} alt="문제2" style={imgStyle}></img>
               </div>
               <div>
                   <img src={imgSrc} alt="문제3" style={imgStyle}></img>
               </div>
               <div>
                   <img src={imgSrc} alt="문제4" style={imgStyle}></img>
               </div>
           </div>
        </div>
    </>
};

export default PdfSave2;
*/

// import './styles.css'; // 별도의 CSS 파일 또는 inline style로 스타일을 설정할 수 있습니다.

/*function PdfSave2() {
    const paperStyle = {
        height: '297mm'
        , width: '210mm'
        , border: '1px solid silver'
        , margin: '0 auto'
        , backgroundColor: '#f5f5f5'
    }

    const headerStyle = {
        border: '1px solid silver'
        , height: '20mm'
        , width: '90%'
        , margin: '10mm auto'
    }

    const imgStyle = {
        width: '90mm'
        , margin: '5mm 0'
    }

    const examStyle = {
        width: '90%'
        , height: '240mm'
        , margin: '10mm auto'
        , columnCount: '2'
    }

    /!** 2단 스크립트 *!/
    const firstColumnRef = useRef(null);
    const secondColumnRef = useRef(null);

    useEffect(() => {
        const images = document.querySelectorAll('.column div');

        images.forEach(div => {
            const img = div.querySelector('img');
            const imgHeight = img.clientHeight;
            const firstColumnHeight = firstColumnRef.current.clientHeight;

            if (imgHeight > firstColumnHeight) {
                secondColumnRef.current.appendChild(div);
            }
        });
    }, []);


    return <>
       {/!* <div className="container">
            <div ref={firstColumnRef} className="column">
                <img src={imgSrc2} alt="img1" style={imgStyle} />
                <img src={imgSrc2} alt="img2" style={imgStyle} />
                <img src={imgSrc} alt="img3" style={imgStyle} />
                <img src={imgSrc} alt="img4" style={imgStyle} />
                 추가적인 이미지도 첨부해야 할 것입니다
            </div>
            <div ref={secondColumnRef} className="column">
                 두 번째 열의 이미지는 자바스크립트를 통해 자동으로 추가될 것입니다
            </div>
        </div>*!/}
        <div className='container' style={paperStyle}>
            <div style={headerStyle}>
                <div>테스트 시험지</div>
                <div>1학년 1반 1번</div>
                <div>이름 : 000</div>
            </div>
            <div ref={firstColumnRef} className="column exam">
                <div className="image-wrapper">
                    <img src={imgSrc2} alt="img1" style={imgStyle} />
                </div>
                <div className="image-wrapper">
                    <img src={imgSrc2} alt="img1" style={imgStyle} />
                </div>
                <div className="image-wrapper">
                    <img src={imgSrc} alt="img1" style={imgStyle} />
                </div>
                <div className="image-wrapper">
                    <img src={imgSrc} alt="img1" style={imgStyle} />
                </div>
            </div>
            <div ref={secondColumnRef} className="column">
                {/!* 두 번째 열의 이미지는 자바스크립트를 통해 자동으로 추가될 것입니다 *!/}
            </div>
        </div>
    </>
}

export default PdfSave2;*/


/** 이걸로 다시 해 보기... */
/*function PdfSave2() {
    const paperStyle = {
        height: '297mm'
        , width: '210mm'
        , border: '1px solid silver'
        , margin: '0 auto'
        , backgroundColor: '#f5f5f5'
    }

    const headerStyle = {
        border: '1px solid silver'
        , height: '20mm'
        , width: '90%'
        , margin: '10mm auto'
    }

    const imgStyle = {
        width: '90mm'
        , margin: '5mm 0'
    }

    const examStyle = {
        width: '90%'
        , height: '240mm'
        , margin: '10mm auto'
        , columnCount: '2'
    }



    const [images, setImages] = useState([]);
    const firstColumnRef = useRef(null);
    const secondContainerRef = useRef(null);

    const imgdivRef = useRef(null);

    useEffect(() => {
        const imgElements = document.querySelectorAll('.imgdiv');

        let currentContainer = firstColumnRef.current;
        let overflowed = false;

        let imgdivContainer = imgdivRef.current;

        console.log("imgdiv...", imgdivContainer.offsetHeight);

        imgElements.forEach(img => {

            console.log("이미지...", img.offsetHeight);
            if (overflowed) {
                secondContainerRef.current.appendChild(img);
            } else if (img.offsetHeight > currentContainer.offsetHeight) {
                overflowed = true;
                secondContainerRef.current.appendChild(img);
            } else {
                currentContainer.appendChild(img);
            }
        });
    }, []);

    return <div className="parent-container container"  >
        <div className="parentContainer" style={paperStyle}>
            <div style={headerStyle}>
                <div>테스트 시험지</div>
                <div>1학년 1반 1번</div>
                <div>이름 : 000</div>
            </div>
            <div className="firstContainer exam" ref={firstColumnRef}>
                <div className="imgdiv" ref={imgdivRef}>
                    <img src={imgSrc2} alt="img" style={imgStyle} />
                </div>
                <div className="imgdiv" ref={imgdivRef}>
                    <img src={imgSrc2} alt="img1" style={imgStyle} />
                </div>
                <div className="imgdiv" ref={imgdivRef}>
                    <img src={imgSrc} alt="img1" style={imgStyle} />
                </div>
                <div className="imgdiv" ref={imgdivRef}>
                    <img src={imgSrc} alt="img1" style={imgStyle} />
                </div>
            </div>
        </div>
        <div className="secondContainer" style={paperStyle} ref={secondContainerRef}></div>
    </div>
}

export default PdfSave2;*/


/*function PdfSave2() {
    const paperStyle = {
        height: '297mm'
        , width: '210mm'
        , border: '1px solid silver'
        , margin: '0 auto'
        , backgroundColor: '#f5f5f5'
    }

    const headerStyle = {
        border: '1px solid silver'
        , height: '20mm'
        , width: '90%'
        , margin: '10mm auto'
    }

    const imgStyle = {
        width: '90mm'
        , margin: '15px 0'
    }

    const examStyle = {
        width: '90%'
        , height: '240mm'
        , margin: '10px auto'
        , columnCount: '2'
    }



    const [images, setImages] = useState([]);
    const firstColumnRef = useRef(null);
    const secondContainerRef = useRef(null);

    const imgdivRef = useRef(null);

    useEffect(() => {
        const imgElements = document.querySelectorAll('.imgdiv');

        let currentContainer = firstColumnRef.current;
        let overflowed = false;

        let imgdivContainer = imgdivRef.current;

        let imgHeightSum = 0;


        imgElements.forEach(img => {
            // console.log(currentContainer.offsetHeight*2)
            imgHeightSum += img.offsetHeight;
            // console.log(img.clientHeight);
            if(img.clientHeight > img.offsetHeight){
                img.style.height = img.offsetHeight * 2;
            }else if(imgHeightSum > (currentContainer.offsetHeight)*2){
                const nextPaper = document.createElement('div');
                const nextPage = document.createElement('div');
                const paper = document.getElementById("paper");
                if(img.nextElementSibling+imgHeightSum > (currentContainer.offsetHeight-30)*2){
                    nextPage.appendChild(img);
                    nextPaper.appendChild(nextPage);
                    paper.appendChild(nextPaper);
                    nextPage.className = 'exam';
                    nextPaper.className = 'paper';
                }
                // console.log('......',document.getElementById('firstPage').previousSibling);
            }
            console.log("전체 길이 : ",(currentContainer.offsetHeight-30)*2);
            console.log("이미지 : ",img.clientHeight);
            console.log("이미지 길이 합 : ",imgHeightSum);
            console.log('=========================================');
        })
    }, []);

    const ref = React.createRef();

    return <div id="paper" className="parent-container container" ref={ref}>
        <div className="firstPaper paper">
            <div style={headerStyle}>
                <div>테스트 시험지</div>
                <div>1학년 1반 1번</div>
                <div>이름 : 000</div>
            </div>
            <div id="firstPage" className="firstContainer exam" ref={firstColumnRef}>
                <div className="imgdiv" ref={imgdivRef}>
                    <img src={imgSrc2} alt="img" style={imgStyle} />
                </div>
                <div className="imgdiv" ref={imgdivRef}>
                    <img src={imgSrc2} alt="img1" style={imgStyle} />
                </div>
                <div className="imgdiv" ref={imgdivRef}>
                    <img src={imgSrc} alt="img1" style={imgStyle} />
                </div>
                <div className="imgdiv" ref={imgdivRef}>
                    <img src={imgSrc} alt="img1" style={imgStyle} />
                </div>
            </div>
        </div>
    </div>
}

export default PdfSave2;*/


import { createRoot } from 'react-dom/client';

const PdfSave2 = () => {
    const [questions, setQuestions] = useState([]);
    const [pages, setPages] = useState([]);
    const containerRef = useRef(null);

    useEffect(()=>{
        const paperList=async ()=>{
            try{
                const apiUrl = "api/item/exam/item-list"
                const data = {
                    examId: "1511"
                    // examId: "1517"
                }

                /** 6번 API */
                const response=await axios
                    .post(apiUrl, data);
                setQuestions([response.data.itemList]);
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

    useEffect(() => {
        if (questions.length > 0) {
            const splitQuestionsIntoColumns = () => {
                const container = containerRef.current;
                const maxHeight = container ? container.clientHeight / 2 : 297 * 4;
                const updatedPages = [[]];
                let currentPage = [[], []];
                let currentHeights = [0, 0];

                questions.forEach((question, index) => {
                    const questionElement = (
                        <div key={question.id} className="question">
                            {question.passage}
                        </div>
                    );

                    // 임시 컨테이너 생성
                    const tempContainer = document.createElement('div');
                    tempContainer.style.position = 'absolute';
                    tempContainer.style.visibility = 'hidden';
                    document.body.appendChild(tempContainer);

                    // 임시 컨테이너에 질문 렌더링
                    const root = createRoot(tempContainer);
                    root.render(questionElement);

                    const questionHeight = tempContainer.clientHeight;
                    document.body.removeChild(tempContainer);

                    const columnToUse = currentHeights[0] <= currentHeights[1] ? 0 : 1;

                    if (currentHeights[columnToUse] + questionHeight > maxHeight) {
                        if (columnToUse === 0) {
                            currentPage[1].push(questionElement);
                            currentHeights[1] += questionHeight;
                        } else {
                            updatedPages.push(currentPage);
                            currentPage = [[], []];
                            currentHeights = [0, 0];
                            currentPage[0].push(questionElement);
                            currentHeights[0] += questionHeight;
                        }
                    } else {
                        currentPage[columnToUse].push(questionElement);
                        currentHeights[columnToUse] += questionHeight;
                    }
                });

                updatedPages.push(currentPage);
                setPages(updatedPages);
            };

            splitQuestionsIntoColumns();
        }
    }, [questions]);

    return (
        <div className="exam-paper" ref={containerRef}>
            {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="page">
                    <div className="column">
                        {page[0] && page[0].map((question, questionIndex) => (
                            <div key={questionIndex} className="question">
                                {question}
                            </div>
                        ))}
                    </div>
                    <div className="column">
                        {page[1] && page[1].map((question, questionIndex) => (
                            <div key={questionIndex} className="question">
                                {question}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

};
export default PdfSave2;





