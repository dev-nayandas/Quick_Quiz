import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';


const Statastics = () => {
    const data = useLoaderData();
    const chartValue = data.data
    console.log(chartValue)
    return (
        <div className='chart-Container'>
            <h2>This Statastics page{data.data.length}</h2>
            <LineChart width={400} height={400} data={chartValue}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            </LineChart>
        </div>
    );
};

export default Statastics;