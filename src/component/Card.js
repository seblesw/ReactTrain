//import Card from './component/Card';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
const Cards = (props) => {
  return (
    <Card sx={{ maxWidth: 400, width: "100%" ,margin:1,borderRadius:"10"}}>
      {props.ava}
      <cardContent>
        <Typography variant="body2" color="text.Primery">
          <h3>{props.title}</h3>
          <p>{props.P}</p>
        </Typography>
      </cardContent>
    </Card>
  );
};
export default Cards;
