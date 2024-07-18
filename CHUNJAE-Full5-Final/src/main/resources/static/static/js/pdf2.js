/* 이미지 배열 생성 */
let imgList = [];
for(let i=0; i<40; i++){
    const img = document.createElement('img');
    if(i%2===0){
        img.src = '/static/image/temp.svg'
    }else if(i%3===1){
        img.src = '/static/image/img2.png';
    }else{
        img.src = '/static/image/img.png';
    }
    img.alt = '이미지'+(i+1);
    img.className = 'img';
    imgList[i] = img;
}
let index = 0; //이미지 번호

window.onload = function (){
    /* 화면에 이미지 추가 */
    imgList.forEach(img=>{

        /* 첫번째 문제인 경우 */
        if(index===0){
            // 헤더
            const header = document.createElement('div');
            const title = document.createElement('div');
            const title_p = document.createElement('p');
            const gradeNameWrap = document.createElement('div');
            const gradeClass = document.createElement('div');
            const name = document.createElement('div');

            const title_txt = document.createTextNode("제목");
            const gradeClass_txt = document.createTextNode("학년 반 번");
            const name_txt = document.createTextNode("이름 :");

            header.className = 'header';

            title_p.appendChild(title_txt)
            title.appendChild(title_p);
            gradeClass.appendChild(gradeClass_txt);
            name.appendChild(name_txt);
            gradeNameWrap.appendChild(gradeClass);
            gradeNameWrap.appendChild(name);
            header.appendChild(title);
            header.appendChild(gradeNameWrap);

            // 요소 생성
            const newPage = document.createElement('div');
            const newPageInner = document.createElement('div');
            const leftRightWrap = document.createElement('div');
            const left = document.createElement('div');

            // 요소 클래스 이름 추가
            newPage.className = 'page';
            newPageInner.className = 'pageInner';
            leftRightWrap.className = 'leftRightWrap';
            left.className = 'left';

            left.appendChild(img);
            leftRightWrap.appendChild(left);
            newPageInner.appendChild(header);
            newPageInner.appendChild(leftRightWrap);
            newPage.appendChild(newPageInner);
            document.getElementById('wrap').appendChild(newPage);

            console.log(index);
        }else{
            /* left, right 계산 */
            let leftCount = 0;
            let left = null;
            let leftChildCount = 0;
            if(document.querySelectorAll('.left')!==null){
                leftCount =
                    document.querySelectorAll('.left').length;
                if(leftCount > 0){
                    left
                        = document.querySelectorAll('.left')[leftCount-1];
                    leftChildCount = left.childElementCount;
                }
            }
            let rightCount = 0;
            let right = null;
            let rightChildCount = 0;
            if(document.querySelectorAll('.right')!==null){
                rightCount =
                    document.querySelectorAll('.right').length;
                if(rightCount > 0){
                    right
                        = document.querySelectorAll('.right')[rightCount-1];
                    rightChildCount = right.childElementCount;
                }
            }

            const leftRightHeight
                = document.querySelectorAll('.leftRightWrap')[0].clientHeight;

            let leftChildHeight = 0;
            //이전 이미지가 left에 존재하고 있을 때
            if(document.querySelectorAll('.img')[index-1].parentElement.className==='left'){
                let LChildH = 0;
                for(let i=0; i<left.children.length; i++){
                    LChildH += (left.children[i]
                             .naturalHeight * 340)/left.children[i]
                             .naturalWidth;
                    // console.log('왼쪽 자식 이미지 : ',left.children[i]);
                }
                let curImgH = (img.naturalHeight * 340)/img.naturalWidth;
                leftChildHeight = LChildH+curImgH+15+40*(left.children.length+1);
            }
            // console.log('leftChildHeight..................', leftChildHeight);

            let rightChildHeight = 0;
            //이전 이미지가 right에 존재하고 있을 때
            if(document.querySelectorAll('.img')[index-1].parentElement.className==='right'){
                let RChildH = 0;
                for(let i=0; i<right.children.length; i++){
                    RChildH += (right.children[i]
                        .naturalHeight * 340)/right.children[i]
                        .naturalWidth;
                    console.log(index,' : 오른쪽 자식 이미지 : ',(right.children[i]
                        .naturalHeight * 340)/right.children[i]
                        .naturalWidth);
                }
                let curImgH = (img.naturalHeight * 340)/img.naturalWidth;
                rightChildHeight = RChildH+curImgH+15+40*(right.children.length+1);
                console.log(RChildH,', ',curImgH,', ',index)
            }
            console.log(index,' : rightChildHeight..................', rightChildHeight);


            /* left에 있는 문제 수 > || left에 있는 문제 높이의 합이 left의 높이보다 커지는 경우 */
            if(leftChildHeight > leftRightHeight){
                // 요소 생성
                const newRight = document.createElement('div');

                // 요소 클래스 이름 추가
                newRight.className = 'right';

                newRight.appendChild(img);
                left.insertAdjacentElement('afterend', newRight);
                // console.log('leftChildHeight > leftRightHeight.....',index);
            }
            /* left 문제 수 2개 미만 && left 다음 right가 없는 경우 */
            else if(leftChildHeight <= leftRightHeight && left.nextElementSibling===null){
                left.appendChild(img);
                // console.log('leftChildHeight <= leftRightHeight.....',index);
            }
            /* right 문제 수 2개 이상 && right 문제 높이가 전체 높이보다 큰 경우 */
            else if(rightChildHeight > leftRightHeight){
                console.log('right 높이 : ', right.firstChild.naturalHeight)
                const newPage = document.createElement('div');
                const newPageInner = document.createElement('div');
                const leftRightWrap = document.createElement('div');
                const left = document.createElement('div');

                // 요소 클래스 이름 추가
                newPage.className = 'page';
                newPageInner.className = 'pageInner';
                leftRightWrap.className = 'leftRightWrap';
                left.className = 'left';

                left.appendChild(img);
                leftRightWrap.appendChild(left);
                newPageInner.appendChild(leftRightWrap);
                newPage.appendChild(newPageInner);
                document.getElementById('wrap').appendChild(newPage);
                // console.log('rightChildHeight > leftRightHeight.....',index);
            }
            /* right 문제 수 2개 미만 && right 존재하는 경우 */
            else if(rightChildHeight <= leftRightHeight && right !== null){
                right.appendChild(img);
                // console.log('rightChildHeight <= leftRightHeight.....',index);
            }

        }

        index++; // 이미지 번호+1
    })

}


function downloadPDF() {
    const pages = document.querySelectorAll('.page'); // 클래스 이름이 'page'인 모든 요소 선택

    // Promise 배열을 사용하여 각 페이지를 순차적으로 처리하고 PDF 생성
    Promise.all(Array.from(pages).map((page, index) => {
        return html2canvas(page, {
            scale: 2, // 해상도 조정
            allowTaint: true,
            useCORS: true
        }).then((canvas) => {
            return canvas.toDataURL('image/png'); // 각 페이지의 캔버스를 PNG 데이터 URL로 변환
        });
    })).then((pageImages) => {
        const pdf = new jspdf.jsPDF();

        const imgWidth = 210; // A4 가로 크기 (mm)
        const imgHeight = 297; // A4 세로 크기 (mm)

        // 각 페이지 이미지를 PDF에 추가
        pageImages.forEach((imageData, index) => {
            if (index > 0) {
                pdf.addPage(); // 새로운 페이지 추가
            }
            pdf.addImage(imageData, 'PNG', 0, 0, imgWidth, imgHeight);
        });

        pdf.save("download.pdf"); // PDF 저장
    }).catch((error) => {
        console.error('Error generating PDF:', error);
    });
}

