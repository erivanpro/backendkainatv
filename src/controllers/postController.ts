import { Request, Response } from "express";
const pool = require("../db");
// Define an asynchronous function to get the most recent post in the "reportages" category
export const getPostsLast = async (
  req: Request, // Type for the request object
  res: Response // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "reportages" category
    const result = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["reportages"] // Parameter for the query, indicating the category
    );

    // Send the retrieved post as a JSON response with a status of 200 (OK)
    res.status(200).json(result.rows);
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error fetching the most recent post:", error);

    // Respond with a server error status and message
    res.status(500).json({ message: "Server error" });
  }
};
// Define an asynchronous function to get the most recent post in the "longsformats" category
export const getLastLongsFormats = async (
  req: Request, // Type for the request object
  res: Response // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "longsformats" category
    const result = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["longsformats"] // Parameter for the query, indicating the category
    );
    // Send the retrieved post as a JSON response with a status of 200 (OK)
    res.status(200).json(result.rows);
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error fetching the most recent post:", error);

    // Respond with a server error status and message
    res.status(500).json({ message: "Server error" });
  }
};
// Define an asynchronous function to get the most recent post in the "lepailladin" category
export const getLastLePailladin = async (
  req: Request, // Type for the request object
  res: Response // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "lepailladin" category
    const result = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["lepailladin"] // Parameter for the query, indicating the category
    );

    // Send the retrieved post as a JSON response with a status of 200 (OK)
    res.status(200).json(result.rows);
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error fetching the most recent post:", error);

    // Respond with a server error status and message
    res.status(500).json({ message: "Server error" });
  }
};
// Define an asynchronous function to get the most recent post in the "captations" category
export const getLastCaptations = async (
  req: Request,  // Type for the request object
  res: Response  // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "captations" category
    const result = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["captations"] // Parameter for the query, indicating the category
    );

    // Send the retrieved post as a JSON response with a status of 200 (OK)
    res.status(200).json(result.rows);
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error fetching the most recent post:", error);

    // Respond with a server error status and message
    res.status(500).json({ message: "Server error" });
  }
};
// Define an asynchronous function to get the most recent post in the "emissions" category
export const getLastEmissions = async (
  req: Request,  // Type for the request object
  res: Response  // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "emissions" category
    const result = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["emissions"] // Parameter for the query, indicating the category
    );

    // Send the retrieved post as a JSON response with a status of 200 (OK)
    res.status(200).json(result.rows);
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error fetching the most recent post:", error);

    // Respond with a server error status and message
    res.status(500).json({ message: "Server error" });
  }
};
// Define an asynchronous function to handle getting posts in the "reportages" category excluding the most recent post
export const getPosts = async (
  req: Request,  // Type for the request object
  res: Response  // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "reportages" category
    const lastPostResult = await pool.query(
      `SELECT * FROM post 
       WHERE categories = $1 
       ORDER BY date_de_publication DESC 
       LIMIT 1`, // SQL query to select the latest post
      ["reportages"] // Parameter for the query, indicating the category
    );

    // Check if any posts were returned
    if (lastPostResult.rows.length > 0) {
      // Extract the ID of the most recent post
      const lastPostId = lastPostResult.rows[0].id; // Assuming there's an 'id' column in the 'post' table

      // Query to fetch all posts in the "reportages" category except the most recent one
      const result = await pool.query(
        `SELECT * FROM post 
         WHERE categories = $1 
           AND id != $2 
         ORDER BY date_de_publication DESC`, // SQL query to select all other posts
        ["reportages", lastPostId] // Parameters for the query
      );

      // Send the filtered posts as a JSON response with a status of 200 (OK)
      res.status(200).json(result.rows);
    } else {
      // If no posts are found in the category, return an empty array
      res.status(200).json([]);
    }
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error fetching posts:", error);

    // Respond with a server error status and message
    res.status(500).json({ message: "Server error" });
  }
};

// Define an asynchronous function to handle getting all posts
export const getAllPosts = async (
  req: Request, // Type for the request object
  res: Response // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch all posts ordered by their publication date in descending order
    const result = await pool.query(
      "SELECT * FROM post ORDER BY date_de_publication DESC" // SQL query to select all posts
    );

    // Send the retrieved posts as a JSON response with a status of 200 (OK)
    res.status(200).json(result.rows);
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error fetching posts:", error);

    // Respond with a server error status and message
    res.status(500).json({ message: "Server error" });
  }
};

/*
   get posts emissions 
*/
// Define an asynchronous function to handle getting posts in the "emissions" category
export const getPostsEmissions = async (
  req: Request, // Type for the request object
  res: Response // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "emissions" category
    const lastPostResult = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["emissions"] // Parameter for the query, indicating the category
    );

    // Check if any posts were returned
    if (lastPostResult.rows.length > 0) {
      // Extract the ID of the most recent post
      const lastPostId = lastPostResult.rows[0].id; // Assuming there's an 'id' column in the 'post' table

      // Query to fetch all posts in the "emissions" category except the most recent one
      const result = await pool.query(
        `SELECT * FROM post 
         WHERE categories = $1 
           AND id != $2 
         ORDER BY date_de_publication DESC`, // SQL query to select all other posts
        ["emissions", lastPostId] // Parameters for the query
      );

      // Send the filtered posts as a JSON response with a status of 200 (OK)
      res.status(200).json(result.rows);
    } else {
      // If no posts are found in the category, return an empty array
      res.status(200).json([]);
    }
  } catch (error) {
    // Log any errors and send a server error response
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error" }); // Respond with a server error status and message
  }
};

// Define an asynchronous function to handle getting posts in the "captations" category
export const getPostsCaptations = async (
  req: Request, // Type for the request object
  res: Response // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "captations" category
    const lastPostResult = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["captations"] // Parameter for the query, indicating the category
    );
    // Check if any posts were returned
    if (lastPostResult.rows.length > 0) {
      // Extract the ID of the most recent post
      const lastPostId = lastPostResult.rows[0].id; // Assuming there's an 'id' column in the 'post' table
      // Query to fetch all posts in the "captations" category except the most recent one
      const result = await pool.query(
        `SELECT * FROM post 
         WHERE categories = $1 
           AND id != $2 
         ORDER BY date_de_publication DESC`, // SQL query to select all other posts
        ["captations", lastPostId] // Parameters for the query
      );

      // Send the filtered posts as a JSON response with a status of 200 (OK)
      res.status(200).json(result.rows);
    } else {
      // If no posts are found in the category, return an empty array
      res.status(200).json([]);
    }
  } catch (error) {
    // Log any errors and send a server error response
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error" }); // Respond with a server error status and message
  }
};

// Define an asynchronous function to handle getting posts in the "lepailladin" category
export const getPostsLePailladin = async (
  req: Request, // Type for the request object
  res: Response // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "lepailladin" category
    const lastPostResult = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["lepailladin"] // Parameter for the query, indicating the category
    );

    // Check if any posts were returned
    if (lastPostResult.rows.length > 0) {
      // Extract the ID of the most recent post
      const lastPostId = lastPostResult.rows[0].id; // Assuming there's an 'id' column in the 'post' table

      // Query to fetch all posts in the "lepailladin" category except the most recent one
      const result = await pool.query(
        `SELECT * FROM post 
         WHERE categories = $1 
           AND id != $2 
         ORDER BY date_de_publication DESC`, // SQL query to select all other posts
        ["lepailladin", lastPostId] // Parameters for the query
      );

      // Send the filtered posts as a JSON response with a status of 200 (OK)
      res.status(200).json(result.rows);
    } else {
      // If no posts are found in the category, return an empty array
      res.status(200).json([]);
    }
  } catch (error) {
    // Log any errors and send a server error response
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error" }); // Respond with a server error status and message
  }
};

// Define an asynchronous function to handle getting posts in the "longsformats" category
export const getPostsLeLongsFormats = async (
  req: Request, // Type for the request object
  res: Response // Type for the response object
): Promise<void> => {
  try {
    // Query to fetch the most recent post in the "longsformats" category
    const lastPostResult = await pool.query(
      "SELECT * FROM post WHERE categories = $1 ORDER BY date_de_publication DESC LIMIT 1", // SQL query to select the latest post
      ["longsformats"] // Parameter for the query, indicating the category
    );
    // Check if any posts were returned
    if (lastPostResult.rows.length > 0) {
      // Extract the ID of the most recent post
      const lastPostId = lastPostResult.rows[0].id; // Assuming there's an 'id' column in the 'post' table
      // Query to fetch all posts in the "longsformats" category except the most recent one
      const result = await pool.query(
        `SELECT * FROM post 
         WHERE categories = $1 
           AND id != $2 
         ORDER BY date_de_publication DESC`, // SQL query to select all other posts
        ["longsformats", lastPostId] // Parameters for the query
      );
      // Send the filtered posts as a JSON response with a status of 200 (OK)
      res.status(200).json(result.rows);
    } else {
      // If no posts are found in the category, return an empty array
      res.status(200).json([]);
    }
  } catch (error) {
    // Log any errors and send a server error response
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Define an asynchronous function to handle fetching a post by its ID
export const getPostByID = async (
  req: Request,  // Type for the request object
  res: Response  // Type for the response object
): Promise<void> => {
  const postID = req.params.id; // Extract the post ID from the request parameters

  try {
    // Query the database to find the post by its ID
    const result = await pool.query(
      "SELECT * FROM post WHERE id = $1", // SQL query to select the post with the given ID
      [postID] // Parameter for the query
    );

    // Check if the result contains any rows (i.e., if the post was found)
    if (result.rows.length === 0) {
      // Respond with a 404 (Not Found) status if the post is not found
      res.status(404).json({ message: "Post not found" });
    } else {
      // Respond with a 200 (OK) status and return the post data
      res.status(200).json({
        message: "Post successfully retrieved",
        data: result.rows[0], // Return the first row of the result (the post)
      });
    }
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error fetching the post:", error);

    // Respond with a server error status and message
    res.status(500).json({
      message:
        "An internal server error occurred while fetching the post.",
    });
  }
};




// Define an asynchronous function to handle incrementing the like count for a post
export const incrementLike = async (
  req: Request,  // Type for the request object
  res: Response  // Type for the response object
): Promise<void> => {
  const postID = req.params.id; // Extract the post ID from the request parameters
  const { userId } = req.body;  // Extract the user ID from the request body

  try {
    // Query to check if the user has already liked the post
    const checkLike = await pool.query(
      "SELECT * FROM postslikes WHERE post_id = $1 AND user_id = $2", // SQL query to check for existing like
      [postID, userId] // Parameters for the query
    );

    // If the user has already liked the post, respond with a 400 (Bad Request) status
    if (checkLike.rows.length > 0) {
      res.status(400).json({ message: "User has already liked this post" });
      return; // Exit the function to prevent further execution
    }
    // Query to add a like to the postslikes table
    await pool.query(
      "INSERT INTO postslikes (post_id, user_id) VALUES ($1, $2)", // SQL query to insert a new like
      [postID, userId] // Parameters for the query
    );
    // Query to update the like count in the posts table
    const result = await pool.query(
      "UPDATE post SET likes = likes + 1 WHERE id = $1 RETURNING likes", // SQL query to increment the like count
      [postID] // Parameter for the query
    );
    // Check if the post was found and updated
    if (result.rows.length === 0) {
      // Respond with a 404 (Not Found) status if the post is not found
      res.status(404).json({ message: "Post not found" });
    } else {
      // Extract the updated like count and respond with a 200 (OK) status
      const updatedLikes = result.rows[0].likes;
      res.status(200).json({ likes: updatedLikes });
    }
  } catch (error) {
    // Log any errors that occur during query execution or response handling
    console.error("Error updating like count:", error);
    // Respond with a server error status and message
    res.status(500).json({
      message:
        "An internal server error occurred while updating the like count.",
    });
  }
};

