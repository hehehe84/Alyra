class Car{
    constructor(x,y,width,height,controlType,maxSpeed=3){
        //Basics of positions and creation of the first car

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        //Creations of physical constrains in terms of speed and accelerations going up/down

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=maxSpeed;
        this.friction=0.05;

        //Creations of physical constrains when we turn

        this.angle=0;
        this.damager=false;

        this.useBrain=controlType=="AI";

        if(controlType!="DUMMY"){
            this.sensor=new Sensor(this);       //We add the sensor on our object car
            this.brain= new NeuralNetwork(
                [this.sensor.rayCount,6,4],      //6 inputs, 4 outputs(r,l,forward,backward)
            );
        }
        this.controls=new Controls(controlType);    //Comportment is given in controls.js
    }

    //let's move the car
    update(roadBorders, traffic){
        if(!this.damaged){
            this.#move();
            this.polygon=this.#createPolygon();
            this.damaged=this.#assessDamage(roadBorders, traffic);
        }
        if(this.sensor){
            this.sensor.update(roadBorders, traffic);               //Updating the if it exist sensor
            const offsets=this.sensor.readings.map(
                s=>s==null?0:1-s.offset                 //Low value for sensors far, higher when closer
            );
            const outputs=NeuralNetwork.feedForward(offsets,this.brain);

            if(this.useBrain){
                this.controls.forward=outputs[0];
                this.controls.left=outputs[1];
                this.controls.right=outputs[2];
                this.controls.reverse=outputs[3];
            }
        }
    }

    #assessDamage(roadBorders, traffic){      //polysIntersect is define in utils
        for (let i=0;i<roadBorders.length;i++){
            if(polysIntersect(this.polygon,roadBorders[i])){        //roadBorders[i] is a line (polygon=lines together)
                return true;
            }
        }
        for (let i=0;i<traffic.length;i++){
            if(polysIntersect(this.polygon,traffic[i].polygon)){        //roadBorders[i] is a line (polygon=lines together)
                return true;
            }
        }
        return false;
    }


    //We create corners of the car cause it's just a point
    #createPolygon(){
        const points=[];
        const rad=Math.hypot(this.width,this.height)/2;      //distance between center of the car and an angle of it
        const alpha=Math.atan2(this.width,this.height);         //Angle between center of the car and it's corner
        points.push({
            x:this.x-Math.sin(this.angle-alpha)*rad,
            y:this.y-Math.cos(this.angle-alpha)*rad
        });
        points.push({
            x:this.x-Math.sin(this.angle+alpha)*rad,
            y:this.y-Math.cos(this.angle+alpha)*rad
        });
        points.push({
            x:this.x-Math.sin(Math.PI+this.angle-alpha)*rad,
            y:this.y-Math.cos(Math.PI+this.angle-alpha)*rad
        });
        points.push({
            x:this.x-Math.sin(Math.PI+this.angle+alpha)*rad,
            y:this.y-Math.cos(Math.PI+this.angle+alpha)*rad
        });
        return points;
    }

    #move(){
        //We move the car up and down
        if(this.controls.forward){
            this.speed+=this.acceleration;
            //this.y-=2;          //y-= because in JS, y is going from up to down
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
            //this.y+=2;
        }
        //Nous instaurons une vitesse maximale
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed=-this.maxSpeed/2;
        }
        //Nous instaurons une friction pour faire déscélérer la voiture quand nous avons fini 
        //D'avancer et donc d'accélérer
        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction){ //Si la vitesse de la voiture est inférieure
            this.speed=0;                       //A la vitesse de la friction, on dit que sa vitesse est nulle
        }

        if (this.speed!=0){
            const flip=this.speed>0 ? 1 : -1;       //Introduction of flip for the problem under
            if(this.controls.left){
                this.angle+=0.03*flip;    
            }
            if(this.controls.right){
                this.angle-=0.03*flip;      //No problem of having the car reverse-backward 
            }
        }
                    //Under is a code that flip the car when going backward !
        // if(this.controls.left){
        //     this.angle+=0.03;       //Angle 
        // }
        // if(this.controls.right){
        //     this.angle-=0.03;
        // }
        //To make the car move in the direction of the angle :

        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;        //problem, backward is flip...
        //this.y-=this.speed;


    }


    draw(ctx,color,drawSensor=false){
        if(this.damaged){
            ctx.fillStyle="gray";
        }else{
            ctx.fillStyle=color;
        }

        // ctx.save();     //Will save the previous position of the car.
        // ctx.translate(this.x,this.y);    //Give the position of the car in term of position (x,y);
        // ctx.rotate(-this.angle);    //Save the position about the angle according to trigo circle.


        // //Creation of the basic car without angle
        ctx.beginPath();
        // ctx.rect(
        //     -this.width/2,       //this.x-this.width/2,
        //     -this.height/2,      //this.y-this.height/2, Cause we already put this.(x/y) in "translate()"
        //     this.width,
        //     this.height
        // );
        // ctx.fill();

        // ctx.restore();          //to avoid infinite series of translation and rotation


        //Up here, we draw a car that is just a point with a ractangle surrounding this point.
        //Down here, we draw a polygon, a rectangle that is moving around a point


        ctx.moveTo(this.polygon[0].x,this.polygon[0].y);
        for (let i=1;i<this.polygon.length;i++){
            ctx.lineTo(this.polygon[i].x,this.polygon[i].y);
        }
        ctx.fill();

        if(this.sensor && drawSensor){
            this.sensor.draw(ctx);
        }
    }
}