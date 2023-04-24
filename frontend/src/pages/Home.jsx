import PostCard from "../components/post/PostCard";
import styles from "./pages.module.css";
import Grid from "@mui/material/Unstable_Grid2";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Grid container>
        <Grid
          md={8}
          sx={{ margin: "auto" }}
        >
          {samplePost.map((post, i) => (
            <div key={i}>
              <PostCard
                className="home-post"
                post={post.post}
                avatar={post.avatar}
                name={post.name}
                timing={post.time}
              />
            </div>
          ))}
        </Grid>
        <Grid
          md={4}
          sx={{
            borderLeft: "1px solid #eee",
            pt: 5,
            pl: 2,
          }}
        >
          <div>Under Development Progress!</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

const samplePost = [
  {
    avatar:
      "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
    name: "_rajan_vjs",
    time: "Apr 24, 2023",
    post: {
      url: "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
      name: "post",
      likes: 100,
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  },
  {
    // avatar:
    //   "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
    name: "_rajan_vjs",
    time: "Apr 24, 2023",
    post: {
      url: "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
      name: "post",
      likes: 900,
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  },
  {
    avatar:
      "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
    name: "_rajan_vjs",
    time: "Apr 24, 2023",
    post: {
      url: "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
      likes: 1000,
      name: "post",
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  },
  {
    avatar:
      "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
    name: "_rajan_vjs",
    time: "Apr 24, 2023",
    post: {
      url: "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
      name: "post",
      likes: 1000,
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  },
  {
    avatar:
      "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
    name: "_rajan_vjs",
    time: "Apr 24, 2023",
    post: {
      url: "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
      name: "post",
      likes: 1000,
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  },
  {
    avatar:
      "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
    name: "_rajan_vjs",
    time: "Apr 24, 2023",
    post: {
      url: "https://res.cloudinary.com/dx1do1dxo/image/upload/v1659014445/samples/IMG_20220401_113843_2_wkwrxv.jpg",
      likes: 1000,
      name: "post",
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  },
];
