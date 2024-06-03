import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import AlertSeverity from "components/AlertSeverity";
import AlertTrend from "components/AlertTrend";
import SourceIPMap from "components/SourceIPMap";

import {
  DownloadOutlined,
  WifiTethering,
  AdsClick,
  VpnLock,
  Category,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  // console.log("data", data);
  
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Source IP"
          value={data && data.totalSrcIp}
          increase="+21%"
          description="Since Last Month"
          icon={
            <WifiTethering
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Destination IP"
          value={data && data.totalDestIp}
          increase="+2%"
          description="Since Last Month"
          icon={
            <AdsClick
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          p="1.2rem 1rem"
          // flex="1 1 100%"
          // width="100%"
          height={isNonMediumScreens ? 340 : 300}
        >
          <Typography variant="h6"sx={{ color: theme.palette.secondary[100], fontWeight: "500", fontSize: "20px" }}>Alert Severity Analysis</Typography>
          <AlertSeverity/>
        </Box>
        <StatBox
          title="Protocol"
          value={data && data.totalProto}
          increase="+2%"
          description="Since Last Month"
          icon={
            <VpnLock
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Alert Category"
          value={data && data.totalAlertCategories}
          increase="+37%"
          description="Since Last Month"
          icon={
            <Category
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          p="1.25rem 1rem"
          flex="1 1 100%"
          width="100%"
          height={isNonMediumScreens ? 450 : 300}
        >
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100], fontWeight: "700", fontSize: "26px" }}>Alert Trend Analysis</Typography>
          <AlertTrend />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          p="1.25rem 1rem"
          flex="1 1 100%"
          width="100%"
          height={isNonMediumScreens ? 450 : 300}
          
        >
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100], fontWeight: "700", fontSize: "26px" }}>Source IP Map</Typography>
        <SourceIPMap />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;