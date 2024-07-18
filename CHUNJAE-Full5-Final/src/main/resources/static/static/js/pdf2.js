/* 이미지 배열 생성 */
let imgList = [];
for(let i=0; i<15; i++){
    const img = document.createElement('img');
    if(i%2===0 || i===1 || i===7){
        img.src = '/static/image/img2.png'
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
            if(document.querySelectorAll('.img')[index-1].parentElement.className==='left'){
                let firstChildH = (document.querySelectorAll('.img')[index-1]
                    .naturalHeight * 340)/document.querySelectorAll('.img')[index-1]
                    .naturalWidth;
                let curImgH = (img.naturalHeight * 340)/img.naturalWidth;
                leftChildHeight = firstChildH+curImgH+40;
            }

            let rightChildHeight = 0;
            if(document.querySelectorAll('.img')[index-1].parentElement.className==='right'){
                let firstChildH = (document.querySelectorAll('.img')[index-1]
                    .naturalHeight * 340)/document.querySelectorAll('.img')[index-1]
                    .naturalWidth;
                let curImgH = (img.naturalHeight * 340)/img.naturalWidth;
                rightChildHeight = firstChildH+curImgH+40;
            }
            console.log('..................', rightChildHeight);


            /* left에 있는 문제 수 > || left에 있는 문제 높이의 합이 left의 높이보다 커지는 경우 */
            if((leftChildCount >= 2 && left.nextElementSibling===null) || leftChildHeight > leftRightHeight){
                // 요소 생성
                const newRight = document.createElement('div');

                // 요소 클래스 이름 추가
                newRight.className = 'right';

                newRight.appendChild(img);
                left.insertAdjacentElement('afterend', newRight);
            }
            /* left 문제 수 2개 미만 && left 다음 right가 없는 경우 */
            else if(leftChildCount < 2 && left.nextElementSibling===null){
                left.appendChild(img);
            }
            /* right 문제 수 2개 이상 && right 문제 높이가 전체 높이보다 큰 경우 */
            else if(rightChildCount >=2 || rightChildHeight > leftRightHeight){
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
            }
            /* right 문제 수 2개 미만 && right 존재하는 경우 */
            else if(rightChildCount < 2 && right !== null){
                right.appendChild(img);
            }

        }





        /* right 있는 문제 수 > 2
        or
        right에 있는 문제 높이의 합이 right의 높이보다 커지는 경우 */

        console.log(index);
        index++; // 이미지 번호+1
    })
}