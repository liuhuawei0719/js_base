var permute = function(str) {
  var res=new Set(),used={};
  const len = str.length;
  function dfs(path){
      if(path.length === len){
          res.add(path)
      }
      for(let i=0;i<len;i++){
          if(used[i]) continue;
          used[i] = true;
          dfs(path+str[i]);
          used[i]=false;
      }
  }
  dfs('')
  return [...res];
};

console.log(permute('csd'))