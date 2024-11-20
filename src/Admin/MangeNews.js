import React, { useEffect, useState } from "react";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";

const ManageNews = ({ activeSection, toggleSection }) => {
  const [newsType, setNewsType] = useState("general");
  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async (type) => {
    try {
      const response = await axios.get(`http://localhost:5214/api/Alumnus/GetNewsByType/GetNews/${type}`);
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  useEffect(() => {
    if (activeSection === "news") {
      fetchNewsData(newsType);
    }
  }, [activeSection, newsType]);

  return (
    <Box>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" color="#003883" gutterBottom>
              News and Historical Archives
            </Typography>
            <Button
              variant="contained"
              onClick={() => toggleSection("news")}
              sx={{ background: activeSection === "news" ? "#FF8C00" : "#003883", color: "#fff" }}
            >
              Manage
            </Button>
          </Box>
        </CardContent>
      </Card>

      {activeSection === "news" && (
        <Box>
          <FormControl fullWidth>
            <InputLabel>Select News Type</InputLabel>
            <Select value={newsType} onChange={(e) => setNewsType(e.target.value)}>
              <MenuItem value="general">General News</MenuItem>
              <MenuItem value="magazine">Magazines</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={2}>
            {newsData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{item.headline}</Typography>
                    <img src={`data:image/jpeg;base64,${item.media}`} alt="News" style={{ width: "100%" }} />
                    <Typography>{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ManageNews;
