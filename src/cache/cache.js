import { CACHE_KEYS } from "./keys";

export function save (key,value, ttl = 60 * 60 * 1000) {

    const payload = {
        createdAt: Date.now(),
        ttl, 
        data:value
    }

    localStorage.setItem(key, JSON.stringify(payload));

}

export function load(key){

    try {

        const value = localStorage.getItem(key);

        if (!value) return null;

        const cache = JSON.parse(value);

        if (Date.now() - cache.createdAt > cache.ttl) {
            localStorage.removeItem(key);
            return null;
        }

        return cache.data;

    } catch {

        localStorage.removeItem(key);

        return null;

    }

}

export function remove(key){

    localStorage.removeItem(key);
}

export function clear(){

    Object.values(CACHE_KEYS).forEach(key => {
        localStorage.removeItem(key);
    })

}
