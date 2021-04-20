const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F'
    }
  }
}


function preorder(root){
  if(!root){
    return
  }
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}

function preorder1(root){
  if(!root){
    return
  }
  var result = [];
  var stack = [root];
  while(stack.length !== 0){
    var top = stack.pop();
    if(top.right){
      stack.push(top.right)
    } 
    if(top.left){
      stack.push(top.left)
    }
    result.push(top.val)
  }
  return result;
}

//D -> B -> E -> A -> C -> F
function inorder(){
  if(!root){
    return
  }
  postorder(root.left)
  console.log(root.val)
  postorder(root.right) 
}

function inoder1(root){
  if(!root){
    return
  }
  var result = [], stack = [root]
  while(stack.length !==0 && root){
    while(root.left){
      stack.push(root);
      root = root.left
    }
    root = stack.pop();
    result.push(root.val)
    root = root.right;
  }
  return result
}


function postorder(root){
  if(!root){
    return
  }
  postorder(root.left)
  postorder(root.right)
  console.log(root)
}

function postorder1(root){
  if(!root){
    return
  }
  var result = [];
  var stack=[root];
  while(stack.length!==0){
    var top = stack.pop();
    result.unshift(top.val)
    if(top.left){
      stack.push(top.left)
    }
    if(top.right){
      stack.push(top.right)
    }
    
  }
  return result;
}

