//Creation canvas


const carCanvas=document.getElementById('carCanvas');
//canvas.height=window.innerHeight;   //Take all the height of our window. We comment this to put it in animate()
carCanvas.width=200;                   //Take a width of 200px
const networkCanvas=document.getElementById('networkCanvas');
networkCanvas.width=300;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");


const road=new Road(carCanvas.width/2, carCanvas.width*0.9);


const N=100;
const cars = generateCars(N);
let bestCar=cars[0];

// if (localStorage.getItem("bestBrain")){
//     bestCar.brain=JSON.parse(localStorage.getItem("bestBrain"));
// }

if (localStorage.getItem("bestBrain")){
    for(let i=0;i<cars.length;i++){
        cars[i].brain=JSON.parse(
            localStorage.getItem("bestBrain"));
        if(i!=0){
            NeuralNetwork.mutate(cars[i].brain,0);
        }
    }
}



const traffic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-900,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",2)
]
//car.draw(ctx);

animate();

function save(){
    localStorage.setItem("bestBrain",
    JSON.stringify(bestCar.brain))
}

function discard(){
    localStorage.removeItem("bestBrain");
}

function generateCars(N){
    const cars=[];
    for (let i=1;i<=N;i++){
        cars.push(new Car(road.getLaneCenter(1),100,30,50,"AI"));
    }
    return cars;
}

function animate(time){
    for (let i=0; i<traffic.length;i++){        //Create traffic
        traffic[i].update(road.borders,[]);
    }   
    for (let i=0;i<cars.length;i++){
        cars[i].update(road.borders, traffic);
    }

    const bestCar=cars.find(
        c=>c.y==Math.min(       //The car with the best y value (values goes from- =>+)
            ...cars.map(c=>c.y)
        )
    )

    carCanvas.height=window.innerHeight;    //clear the canvas and don't make any trail
    networkCanvas.height=window.innerHeight;
    //This will look like POV above the car !
    carCtx.save();
    carCtx.translate(0,-bestCar.y+carCanvas.height*0.7);


    //drawing the car
    road.draw(carCtx);

    for (let i=0;i<traffic.length;i++){
        traffic[i].draw(carCtx, "red");
    }

    carCtx.globalAlpha=0.2;             //add some transparency to cars
    for (let i=0;i<cars.length;i++){
        cars[i].draw(carCtx,"blue");
    }
    carCtx.globalAlpha=1;
    bestCar.draw(carCtx,"blue",true);

    carCtx.restore();      //also help for the POV of the car

    networkCtx.lineDashOffset=-time/50;
    Visualizer.drawNetwork(networkCtx,bestCar.brain);
    requestAnimationFrame(animate);
}
