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
    for ( let i = 0; i < 12; i ++) {
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

}

    let puntos =  [
        new Point(100,300),
        new Point(300,300),
        new Point(400,300),
        new Point(500,300),
        new Point(600,300),

 ]
 
 var root = new Node();