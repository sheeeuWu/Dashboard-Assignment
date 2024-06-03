import React, { useState } from "react";
import { 
    PieChart, 
    Pie, 
    Sector, 
    ResponsiveContainer
} from 'recharts';


import { 
    Box, 
} from "@mui/material";
import Header from "components/Header";
import { useGetBreakdownQuery } from "state/api";




const renderActiveShape = (props) => {

    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, intensity } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    
    const maxLength = 10; 
    const fontSize = payload.alert.category.length > maxLength ? '18px' : '40px'; 

  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize={fontSize} >
        {payload.alert.category}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={10} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#8884d8">{`Intensity ${intensity}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#ffe3a3">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };





const Breakdown = () => {
    const { data, isLoading } = useGetBreakdownQuery();
    const [activeIndex, setActiveIndex] = useState();
    // console.log("data", data)

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    return (
        <Box m="1.5rem 2.5rem" >
            <Header
              title="Pie Chart Analysis"
              subtitle="Hover and Click: Visualize Rev Distribution by Alert Category"
            />
            {data || !isLoading ? (
            <ResponsiveContainer width="100%"  aspect={2}>
                <PieChart width={400} height={400}>
                  <Pie                  
                   activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={120} 
                    outerRadius={210} 
                    fill="#8884d8"
                    dataKey="alert.rev"
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
            </ResponsiveContainer>
            ) 
            : (
                <>Loading...</>
            )
            }            
        </Box>    
    );
};

export default Breakdown;

