import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Box } from "@mui/material";
import * as COLORS from "@/constants/colors";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        width: "100%",
        height: 300,
      }}
    >
      <iframe
        width="100"
        height="100"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;