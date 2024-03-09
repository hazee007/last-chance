import { SyntheticEvent, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import Items from "./Items";
import Settings from "./Settings";
import WishList from "./WishList";

export default function MobileView() {
  const [value, setValue] = useState("one");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderContent = (value: string) => {
    switch (value) {
      case "one":
        return <Settings />;
      case "two":
        return <WishList />;
      case "three":
        return <Items />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} aria-label="settings tabs">
          <Tab value="one" label="Settings" />
          <Tab value="two" label="Wishlist" />
          <Tab value="three" label="My Items" />
        </Tabs>
      </Box>
      {renderContent(value)}
    </>
  );
}
