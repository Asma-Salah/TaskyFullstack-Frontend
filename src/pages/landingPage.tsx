import { Box, Typography, Stack, Button } from "@mui/material";

function LandingPage() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Magnificent-Plain-Wallpaper.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Stack textAlign={"center"}>
        <Typography
          variant="h1"
          textTransform={"capitalize"}
          fontFamily={"lato sans-serif"}
        >
          Tasky Platform
        </Typography>
        <Typography
          variant="h5"
          fontFamily={"lobster sans-serif"}
          fontStyle={"italic"}
          fontWeight={700}
        >
          Track your time with tasky, the only platform worthy of your time!!{" "}
          <br />
          write it down today and execute with priority. <br />
          AND always keep your mind clean for future unfiltered thoughts
        </Typography>
      </Stack>

      
    </Box>
  );
}
export default LandingPage;

// import { Typography, Button, Grid, Box } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// function Hero() {
//   return (
//     <>
//       {/* mmyHero */}

//       <Box
//         sx={{
//           minHeight: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundImage:
//             "url(https://tse4.mm.bing.net/th/id/OIP.IcEutnCufV-fQ8XqwwDe3gHaEw?pid=Api&P=0&h=220)",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           px: { xs: 2, md: 10 },
//           py: { xs: 8, md: 0 },
//         }}
//         mb={1}
//         overflow={"hidden"}
//       >
//         <Grid
//           container
//           spacing={4}
//           alignItems={"center"}
//           justifyContent={"center"}
//         >
//           <Grid size={{ xs: 12, md: 6 }}>
//             <Typography
//               variant="h3"
//               component={"h1"}
//               fontWeight={600}
//               sx={{ color: "#ffffff", textShadow: "1px 1px 4px #000" }}
//             >
//               Cleanse your inner thought a precious diamond inside you with
//               BlogIt
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "#e0e0e0",
//                 maxWidth: 500,
//                 mb: 2,
//                 textShadow: "1px, 1px 3px #000",
//               }}
//             >
//               Create and showcase your blog posts here it will definatly be a
//               skim through in the future
//             </Typography>

//             <Box sx={{ mt: 4 }}>
//               <Button
//                 component={RouterLink}
//                 to="/register"
//                 variant="contained"
//                 size="large"
//                 sx={{ mr: 2 }}
//               >
//                 Get Started
//               </Button>
//               <Button
//                 component={RouterLink}
//                 to="/login"
//                 variant="outlined"
//                 size="large"
//               >
//                 LogIn
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }
// export default Hero;
