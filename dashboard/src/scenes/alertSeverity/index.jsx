import React from "react";
import { 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    AreaChart, 
    Area,
    ResponsiveContainer 
} from 'recharts';

import { 
    Box, 
} from "@mui/material";
import Header from "components/Header";
import { useGetAlertSeverityQuery } from "state/api";



const AlertSeverity = () => {
    const { data, isLoading } = useGetAlertSeverityQuery();
    // console.log("data", data)



    return (
        <Box m="1.5rem 2.5rem">
            <Header
              title="Severity Analysis"
              subtitle="Analyze Trends in Severity and Rev (Stacked Area Chart)"
            />
            {data || !isLoading ? (
            <ResponsiveContainer width="100%"  aspect={2.2} >
                <AreaChart
                   width={500}
                   height={400}
                   data={data}
                   margin={{
                      top: 30,
                      right: 30,
                      left: 0,
                      bottom: 0,
                   }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="proto" stroke="#ffe3a3"/>
                <YAxis stroke="#ffe3a3"/>
                <Tooltip labelStyle={{ color: 'black' }}/>
                <Area type="monotone" dataKey="alert.rev" name="Rev" stackId="1" stroke="#ffe3a3" fill="#ffe3a3" />
                <Area type="monotone" dataKey="alert.severity" name="Severity" stackId="1" stroke="#8884d8"  fill="#8884d8"/>
                </AreaChart>
            </ResponsiveContainer>
            ) 
            : (
                <>Loading...</>
            )
            }            
        </Box>    
    );
};

export default AlertSeverity;

