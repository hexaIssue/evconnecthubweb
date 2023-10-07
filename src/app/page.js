"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@/components/navbar/navbar";
import { Typography } from "@mui/material";
import * as COLORS from "@/constants/colors";
import Image from "next/image";
import blockImage from "@/assets/images/headerImage.png";
import Head from "next/head";
import YoutubeEmbed from "@/components/youtube";
import "./page.css";
import Features from "@/components/features";
import Footer from "@/components/footer";

function ResponsiveAppBar() {
  return (
    <div>
      <Head>
        <title>EV Connect Hub</title>
        <meta
          name="description"
          content="EV Connect Hub: Your Ultimate EV Charging Solution. Find, Reserve, and Share Electric Vehicle Charging Points with Ease. Join the EV Revolution Today!"
        />
      </Head>
      <Box
        className="landing"
        sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <AppBar />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            width: "100%",
            flexDirection: {
              xs: "column",
              md: "row",
              lg: "row",
            },
            height: { xs: "700px", md: "400px", lg: "600px" },
            justifyContent: "center",
            alignItems: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundImage: `linear-gradient(180deg, ${COLORS.darkGrayColor} 40%, rgba(255,255,255,1) 74%)`,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "100%", lg: "55%" },
              padding: { sm: "0", xs: "16px" },
              marginTop: "64px",
            }}
            alignItems={{ xs: "center", md: "center", lg: "flex-start" }}
          >
            <Typography
              sx={{
                whiteSpace: "pre-wrap",
                fontSize: { xs: "30px", md: "40px", lg: "58px" },
                fontWeight: "800",
                fontFamily: "raleway",
                textTransform: "uppercase",
                color: COLORS.primaryLight,
                textAlign: { md: "center", xs: "center", lg: "left" },
              }}
            >
              Register your personal, office or home{" "}
              <Typography
                as="span"
                sx={{
                  width: "100%",
                  fontSize: { xs: "30px", md: "40px", lg: "58px" },
                  fontWeight: "700",
                  fontFamily: "raleway",
                  textTransform: "uppercase",
                  color: COLORS.primary,
                }}
              >
                Charging point{" "}
              </Typography>
              and start earning now
            </Typography>
          </Box>
          <Image src={blockImage} alt="headerImage" />
        </Box>
      </Box>
      <Features />
      <YoutubeEmbed embedId="8Hp5Ozjl6UI" />
      <Footer />
    </div>
  );
}
export default ResponsiveAppBar;
