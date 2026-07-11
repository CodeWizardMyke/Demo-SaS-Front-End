export default function parsePrice(value) {
    if(!value){
        return 0
    }
    return Number(
        value
        .replace(/\./g, '')
        .replace(',', '.')
    );
 
}