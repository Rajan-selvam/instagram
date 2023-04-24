import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const PostCard = ({ avatar, name, timing, post, className }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 450, m: 2, borderBottom: "1px solid #ddd" }} elevation={0} className={className} square>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{ transform: "rotate(90deg)" }} />
          </IconButton>
        }
        title={
          <>
            <span>{name}</span>
            <VerifiedSharpIcon
              sx={{
                pl: 1,
                width: "15px",
                height: "15px",
                color: "rgb(83, 149,233)",
              }}
            />
          </>
        }
        subheader={timing}
      />
      <CardMedia
        component="img"
        height="450"
        image={post.url}
        alt={post.name}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {!liked && (
            <FavoriteBorderOutlinedIcon onClick={() => setLiked(!liked)} />
          )}
          {liked && (
            <FavoriteSharpIcon
              sx={{ color: "red" }}
              onClick={() => setLiked(!liked)}
            />
          )}
        </IconButton>
        <IconButton aria-label="share">
          <ModeCommentOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Typography sx={{ pl: 2, fontSize: "12px" }}>
        {liked ? post.likes + 1 : post.likes} likes
      </Typography>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content.slice(1, 100)}...
          <span onClick={handleExpandClick}> more</span>
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.content.slice(100, post.content.length)}
          </Typography>
          {/* <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PostCard;
