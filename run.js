function isObject(obj) {
    return obj === Object(obj);
}

const deepObj = (obj) => {
    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if(isObject(obj[key]) && typeof obj[key] !== "function") {
            newObj[key] = deepObj(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
};