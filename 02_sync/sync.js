class Lodash {
    compact(array){
        return array.filter(item=> !!item)
    }

    groupBy(array, prop){
        return array.reduce((acc, cur)=>{
            const key = typeof prop === 'function' ? prop(cur) : cur[prop]
            if(!acc[key]){
                acc[key] = []
            }
            acc[key].push(cur)
            return acc
        }, {})
    }
}

// console.log(!!NaN)
module.exports = Lodash