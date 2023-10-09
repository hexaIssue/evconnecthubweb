import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import facebook from "@/assets/images/facebook.png";
import xLogo from "@/assets/images/telegram.png";
import instagram from "@/assets/images/instagram.png";
import { Box } from "@mui/material";
import Image from "next/image";
import * as COLORS from "@/constants/colors";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: COLORS.white,
        p: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "80%",
            backgroundColor: COLORS.darkGrayColor,
            height: 2,
            mb: "20px",
          }}
        />
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              At EV Connect Hub, we&apos;re dedicated to revolutionizing the
              electric vehicle experience. Our platform connects EV owners and
              charging station providers, making it easier than ever to find,
              reserve, and share charging points. Join us in shaping a greener
              future, one charge at a time.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: evconnecthub@smartexsolution.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +92 316 060 0240
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary">
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link
                href="https://www.facebook.com/profile.php?id=61551829154747&mibextid=ZbWKwL"
                color="inherit"
              >
                <Image src={facebook} width={25} height={25} />
              </Link>
              <Link
                href="https://instagram.com/evconnecthub?igshid=NGVhN2U2NjQ0Yg=="
                color="inherit"
                sx={{ pl: 1, pr: 1}}
              >
                <Image src={instagram} width={30} height={30} />
              </Link>
              <Link href="https://t.me/evconnecthub" color="inherit">
                <Image src={xLogo} width={27} height={27} />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://evconnect.smartexsolution.com/">
              EV Connect Hub
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
