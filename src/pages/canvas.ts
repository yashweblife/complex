import "../styles/common.scss"
import "../styles/canvas.scss"
import { Vector } from "../lib";

import { Dashboard } from "../components/Dashboard/Dashboard";

const dashboard1 = new Dashboard({
    header_tabs:[1,2,3].map((i:number)=>document.querySelector(`#dashboard-header-tab${i}`) as HTMLElement),
    preview_tabs:[1,2,3].map((i:number)=>document.querySelector(`#dashboard-preview-tab${i}`) as HTMLElement),
    control_tabs:[1,2,3].map((i:number)=>document.querySelector(`#dashboard-controls-tab${i}`) as HTMLElement),
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
