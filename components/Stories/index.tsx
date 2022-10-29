import { Container } from "react-bootstrap";
import Blogs from "./Blogs";
import classes from "./style.module.css";

import type { Blog as BlogType } from "./Blog";

const blogs: BlogType[] = [
  {
    createdAt: new Date(),
    id: "1",
    img: "/images/hero.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    createdAt: new Date(),
    id: "2",
    img: "/images/team.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    createdAt: new Date(),
    id: "3",
    img: "/images/team_2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    createdAt: new Date(),
    id: "4",
    img: "/images/hero.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    createdAt: new Date(),
    id: "5",
    img: "/images/team.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Stories = () => {
  return (
    <Container className={classes.container + " d-flex flex-column pb-5"}>
      <Blogs blogs={blogs} />
    </Container>
  );
};

export default Stories;
