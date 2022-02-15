export function getExistingItems() {
    const itemsAdedd = localStorage.getItem("cart");

    if (itemsAdedd === null) {
        return [];
    } else {
        return JSON.parse(itemsAdedd);
    }
}