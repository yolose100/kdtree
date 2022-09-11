
let myCircle ;
let width = 1000;
let height = 800;
let data=[];
let root ;
let circuloPunto=[500,500];
let rectanguloPunto=[500,500];
let circuloRadio=100;
let rectaguloBox =[100,100];
let isMovingRectangle= true;
let isMovingCircle= false;
let queue= [];
function setup() {
 
    let mycanvas = createCanvas(width, height);
    mycanvas.parent("division");
    console.log("cambas");
    background(0);
    data = [];

    for (let i = 0; i < 50; i++) {
        var x = Math.floor(Math.random() * width);
        var y = Math.floor(Math.random() * height);
        data.push([x, y]);
    }

    root = build_kdtree(data);
    console.log(root);
    generate_dot(root);
    for (let i = 0; i < 50; i++) {

        fill(255, 255, 255);
        circle(data[i][0], height - data[i][1], 7); // 200 -y para q se dibuje apropiadamente

        textSize(8);
        text(data[i][0] + ',' + data[i][1], data[i][0] + 5, height - data[i][1]);// 200 -y para q se dibuje

    }




    for (var x = 0; x < width; x += width / 10) {

        for (var y = 0; y < height; y += height / 5) {
            stroke(125, 125, 125);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }

   
  
}
function dibujo(){
    background(0);
    for (let i = 0; i < 50; i++) {

        fill(255, 255, 255);
        circle(data[i][0], height - data[i][1], 7); // 200 -y para q se dibuje apropiadamente

        textSize(8);
        text(data[i][0] + ',' + data[i][1], data[i][0] + 5, height - data[i][1]);// 200 -y para q se dibuje

    }




    for (var x = 0; x < width; x += width / 10) {

        for (var y = 0; y < height; y += height / 5) {
            stroke(125, 125, 125);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }

   
    stroke(125, 125, 125);
    for (let i = 0; i < 50; i++) {

        fill(255, 255, 255);
        circle(data[i][0], height - data[i][1], 7); // 200 -y para q se dibuje apropiadamente
    }

    noFill()
    let c = color(255, 204, 0)
    stroke(c);

    myCircle = circle(circuloPunto[0], height - circuloPunto[1], circuloRadio * 2);
    fill(c);
    range_query_circle(root,circuloPunto, circuloRadio, queue, 0);
     queue.forEach(e => {
        circle(e.point[0], height - e.point[1], 7);
    });

    queue = [];



    noFill()
    let px = rectanguloPunto[0];
    let px2 = rectanguloPunto[0]+rectaguloBox[0];
    let py = rectanguloPunto[1];
    let py2 = rectanguloPunto[1]-rectaguloBox[1];


    rect(rectanguloPunto[0], height - rectanguloPunto[1], rectaguloBox[0], rectaguloBox[1]);
    range_query_rectangle(root, [[px,px2 ], [py2, py]], queue, 0);
    fill(c);
    queue.forEach(e => {
    
        circle(e.point[0], height - e.point[1], 7);
    })
    stroke(255,255,255);



}
function draw() {
    dibujo();

}

let puntos = [
    new Point(100, 300),
    new Point(300, 300),
    new Point(400, 300),
    new Point(500, 300),
    new Point(600, 300),

]

function izquierda(){
    if(isMovingCircle)
    circuloPunto[0] = circuloPunto[0] - 5;
    if(isMovingRectangle)
    rectanguloPunto[0] = rectanguloPunto[0] - 5;

}

function derecha(){
    if(isMovingCircle)
    circuloPunto[0] = circuloPunto[0] + 5;
    if(isMovingRectangle)
    rectanguloPunto[0] = rectanguloPunto[0] + 5;

}

function arriba (){
    if(isMovingCircle)
    circuloPunto[1] = circuloPunto[1] - 5;
    if(isMovingRectangle)
    rectanguloPunto[1] = rectanguloPunto[1] - 5;

}

function abajo(){
    if(isMovingCircle)
    circuloPunto[1] = circuloPunto[1    ] + 5;
    if(isMovingRectangle)
    rectanguloPunto[1] = rectanguloPunto[1    ] + 5;

}





function cuadrado(){
    var elem = document.getElementById("cual");
     
    if (elem.value=="CUADRADO") {
        elem.value = "CIRCULO";
        elem.innerHTML = "CIRCULO";
    isMovingCircle = true;
    isMovingRectangle = false;
    console.log("TOUCH")
    }
    else {
        elem.value = "CUADRADO";
        elem.innerHTML = "CUADRADO";
    
        isMovingCircle = false;
        isMovingRectangle = true;
    }
}
function contar(){
    console.log(queue);
    alert(queue);
}



