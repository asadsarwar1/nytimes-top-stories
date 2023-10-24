import express from "express";
import { NYTIMES_API_END_POINTS } from "./constants/constants.js";
import { fetchTopStoriesController } from "./controllers/topStories.controller.js";

const app = express();
const PORT = 3000;

app.get("/arts", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    await fetchTopStoriesController(req, res, NYTIMES_API_END_POINTS[0]);
  } catch (error) {
    console.log({ error });
  }
});

app.get("/home", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    await fetchTopStoriesController(req, res, NYTIMES_API_END_POINTS[1]);
  } catch (error) {
    console.log({ error });
  }
});

app.get("/science", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    await fetchTopStoriesController(req, res, NYTIMES_API_END_POINTS[2]);
  } catch (error) {
    console.log({ error });
  }
});

app.get("/us", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    await fetchTopStoriesController(req, res, NYTIMES_API_END_POINTS[3]);
  } catch (error) {
    console.log({ error });
  }
});

app.get("/world", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    await fetchTopStoriesController(req, res, NYTIMES_API_END_POINTS[4]);
  } catch (error) {
    console.log({ error });
  }
});
app.listen(PORT, (error) => {
  if (!error) console.log("Server listening on port " + PORT);
  else console.log("Error occurred, server can't start", error);
});
