function createCache() {
    const data ={}
    return {
        set: function (key,val) {
            data[key] = val
        },
        get: function (key) {
            return data[key]
        }
    }
}

const cache = createCache();
cache.set('a',111)
console.log(cache.get('a'))
