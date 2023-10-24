import React, { useEffect, useState } from "react";
import {
  fetchArt,
  fetchHome,
  fetchScience,
  fetchUS,
  fetchWorld,
} from "../../services/top-stories/topStories.service";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import StoryCard from "./components/card/Card";
import CircularProgress from "@mui/material/CircularProgress";

const TopStories = (props) => {
  const [value, setValue] = React.useState("art");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [topStoriesCards, setTopStoriesCards] = useState({});
  const [loader, setLoader] = useState(false);

  const formatCardsView = (story) => {
    return (
      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {story.map((article) => {
            return (
              <Grid item xs={3}>
                <StoryCard article={article} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };
  useEffect(() => {
    setLoader(true);
    switch (value) {
      case "art":
        fetchArt()
          .then((res) => {
            if (res.data) {
              setTopStoriesCards((pre) => ({
                ...pre,
                art: formatCardsView(res.data),
              }));
            }
            setLoader(false);
          })
          .catch((error) => {
            console.log({ error });
            setLoader(false);
          });
        break;
      case "home":
        fetchHome()
          .then((res) => {
            if (res.data) {
              setTopStoriesCards((pre) => ({
                ...pre,
                home: formatCardsView(res.data),
              }));
            }
            setLoader(false);
          })
          .catch((error) => {
            console.log({ error });
            setLoader(false);
          });
        break;
      case "science":
        fetchScience()
          .then((res) => {
            if (res.data) {
              setTopStoriesCards((pre) => ({
                ...pre,
                science: formatCardsView(res.data),
              }));
            }
            setLoader(false);
          })
          .catch((error) => {
            console.log({ error });
            setLoader(false);
          });
        break;
      case "us":
        fetchUS()
          .then((res) => {
            if (res.data) {
              setTopStoriesCards((pre) => ({
                ...pre,
                us: formatCardsView(res.data),
              }));
            }
            setLoader(false);
          })
          .catch((error) => {
            console.log({ error });
            setLoader(false);
          });
        break;
      case "world":
        fetchWorld()
          .then((res) => {
            if (res.data) {
              setTopStoriesCards((pre) => ({
                ...pre,
                world: formatCardsView(res.data),
              }));
            }
            setLoader(false);
          })
          .catch((error) => {
            console.log({ error });
            setLoader(false);
          });
        break;
      default:
        fetchArt()
          .then((res) => {
            if (res.data) {
              setTopStoriesCards((pre) => ({
                ...pre,
                art: formatCardsView(res.data),
              }));
            }
            setLoader(false);
          })
          .catch((error) => {
            console.log({ error });
            setLoader(false);
          });
        break;
    }
  }, [value]);

  const renderLoader = () => {
    return (
      <Box sx={{ display: "flex", justifyContent:'center', alignItems:'center', paddingTop:'400px' }}>
        <CircularProgress />
      </Box>
    );
  };
  return (
    <TabContext value={value} >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Art" value="art" />
          <Tab label="Home" value="home" />
          <Tab label="Science" value="science" />
          <Tab label="US" value="us" />
          <Tab label="World" value="world" />
        </TabList>
      </Box>
      <TabPanel value="art">
        {loader ? renderLoader() : topStoriesCards?.art ?? ""}
      </TabPanel>
      <TabPanel value="home">
        {loader ? renderLoader() : topStoriesCards?.home ?? ""}
      </TabPanel>
      <TabPanel value="science">
        {loader ? renderLoader() : topStoriesCards?.science ?? ""}
      </TabPanel>
      <TabPanel value="us">
        {loader ? renderLoader() : topStoriesCards?.us ?? ""}
      </TabPanel>
      <TabPanel value="world">
        {loader ? renderLoader() : topStoriesCards?.world ?? ""}
      </TabPanel>
    </TabContext>
  );
};

export default TopStories;
