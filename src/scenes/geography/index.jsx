import { Box, useTheme } from "@mui/material";
import GeographyChart from "/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/GeographyChart.jsx";
import Headerr from "/Users/kaustubhsagale/Desktop/carproject/src/MyComponents/Headerr.jsx";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Headerr title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
