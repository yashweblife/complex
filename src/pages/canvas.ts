import "../styles/common.scss"
import "../styles/canvas.scss"
import { Vector } from "../lib";

import { Dashboard } from "../components/Dashboard/Dashboard";

const dashboard1 = new Dashboard({
    header_tabs:[1,2,3].map((i:number)=>document.querySelector(`#dashboard-header-tab${i}`) as HTMLElement),
    preview_tabs:[1,2,3].map((i:number)=>document.querySelector(`#dashboard-preview-tab${i}`) as HTMLElement),
    control_tabs:[1,2,3].map((i:number)=>document.querySelector(`#dashboard-controls-tab${i}`) as HTMLElement),
    optional_callbacks:[displayFallingBalls,displayBrownianMotion,displayGravitationalAttraction]
})

function drawArc(){
    const canvas = document.querySelector('#canvas-1') as HTMLCanvasElement;
    canvas.width=300;
    canvas.height=300;
    const c = canvas.getContext('2d') as CanvasRenderingContext2D;
    c.beginPath();
    c.arc(100, 100, 30, 0, Math.PI * 2, false);
    c.fill();
}drawArc();

function fallingBalls(){
    const canvas = document.querySelector('#canvas-2') as HTMLCanvasElement;
    const c = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = 300;
    canvas.height = 300;
    const balls:{x:number,y:number,radius:number,color:string,velocity:{x:number,y:number}}[] = [];
    const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
    const gravity = 1;
    const friction = 0.99;
    for(let i=0;i<20;i++){
        balls.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 30,
            color: colors[Math.floor(Math.random() * colors.length)],
            velocity: {
                x: (Math.random() - 0.5) * 4,
                y: 1
            }
        })
    }
    function animate(){
        c.clearRect(0, 0, canvas.width, canvas.height);
        for(let i=0;i<balls.length;i++){
            c.beginPath();
            c.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2, false);
            c.fillStyle = balls[i].color;
            c.fill();
            if(balls[i].y + balls[i].radius + balls[i].velocity.y > canvas.height){
                balls[i].velocity.y = -balls[i].velocity.y * friction;
            } else {
                balls[i].velocity.y += gravity;
            }
            if(balls[i].x + balls[i].radius + balls[i].velocity.x > canvas.width || balls[i].x - balls[i].radius + balls[i].velocity.x < 0){
                balls[i].velocity.x = -balls[i].velocity.x;
            }
            balls[i].x += balls[i].velocity.x;
            balls[i].y += balls[i].velocity.y;
        }
        requestAnimationFrame(animate);
    }
    animate();
}fallingBalls();


function displayFallingBalls(){
    //Get Canvas from DOM
    const canvas = document.querySelector('#canvas-3') as HTMLCanvasElement;
    const c = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.height = canvas.width
    const {width, height} = canvas;
    //Create a ball object
    const ball = {
        pos:{
            x:width/2,
            y:height/2
        },
        vel:{
            x:0,
            y:0
        },
        acc:{
            x:0,
            y:0
        },
        radius:10,
        color:'red',
    }
    const gravity = 0.5;
    //Create an animation loop
    let animation_by_id = 0;
    function animate(){
        //Clear the canvas
        c.clearRect(0, 0, width, height);
        //Update the ball's position
        ball.vel.x += ball.acc.x;
        ball.vel.y += ball.acc.y;
        ball.pos.x += ball.vel.x;
        ball.pos.y += ball.vel.y;

        //Apply gravity as an acceleration
        ball.acc.y = gravity;

        //Draw the ball
        c.arc(ball.pos.x, ball.pos.y, ball.radius, 0, Math.PI * 2, false);
        c.fillStyle = ball.color;
        c.fill();

        //Request the next frame
        animation_by_id = requestAnimationFrame(animate);
    }
    function stopAnimation(){
        cancelAnimationFrame(animation_by_id)
    }
    return({
        start:animate,
        stop:stopAnimation
    })
}
function displayBrownianMotion(){
    const canvas = document.querySelector('#canvas-4') as HTMLCanvasElement;
    const c = canvas.getContext('2d') as CanvasRenderingContext2D;
    const {width, height} = canvas;
    const balls:any[] = []
    for(let i=0;i<20;i++){
        const ball = {
            pos:{x:Math.floor(Math.random()*width),y:Math.floor(Math.random()*height)},
            vel:{x:Math.floor((Math.random()-0.5)*2),y:Math.floor((Math.random()-0.5)*2)},
            acc:{x:0,y:0},
            radius:Math.random()*10,
            color:['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'][Math.floor(Math.random()*4)]
        }
        balls.push(ball)
    }
    function updatePosition(b:any){
        b.vel.x += b.acc.x;
        b.vel.y += b.acc.y;
        b.pos.x += b.vel.x;
        b.pos.y += b.vel.y;
    }
    function drawBall(b:any){
        c.beginPath();
        c.fillStyle = b.color;
        c.arc(b.pos.x, b.pos.y, b.radius, 0, Math.PI*2, false);
        c.fill();
        c.closePath();
    }
    let animation_by_id = 0;
    function animate(){
        c.clearRect(0,0,width,height);
        for(let i=0;i<balls.length;i++){
            updatePosition(balls[i])
            drawBall(balls[i]);
        }
        animation_by_id = requestAnimationFrame(animate);
    }
    function stopAnimation(){
        cancelAnimationFrame(animation_by_id)
    }
    return({
        start:animate,
        stop:stopAnimation
    })
}
function displayGravitationalAttraction(){
    function animate(){}
    function stopAnimation(){}
    return({
        start:animate,
        stoip:stopAnimation
    })
}

