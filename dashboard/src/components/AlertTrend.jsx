import React from "react";
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';


import { 
    Box, 
} from "@mui/material";
import { useGetAlertTrendQuery } from "state/api";



const AlertTrend = () => {
    const { data, isLoading } = useGetAlertTrendQuery();
    // console.log("data", data)

const slicedData = data ? data.slice(0, 30) : null;


// Format tickItem which is a timestamp
const formatXAxis = (tickItem) => {
    return new Date(tickItem).toLocaleTimeString();
};


    return (
        <Box m="1.5rem 2.5rem">
            {data || !isLoading ? (
            <ResponsiveContainer width="100%"  aspect={2} >
                <LineChart
                   width={500}
                   height={300}
                   data={slicedData}
                   margin={{
                     top: 30,
                     right: 30,
                     left: 0,
                     bottom: 5,
                   }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp"  stroke="#ffe3a3"  tickFormatter={formatXAxis} />
                <YAxis stroke="#ffe3a3" />
                <Tooltip labelStyle={{ color: 'black' }} />
                <Legend />
                <Line type="monotone" dataKey="proto" name="Protocol"  stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="alert.severity" name="Severity" stroke="#82ca9d" />
                <Line type="monotone" dataKey="alert.rev" name="Rev" stroke="#ffe3a3" />
                </LineChart>
            </ResponsiveContainer>
            ) 
            : (
                <>Loading...</>
            )
            }            
        </Box>    
    );
};

export default AlertTrend;

