import axios from "axios";

export const fetchTopStoriesController = async (req, res, endpoint) => {
  try {
    const response = await axios.get(endpoint);
    res.set("Content-Type", "text/html");
    res.status(200).send(response.data.results);
  } catch (error) {
    console.log({ error });
  }
};
