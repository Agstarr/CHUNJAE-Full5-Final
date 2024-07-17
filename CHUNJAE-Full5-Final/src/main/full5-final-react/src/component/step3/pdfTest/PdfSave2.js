import imgSrc from './img.png';
import imgSrc2 from './img2.png';
import "./pdf2.css"
import React, {useEffect, useRef, useState} from "react";

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


function PdfSave2() {
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
            imgHeightSum += img.offsetHeight;
            // console.log(img.clientHeight);
            if(img.clientHeight > img.offsetHeight){
                img.style.height = img.offsetHeight * 2;
            }else if(imgHeightSum > 1800){
                const nextPaper = document.createElement('div');
                const nextPage = document.createElement('div');
                const paper = document.getElementById("paper");
                nextPage.appendChild(img);
                nextPaper.appendChild(nextPage);
                paper.appendChild(nextPaper);
                nextPage.className = 'exam';
                nextPaper.className = 'paper';
                // console.log('......',document.getElementById('firstPage').previousSibling);
            }
        })
    }, []);

    return <div id="paper" className="parent-container container" >
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

export default PdfSave2;



