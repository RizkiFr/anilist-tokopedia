import { useState } from "react";

const returnInitialState = (storageKey: string) => {
    try {
        const item = window.localStorage.getItem(storageKey);
        return item ? JSON.parse(item) : {};
    } catch (error) {
        console.log(error);
        return {};
    }
}

const useLocalStorage = (storageKey: string) => {
    const [storedValue, setStoredValue] = useState(
        returnInitialState(storageKey)
    );

    const setValue = (value: any) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(storageKey, JSON.stringify(valueToStore));
            setStoredValue(valueToStore);
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue]
}

export { useLocalStorage }