import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value, setValues] = useLocalStorage(key, initialValue);

    const handleToggle = e => {
        if ('toggle toggled' === true)
        setValues({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const setValue = newValue => {
        setValues(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value, setValue, handleToggle];
}