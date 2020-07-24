import { useEffect, useState } from 'react';

const useConvect = options => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState(null);
    useEffect(() => {
        const Convect = async (options) => {
            try {
                const response = await fetch(options.url, options);
                const data = await response.json();
                const status = await response.status;
                setData(data);
                setStatus(status);
              } catch (e) {
                console.error(e);
              }
        }
        Convect(options);
    }, []);
    return {
        data,
        status
    }
}
// to be edited soon..
export default useConvect;
