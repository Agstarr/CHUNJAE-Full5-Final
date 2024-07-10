import axios from 'axios';
import React, {useState, useEffect} from 'react';
import List from "./component/List";

function ApiTest() {
    const [response, setResponse] = useState(null);
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/back/back/hello')
            .then((res) => {
                setHello(res.data);
            })
    }, []);


    const handleClick = async () => {
        try {
            const url = '/api/item-img/item-list';
            const data = {
                itemIdList: ["494519", "494520"]
            };

            const response = await axios.post(url, data);
            setResponse(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }


    };

    return <>
        <div>백엔드 데이터 : {hello}</div>
        <button onClick={handleClick}>Fetch Data</button>
        {response && (
            <div>
                <h2>Response:</h2>
                <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
        )}
        <List/>
    </>
}

export default ApiTest;