import "./App.css";
import Cards from "./component/Card";
import CardImage from "./component/CardImage";
import Avatars from "./component/Avatar";
import Navebar from "./component/Navebar";
import Container from "./component/Container";
import { Avatar, Box, CardHeader } from "@mui/material";
import { color, maxWidth } from "@mui/system";
import Image1 from "./asset/picture1.jpg";
import Image2 from "./asset/picture2.jpg";
import Image3 from "./asset/picture3.jpg";
const App = (props) => {
  return (
    <>
      <div>
        <Box>
          <Navebar />
        </Box>
        <Box sx={{ display: "flex", border: "solid", padding: "12px" }}>
          <Cards
            title="Thise is the First React Component Training By Bereket Zergaw"
            P="React is a free and open-source front-end JavaScript library for building 
            user interfaces based on UI components."
            ava={
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "purple" }}></Avatar>}
              />
            }
          />
          <Cards title="2nd Train with react" />
          <Cards title="3rd Train" />
          <Cards title="4th Train" />
          <Cards title="5th Train" />
        </Box>
        <Avatars />
        <Box sx={{ display: "flex" }}>
          <CardImage title="My Pictures1" img={Image1} />
          <CardImage title="My Picture2" img={Image2} />
          <CardImage title="My Picture3" img={Image3} />
        </Box>
      </div>
    </>
  );
};
export default App;
