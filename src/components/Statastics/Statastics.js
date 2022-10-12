import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statastics = () => {
    const data = useLoaderData();
    const total = data.data
    console.log(total)
    return (
        <div>
            <h2>This Statastics page{data.data.length}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                <Bar dataKey="total" fill="#8884d8" />
                 </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statastics;