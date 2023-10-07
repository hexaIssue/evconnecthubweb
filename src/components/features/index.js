const { Box, Typography, Container, Grid } = require("@mui/material");
import * as COLORS from "@/constants/colors";

const Features = () => {
  const features = [
    {
      title: "Register Your Charging Point 📜",
      description:
        "If you own a personal charging point, register it on our platform and make it available for other EV drivers. Share the benefits of your charging infrastructure with the community.",
    },
    {
      title: "Find Charging Points 🔍",
      description:
        "Explore a comprehensive map of nearby electric vehicle charging stations, including both public and user-registered private points. Filter results based on distance, availability, and charging speeds.",
    },
    {
      title: "Book Charging Slots 🛡",
      description:
        "Reserve your charging slot in advance to ensure that you have a spot when you arrive. Our platform allows you to book charging slots at private charging stations.",
    },
    {
      title: "Real-Time Availability ⌚️",
      description:
        "Our platform provides real-time updates on the availability of charging stations. We also provide information on the number of charging slots available at each station.",
    },
    {
      title: "Favourite Charging Points 😍",
      description:
        "Save your frequently used charging stations, whether public or private, as favorites for quick access and effortless booking.",
    },
    {
      title: "Charging Point Reviews 📝",
      description:
        "Our platform allows you to leave reviews for charging stations. Share your experience with the community to help other EV drivers find the best charging stations.",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: COLORS.white,
        width: "100%",
        flexDirection: "column",
        paddingBottom: {
          sm: 10,
        },
        padding: {
          xs: 2,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 28,
          color: COLORS.textColor,
          fontWeight: "bold",
          paddingTop: {
            sm: 5,
            xs: 5,
          },
          paddingBottom: {
            sm: 5,
            xs: 5,
          },
        }}
      >
        Features
      </Typography>
      <Grid
        container
        spacing={5}
        sx={{
          padding: {
            lg: 0,
            md: 5,
            sm: 2,
          },
        }}
      >
        {features.map((feature) => (
          <Grid item md={6} lg={4}>
            <Box
              sx={{
                color: COLORS.white,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
                flexDirection: "column",
                padding: 5,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: 28,
                    md: 22,
                    sm: 18,
                    sx: 16,
                  },
                  fontWeight: "bold",
                  color: COLORS.textColor,
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: 18,
                    md: 16,
                    sm: 14,
                  },
                  color: COLORS.textColor,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
