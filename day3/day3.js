



const exampleObject = {
    prop: 'sadfwqf',
    stuff: updateH1Demo
}

const exampleObject2 = {
    prop: 'fdsadsaf',
    stuff: arrayDemo
}

exampleObject.stuff()
exampleObject2.stuff()


// exampleObject['stuff']()
// exampleObject.stuff()

function arrayDemo() {

    let data = ['some', 'random', 'text']
    let data2 = ['more', 'cool', 'text']
    const nestedARray = [data, data2]
    
    
    // nestedARray.forEach((array) => {
    //     for (const item of array) {
    //         console.log(item)
            
    //     }
    // })

    data = data.includes(name => {
        return name === 'random'
    })
    console.log(data)
}

function updateH1(newText) {
    document.querySelector('h1').innerText = newText
}

updateH1Demo()

function updateH1Demo() {

    updateH1('')
    let sizeOfNumber= ''
    if(Math.random() > 0.5) {
        sizeOfNumber = 'BIG number'
    } else {
        sizeOfNumber = 'little number'
    }
    updateH1(sizeOfNumber)
}

function forEach(forEachFunction) {
    forEachFunction(data[0])
    forEachFunction(data[1])
    forEachFunction(data[2])
    forEachFunction(data[3])
}