import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
      "User",
      "Dashboard",
      "Analytics",
      "AlertSeverity",
      "AlertTrend",
      "SourceIPMap",
      "Breakdown"
    ],
    endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
    getAnalytics: build.query({
      query: () => "analytics/analytics",
      providesTags: ["Analytics"],
    }),
    getAlertSeverity: build.query({
      query: () => "charts/alertSeverity",
      providesTags: ["alertSeverity"],
    }),
    getAlertTrend: build.query({
      query: () => "charts/alertTrend",
      providesTags: ["AlertTrend"],
    }),
    getSourceIPMap: build.query({
      query: () => "charts/sourceIPMap",
      providesTags: ["SourceIPMap"],
    }),
    getBreakdown: build.query({
      query: () => "charts/breakdown",
      providesTags: ["Breakdown"],
    }),
  })
})

export const { 
  useGetUserQuery, 
  useGetDashboardQuery,
  useGetAnalyticsQuery,
  useGetAlertSeverityQuery,
  useGetAlertTrendQuery,
  useGetSourceIPMapQuery,
  useGetBreakdownQuery,
} = api;
