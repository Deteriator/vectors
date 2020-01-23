class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(vector){
        let newX = this.x += vector.x;
        let newY = this.y += vector.y;
        return new Vec(newX,newY);
    }
    minus(vector){
        let newX =  (this.x -= vector.x);
        let newY =  (this.y -= vector.y);
        return new Vec(newX,newY);
    }
    length(){
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}