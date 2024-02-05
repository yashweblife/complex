import { Vector } from "..";

export class Canvas{
    public dom:HTMLCanvasElement = document.createElement('canvas');
    public c:CanvasRenderingContext2D = this.dom.getContext('2d') as CanvasRenderingContext2D;
    public size:Vector = new Vector(300,300);
    constructor(){}
}