"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";

import * as COLORS from "@/constants/colors";
import AppStoreButton from "@/assets/images/AppStore.svg";
import GooglePlayButton from "@/assets/images/GooglePlay.svg";
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import { Grid } from "@mui/material";

function ResponsiveAppBar({ userAuthChanged }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar
      className="navbar"
      sx={{
        backgroundColor: COLORS.white,
        position: "fixed",
        boxShadow: "none",
      }}
    >
      <Container>
        <Grid container justifyContent={"space-between"}>
          <Grid item sx={{ alignSelf: "center" }}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                fontFamily: "raleway",
                fontWeight: 800,
                color: COLORS.primary,
                textDecoration: "none",
                fontSize: "20px",
                width: "171px",
                flexGrow: 1,
              }}
            >
              EV Connect Hub
            </Typography>
          </Grid>
          <Grid item>
            <Link
              style={{ marginRight: "-35px" }}
              href="https://apps.apple.com/us/app/ev-connecthub/id6458836437"
            >
              <Image src={AppStoreButton} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.smartexsolutions.evconnecthub">
              <Image src={GooglePlayButton} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
