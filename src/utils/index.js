export function saveDataWithExpiration (key, value) {
    const data = { data: value, expirationDate: new Date() };
    localStorage.setItem(key, JSON.stringify(data))
}

const ONE_HOUR_IN_MS = (1 * 60 * 60 * 1000)

export function findDataWithExpiration (key, expirationTime = ONE_HOUR_IN_MS) {
    const data = localStorage.getItem(key);
    const dataParse = JSON.parse(data)
    const today = new Date();
    if (dataParse) {
        if (today - dataParse.expirationDate > expirationTime) {
            localStorage.removeItem(key);
            return null;
        } else {
            return dataParse.data
        }
    }
}