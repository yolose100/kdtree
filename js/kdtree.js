k = 2;

class Node {
   constructor(point, axis) {
      this.point = point;
      this.left = null;
      this.right = null;
      this.axis = axis;
   }
}

function getHeight(node) {
   if (!node) return 0;
   return Math.max(getHeight(node.left) + 1, getHeight(node.right + 1));

}
function generate_dot(node) {
   if(!node){
      return;
   }else{
      if(node.left!=null)
         console.log(node.point+"=>"+node.left.point);
      
      generate_dot(node.left);
      
      if(node.right!=null)
         console.log(node.point+"=>"+node.right.point);
      generate_dot(node.right);
   }
}
function build_kdtree(points, depth = 0) {
   var n = points.length;
   var axis = depth % k;


   if (n <= 0) {
      return null;
   }
   if (n == 1) {
      return new Node(points[0], axis)
   }

   var median = Math.floor(points.length / 2);

   // sort by the axis
   points.sort(function (a, b) {
      return a[axis] - b[axis];
   });
   //console.log(points);

   var left = points.slice(0, median);
   var right = points.slice(median + 1);

   //console.log(right);

   var node = new Node(points[median].slice(0, k), axis);
   node.left = build_kdtree(left, depth + 1);
   node.right = build_kdtree(right, depth + 1);

   return node;

}
