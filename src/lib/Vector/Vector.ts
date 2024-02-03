export class Vector{
    components:number[];
    constructor(...components:number[]){
        this.components = components;
    }
    add(vector:Vector){
        if(this.components.length !== vector.components.length){
            throw new Error('Vectors must have the same number of components');
        }
        for(let i=0;i<this.components.length;i++){
            this.components[i] += vector.components[i];
        }
        return(this)
    }
    subtract(vector:Vector){
        if(this.components.length !== vector.components.length){
            throw new Error('Vectors must have the same number of components');
        }
        for(let i=0;i<this.components.length;i++){
            this.components[i] -= vector.components[i];
        }
        return(this)
    }
    scale(scalar:number){
        for(let i=0;i<this.components.length;i++){
            this.components[i] *= scalar;
        }
        return(this)
    }
    magnitude(){
        return(Math.sqrt(this.components.reduce((a,b)=>a+b**2,0)))
    }
    normalize(){
        const magnitude = this.magnitude();
        for(let i=0;i<this.components.length;i++){
            this.components[i] /= magnitude;
        }
        return(this)
    }
    at(index:number){
        return(this.components[index])
    }
    set(index:number,value:number){
        this.components[index] = value;
        return(this)
    }
    distance(vector:Vector){
        if(this.components.length !== vector.components.length){
            throw new Error('Vectors must have the same number of components');
        }
        return(Math.sqrt(this.components.reduce((a,b,i)=>a+(b-vector.components[i])**2,0)))
    }
    dot(vector:Vector){
        if(this.components.length !== vector.components.length){
            throw new Error('Vectors must have the same number of components');
        }
        return(this.components.reduce((a,b,i)=>a+b*vector.components[i],0))
    }
    angle(vector:Vector){
        return(Math.acos(this.dot(vector)/(this.magnitude()*vector.magnitude())))
    }
    project(vector:Vector){
        return(vector.scale(this.dot(vector)/vector.magnitude()**2))
    }
    toString(){
        return(`(${this.components.join(',')})`)
    }
    static add(vector1:Vector,vector2:Vector){
        return(new Vector(...vector1.components).add(vector2))
    }
    static subtract(vector1:Vector,vector2:Vector){
        return(new Vector(...vector1.components).subtract(vector2))
    }
    static scale(vector:Vector,scalar:number){
        return(new Vector(...vector.components).scale(scalar))
    }
    static magnitude(vector:Vector){
        return(new Vector(...vector.components).magnitude())
    }
    static normalize(vector:Vector){
        return(new Vector(...vector.components).normalize())
    }
    static dot(vector1:Vector,vector2:Vector){
        return(new Vector(...vector1.components).dot(vector2))
    }
    static angle(vector1:Vector,vector2:Vector){
        return(new Vector(...vector1.components).angle(vector2))
    }
    static project(vector1:Vector,vector2:Vector){
        return(new Vector(...vector1.components).project(vector2))
    }
    static fromAngle(angle:number){
        return(new Vector(Math.cos(angle),Math.sin(angle)))
    }
    static fromPolar(magnitude:number,angle:number){
        return(new Vector(magnitude*Math.cos(angle),magnitude*Math.sin(angle)))
    }
    static fromArray(components:number[]){
        return(new Vector(...components))
    }
    static fromObject(vector:{x:number,y:number}){
        return(new Vector(vector.x,vector.y))
    }
    static fromString(vector:string){
        return(new Vector(...vector.split(',').map(component=>+component)))
    }
}