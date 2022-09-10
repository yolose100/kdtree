
function setup () {
    var width = 1000;
    var height = 1000;
    createCanvas (width , height ) ;
    console.log("cambas");
    background (0) ;
    for (var x = 0; x < width; x += width / 10) {
    
    for (var y = 0; y < height; y += height / 5) {
    stroke (125 , 125 , 125) ;
    strokeWeight (1) ;
    line (x, 0, x, height );
    line (0 , y, width , y);
    }
    }
    
    var data = [];
    for ( let i = 0; i < 100; i ++) {
    var x = Math.floor ( Math.random () * height );
    var y = Math.floor ( Math.random () * height );
    data.push ([x, y]) ;
    
    fill (255 , 255 , 255) ;
    circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
    textSize (8) ;
    text (x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje
    
    
    
}
    
    var root = build_kdtree ( data ) ;
    console.log ( root );
    var queue = [] ;
    noFill()
    let c = color(255, 204, 0)
    stroke(c);
 
    circle(100, height- 100, 100*2);
    fill(c);  
    range_query_circle(root,[100,100],100,queue,0);
    


    console.log("esta es la cola")
    queue.forEach(e =>  { 
        console.log(e.point)
        circle (e.point[0], height - e.point[1], 7);} )
    queue = [];
   
    noFill()

    rect(500,height-100, 100, 100);
    range_query_rectangle(root,[[500,600],[0,100]],queue,0);
    fill(c);  
    queue.forEach(e =>  { 
        console.log(e.point)
        circle (e.point[0], height - e.point[1], 7);} )
    

    
}

    let puntos =  [
        new Point(100,300),
        new Point(300,300),
        new Point(400,300),
        new Point(500,300),
        new Point(600,300),

 ]
 
 

 