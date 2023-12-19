
export const addCount = (id) => {
    try {
        const basked = JSON.parse(localStorage.getItem('basked'))
        const findProduct = basked.find(e => e._id == id)
        const index = basked.indexOf(findProduct)
        if(findProduct) {
            findProduct.count += 1
            basked[index] = findProduct
            localStorage.setItem('basked', JSON.stringify(basked))
        }
    } catch(err) {
        console.log("Error: ", err)
    }
}

export const removeCount = (id) => {
    try {
        const basked = JSON.parse(localStorage.getItem('basked'))
        const findProduct = basked.find(e => e._id == id)
        const index = basked.indexOf(findProduct)
        if(findProduct) {
            if(findProduct.count >= 1) {
                findProduct.count -= 1
                basked[index] = findProduct
                localStorage.setItem('basked', JSON.stringify(basked))
            }
        }
    } catch(err) {
        console.log("Error: ", err)
    }
}
