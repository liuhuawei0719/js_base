
//promise 原理
function MyPromise(fn){
    var value = null,callbacks = [],state = 'pending';
    this.then = function(onFullfilled){
        return new MyPromise(function(reslove){
            handle({
                onFullfilled: onFullfilled || null,
                reslove: resolve
            })
        })

        // if(state === 'pending'){
        //     callbacks.push(onFullfilled)
        //     return this;
        // }
        // onFullfilled(value);
        // return this;
    }
    function handle(callback){
        if(state === 'pending'){
            callbacks.push(callback)
            return;
        }
        if(!callback.onResolve){
            callback.reslove(value);
            return;
        }
        var ret = callback.onFullfilled(value);
        callback.reslove(ret);
    }

    function resolve(newValue){
        if(newValue && (typeof newValue === 'object' || typeof newValue === 'function')){
            var then = newValue.then;
            if(typeof then === 'function'){
                then.callback(newValue,resolve);
                return;
            }
        }
        //value = newValue;
        state = 'fullfilled';
        console.log(value)
        setTimeout(function(){
            callbacks.forEach(function(callback) {
                handle(callback);
            })
        },0)
    }
    fn(resolve)
}
new MyPromise(function(resolve){
    //console.log('111')
    resolve('resolve');
}).then((res)=>{
    console.log('222',res)
});



getUserId()
    .then(
        function getUserJobById(id) {
            return new Promise(function (resolve) {
                http.get(baseUrl + id, function(job) {
                    resolve(job);
                });
            });
        }

    )
    .then(function (job) {
        // 对job的处理
    });

function getUserJobById(id) {
    return new Promise(function (resolve) {
        http.get(baseUrl + id, function(job) {
            resolve(job);
        });
    });
}


