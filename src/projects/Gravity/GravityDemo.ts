import { Ball, Canvas, Vector } from "../../lib";

export class Gravity{
    public balls:Ball[] = [];
    public canvas:Canvas = new Canvas();
    public g:number = 0.9;

    constructor(){
        for(let i=0;i<20;i++){
            const ball = new Ball();
            ball.addForce(new Vector(0,0.8));
            this.balls.push(ball)
        }
    }
    update(){
        for(let i=0;i<this.balls.length;i++){
            this.balls[i].update();
        }    
    }
}