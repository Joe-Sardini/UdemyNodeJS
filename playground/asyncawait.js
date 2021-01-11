const doWork = async () => {
    const sum = await add(2, 3);
    const sum2 = await add(sum, 40);
    const sum3 = await add(sum2, 40); 
    return sum3;
};

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

//console.log(doWork());

doWork().then((result) => {
    console.log('result', result);
}).catch((e) => {
    console.log(e);
});