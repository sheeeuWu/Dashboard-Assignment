import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Box } from "@mui/material";
import { useGetSourceIPMapQuery } from "state/api";

const SourceIPMap = () => {
  const { data, isLoading } = useGetSourceIPMapQuery();
  // console.log("data", data)


const slicedData = data ? data.slice(0, 30) : null;


  return (
    <Box m="1.5rem 2.5rem">
      {data || !isLoading ? (
        <ResponsiveContainer width="100%" aspect={2.2}>
        <BarChart
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
          <XAxis dataKey="src_ip" stroke="#ffe3a3"/>
          <YAxis stroke="#ffe3a3" />
          <Tooltip labelStyle={{ color: 'black' }}/>
          <Legend />
          <Bar dataKey="alert.rev" name="Rev" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="#8884d8" />} />
          <Bar dataKey="alert.severity" name="Severity" fill="#ffe3a3" activeBar={<Rectangle fill="gold" stroke="#ffe3a3" />} />
        </BarChart>
        </ResponsiveContainer>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default SourceIPMap;
