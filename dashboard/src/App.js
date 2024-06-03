import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard copy";
import Analytics from "scenes/analytics";
import AlertSeverity from "scenes/alertSeverity";
import AlertTrend from "scenes/alertTrend";
import SourceIPMap from "scenes/sourceIPMap";
import Breakdown from "scenes/breakdown";
import axios from "axios";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [data, setData] = useState(null); 
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://dashboard-assignment-api.vercel.app/')
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  
  return (
    <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/alertSeverity" element={<AlertSeverity />} />
              <Route path="/alertTrend" element={<AlertTrend />} />
              <Route path="/sourceIPMap" element={<SourceIPMap />} />
              <Route path="/breakdown" element={<Breakdown />} />
            </Route>
          </Routes>
        </ThemeProvider> 
    </BrowserRouter>
    </div>
  );
}

export default App;
