import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [values, setValues] = useLocalStorage('defaultTheme', initialValue);

    const handleToggle = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return [values, handleToggle];

}