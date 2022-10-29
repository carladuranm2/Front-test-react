export function saveDataWithExpiration (key, value) {
    const data = { data: value, expirationDate: new Date() };
    localStorage.setItem(key, JSON.stringify(data))
}

export function findDataWithExpiration (key) {
    const data = localStorage.getItem(key);
    const dataParse = JSON.parse(data)
    const today = new Date();
    if (dataParse) {
        const dataParseInDate = new Date(dataParse.expirationDate)
        if (today - dataParseInDate > today.setHours(today.getHours() + 1)) {
            localStorage.removeItem(key);
            return null;
        } else {
            return dataParse.data
        }
    }
}