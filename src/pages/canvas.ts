import "../styles/common.scss"
import "../styles/canvas.scss"

const canvas = document.querySelector('#canvas-1') as HTMLCanvasElement;
const c = canvas.getContext('2d') as CanvasRenderingContext2D;
c.beginPath();
c.arc(100, 100, 30, 0, Math.PI * 2, false);
c.fill();