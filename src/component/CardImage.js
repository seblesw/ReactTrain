// import './App.css';
//import CardImage from './component/CardImage';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box } from "@mui/material";

const CardImage = (props) => {
  return (
    <ImageList
      sx={{
        // width: 415,
        //height: 450,
        transform: "translateZ(0)",
        maxWidth: "400",
        width: "100%",
        margin: 1,
        borderRadius: "10px",
      }}
      //rowHeight={100}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 1 : 1;
        return (
          <ImageListItem key={props.img} cols={cols} rows={rows}>
            <img src={props.img} alt="kjj" loading="lazy" />
            <ImageListItemBar
              sx={{
                probackground:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={props.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${props.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
const itemData = [
  {
    img: "picture2.jpg",
    title: "ImageContainer",
    featured: true,
  },
  //   {
  //   img: "picture2.jpg",
  //     title: "ImageContainer",
  //     featured: true,
  // },
  // {
  // img: "picture3.jpg",
  //     title: "ImageContainer",
  //     featured: true,
  // },
];

export default CardImage;
