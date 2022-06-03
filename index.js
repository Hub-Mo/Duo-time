let box = document.getElementById('box');
boxRect = box.getBoundingClientRect();
let ball = document.getElementById('ball')
ball.setAttribute('class', 'theBall');
ball.style.position = 'absolute';
ball.style.transition = '3s';
console.log(ball);
setInterval(()=>{
    let rect = ball.getBoundingClientRect();
    ball.style.left = rect.left + 100 + 'px' ;
}, 300)



   /* if ( === 9) {
        = 850;
        let righty = boxRect.right - 57;
        ball.style.left = righty+'px'
        ball.style.transform = 'rotate(1000deg)'
    }
    else if (rect.x === 850){
        rect.x = 9; 
        ball.style.left = boxRect.left+'px'
        ball.style.transform = 'rotate(0deg)'
    }
}, 3000)*/