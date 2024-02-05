import { Box, Canvas, Vector } from "..";

export class Ball{
    public pos:Vector;
    public vel:Vector;
    public acc:Vector;
    public r:Vector;
    public color:Vector;
    public forces:Vector[];
    
    constructor(){

    }
    /**
     * Repel the ball from a given vector
     * @param v Vector
     */
    repel(v:Vector){}
    /**
     * Attract the ball to a given vector
     * @param v Vector
     */
    attract(v:Vector){}
    /**
     * Check collision with another ball
     * @param b Ball
     */
    checkCollisionWithBall(b:Ball){}
    /**
     * Check collision with another box
     * @param b Box
     */
    checkCollisionWithBox(b:Box){}
    /**
     * Draw the ball
     * @param c Canvas
     */
    draw(c:Canvas){}
    /**
     * Add forces to the ball;
     * @param v Vector
     */
    addForce(v:Vector){}
    /**
     * Update the balls physics
     */
    update(){}
}