window.onload = function (){

    let img = document.createElement('img');
    img.src = '/static/image/img.png';
    let imgdiv = document.createElement('div');
    imgdiv.appendChild(img);
    imgdiv.className = 'imgdiv';

    let page_inner = document.querySelectorAll('.page_inner')[0];
    let imgdivList = [];
    for(let i=0; i<4; i++){
        imgdivList[i] = imgdiv;
    }
    let imgHeightSum = 0;
    let i = 1;

    imgdivList.forEach(img=>{
        imgHeightSum += img.firstElementChild.clientHeight;

/*        if(imgHeightSum > page_inner.clientHeight*2){
            const newPage = document.createElement('div');
            const newPage_inner = document.createElement('div');
            newPage_inner.appendChild(img);
            newPage.appendChild(newPage_inner);
            newPage_inner.className = 'page_inner';
            newPage.className = 'page';
            document.getElementById("wrap").appendChild(newPage);
        }*/

        console.log(img.parentElement);
        console.log(img.firstElementChild.clientHeight);
        console.log(imgdivList[0].clientHeight);

        //img.parentElement : class left

        if(img.parentElement.previousElementSibling===null){//1단일 때
            if(img.previousElementSibling!==null){//페이지의 첫번째 문제가 아닐 때
                if(img.parentElement.parentElement.childElementCount<2){// 페이지에 2단이 다 채워지기 전일 때
                    if(img.firstElementChild.clientHeight > imgdivList[0].clientHeight) {// 이미지가 정해진 칸 높이보다 클 떄
                        const right = document.createElement('div');
                        right.appendChild(img);
                        right.className = 'right';
                        document.getElementById("firstPage")
                            .appendChild(right);
                    }else{// 이미지가 정해진 칸 높이보다 작을 떄
                        console.log('childElementCount : ',img.parentElement.children);
                        if(img.parentElement.childElementCount>2){// 1단에 문제가 이미 2개일 때
                            const right = document.createElement('div');
                            right.appendChild(img);
                            right.className = 'right';
                            document.getElementById("firstPage")
                                .appendChild(right);
                        }else{

                        }
                    }

                }else{// 페이지에 2단이 다 채워졌을 때
                    const newPage = document.createElement('div');
                    const newPage_inner = document.createElement('div');
                    const newExam = document.createElement('div');
                    const left = document.createElement('div');
                    left.appendChild(img);
                    newExam.appendChild(left)
                    newPage_inner.appendChild(newExam);
                    newPage.appendChild(newPage_inner);
                    document.getElementById("wrap")
                        .appendChild(newPage);
                    left.className = 'left';
                    newExam.className = 'exam'
                    newPage_inner.className = 'page_inner';
                    newPage.className = 'page';
                }
            }else{//2단일 때
            }
        }
        i++;
        // console.log(img.clientHeight,imgHeightSum);
    });
    // console.log('이너 : ', page_inner.clientHeight)
}