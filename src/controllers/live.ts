import { Request, Response } from "express";
const pool = require("../db");
export const getLiveUrl = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch the most recent live URL
    const result = await pool.query(
      'SELECT url FROM live ORDER BY created_at DESC LIMIT 1'
    );
    if (result.rows.length > 0) {
      // Return the URL if found
      res.status(200).json(result.rows[0]);
    } else {
      // If no URL is found, return an empty object
      res.status(200).json({});
    }
  } catch (error) {
    console.error("Error fetching live URL:", error);
    res.status(500).json({ message: "Server error" });
  }
};

  
