import { getDashboardData } from "../models/dashboard.model.js"

export const fetchDashboard = async (req, res) => {
  try {

    const dashboard = await getDashboardData()

    res.status(200).json({
      status: "success",
      data: dashboard
    })

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: error.message
    })

  }
}