import { 
    useEffect, 
    useState 
} from 'react';

const useFetch = options => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState(null);
    useEffect(() => {
        const Convect = async options => {
            try {
                const response = await fetch(options.url, options);
                const data = await response.json();
                const status = response.status;
                setData(data);
                setStatus(status);
            } catch (e) {
                console.error(e);
            }
        }
        Convect(options);
    }, []);
    return [data, status];
}

const useStorage = (storage, method, key = '', value = '') => {
    const [store, setStore] = useState(null);
    switch (method) {
        case 'set':
            storage.setItem(key, value);
            setStore(value);
            break;
        case 'get':
            setStore(storage.getItem(key));
            break;
        default:
            break;
    }
    return store;
}

export { 
    useFetch, 
    useStorage 
};
