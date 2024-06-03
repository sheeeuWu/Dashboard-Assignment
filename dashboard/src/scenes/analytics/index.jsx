import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetAnalyticsQuery } from "state/api";

const Analytic = ({
  alert = {},
  proto,
  src_port,
  dest_port,
  flow_id,
  timestamp,
}) => {
  const { rev = "", signature = "", category = "", severity = "" } = alert;
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontWeight: 500 }}
          color={theme.palette.secondary[400]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} variant="h5" component="div">
          {proto}
        </Typography>

        <Typography
          sx={{ mb: "1.5rem", display: "inline" }}
          color={theme.palette.secondary[400]}
        >
          Severity:{" "}
          <Typography
            sx={{ mb: "1.5rem", display: "inline" }}
            color={theme.palette.secondary[100]}
            component="span"
          >
            {" "}
            {Number(severity)}
          </Typography>
        </Typography>
        <Typography
          sx={{ mb: "1.5rem", display: "block" }}
          color={theme.palette.secondary[400]}
        >
          Rev:{" "}
          <Typography
            sx={{ mb: "1.5rem", display: "inline" }}
            color={theme.palette.secondary[100]}
            component="span"
          >
            {" "}
            {Number(rev)}
          </Typography>
        </Typography>
        <Typography variant="body2">{signature}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography
            sx={{display: "block" }}
            color= "white"
          >
            Source Port: {" "}
            <Typography 
              sx={{ display: "inline" }}
              color={theme.palette.secondary[400]}
            >
              {src_port}
            </Typography>
          </Typography>
          <Typography
            sx={{display: "block" }}
            color= "white"
          >
            Destination Port: {" "}
            <Typography 
              sx={{ display: "inline" }}
              color={theme.palette.secondary[400]}
            >
              {dest_port}
            </Typography>
          </Typography>
          <Typography
            sx={{display: "block" }}
            color= "white"
          >
            Flow ID: {" "}
            <Typography 
              sx={{ display: "inline" }}
              color={theme.palette.secondary[400]}
            >
              {flow_id}
            </Typography>
          </Typography>
          <Typography
            sx={{display: "block" }}
            color= "white"
          >
            Timestamp: {" "}
            <Typography 
              sx={{ display: "inline" }}
              color={theme.palette.secondary[400]}
            >
              {timestamp}
            </Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Analytics = () => {
  const { data, isLoading } = useGetAnalyticsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  // console.log("data", data);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Data Analytics" subtitle="Explore Detailed Insights" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map((item, index) => (
            <Analytic
              key={`${item.flow_id}-${index}`}
              proto={item.proto}
              alert={item.alert}
              src_port={item.src_port}
              dest_port={item.dest_port}
              flow_id={item.flow_id}
              timestamp={item.timestamp}
            />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Analytics;
