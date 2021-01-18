import React, { useState, useEffect } from 'react';
import { Entry } from '../entry/entry.components';
import axios from 'axios'

import './home.styles.scss';

export const Home = () => {
    const [cv_data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'cv_data.json',
              );
              setData(result.data.data);
            }
        fetchData();
      }, []);

    return (
        <div>
            <div className="entries">
            {cv_data.map((data, i) => {
                return (<Entry data={data} key={i} />) 
            })}
            </div>
        </div>
    )
}

export default Home;