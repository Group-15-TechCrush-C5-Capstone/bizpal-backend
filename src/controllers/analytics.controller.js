import { getAnalyticsData } from "../models/analytics.model.js";

export const fetchAnalytics = async (req, res) => {
  try {
    const analytics = await getAnalyticsData();

    res.status(200).json({
      status: "success",
      data: analytics
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};