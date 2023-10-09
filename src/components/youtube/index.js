import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Box, Container } from "@mui/material";
import * as COLORS from "@/constants/colors";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.white,
        }}
      >
        <iframe
          width="100%"
          height="100"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Box>
    </Container>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
