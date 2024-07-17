window.onload = function (){

    /* 이미지 배열 생성 */
    let imgList = [];
    for(let i=0; i<8; i++){
        const img = document.createElement('img');
        if(i===7)
            img.src = '/static/image/img2.png';
        else if(i%2===0 || i===1){
            img.src = '/static/image/img2.png'
        }else{
            img.src = '/static/image/img.png';
        }
        img.alt = '이미지'+(i+1);
        imgList[i] = img;
    }
    let index = 0; //이미지 번호

    /* 화면에 이미지 추가 */
    imgList.forEach(img=>{

        /* left, right 계산 */
        let leftCount =
            document.querySelectorAll('.left').length;
        let left = document.querySelectorAll('.left')[leftCount-1];
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


        /* 첫번째 문제인 경우 or 2단(right)에서 문제가 넘치는 경우 */
        if(index===0){
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
            newPageInner.appendChild(leftRightWrap);
            newPage.appendChild(newPageInner);
            document.getElementById('wrap').appendChild(newPage);
        }

        // left 자식 문제 높이 합
        // 구해야 함!!!!!!!!!!!!!!!

        /* left에 있는 문제 수 > 2
        or
        left에 있는 문제 높이의 합이 left의 높이보다 커지는 경우 */
        if(left.childElementCount >= 2 && left.nextElementSibling===null){
            // 요소 생성
            const newRight = document.createElement('div');

            // 요소 클래스 이름 추가
            newRight.className = 'right';

            newRight.appendChild(img);
            left.insertAdjacentElement('afterend', newRight);
        }else if(left.childElementCount < 2){
            left.appendChild(img);
        }
        else if(rightChildCount >=2){
            console.log('right : ', right)
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
            console.log('fssdfdfsfdf',index)
        }else if(rightChildCount < 2 && right !== null){
            right.appendChild(img);
        }



        /* right 있는 문제 수 > 2
        or
        right에 있는 문제 높이의 합이 right의 높이보다 커지는 경우 */

        console.log(index);
        index++; // 이미지 번호+1
    })
}