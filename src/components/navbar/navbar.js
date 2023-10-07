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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "raleway",
                fontWeight: 700,
                color: COLORS.primary,
                alignSelf: "center",
                fontSize: "16px",
              }}
            >
              EV Connect Hub
            </Typography>

            <Link href="https://apps.apple.com/us/app/ev-connecthub/id6458836437">
              <Image src={AppStoreButton} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.smartexsolutions.evconnecthub">
              <Image src={GooglePlayButton} />
            </Link>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => {}}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Link href="https://apps.apple.com/us/app/ev-connecthub/id6458836437">
              <Image src={AppStoreButton} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.smartexsolutions.evconnecthub">
              <Image src={GooglePlayButton} />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
