import Image from "next/image";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import Link from "../ui/Link";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

type Blog = {
  createdAt: Date;
  img: string;
  title: string;
  id: string;
};

const blogs: Blog[] = [
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
];

type BlogProps = {
  blog: Blog;
};

const Blog = (props: BlogProps) => {
  const { blog } = props;

  const locale = useRouter().locale || "fr";

  const formatDate = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    year: "numeric",
  }).format;

  return (
    <article className="position-relative p-0">
      <div className={classes.blogImg + " position-relative"}>
        <Image
          src={blog.img}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div
        className={classes.blogDate + " py-2 px-3 text-center d-inline-block"}
      >
        <span className="fs-3">{blog.createdAt.getDate()}</span>
        <br />
        <small className="text-capitalize">{formatDate(blog.createdAt)}</small>
      </div>
      <p className="lead mt-3 mb-0">{blog.title}</p>
      <Link href={"/blogs/" + blog.id} className={classes.blogLink}>
        Voir plus &gt;
      </Link>
    </article>
  );
};

const Blogs = () => {
  const renderBlogs = blogs.slice(0, 3).map((blog) => (
    <Col key={blog.id} className="px-4 py-5 mb-4">
      <Blog blog={blog} />
    </Col>
  ));

  return (
    <div className={classes.blogsWrapper}>
      <PageSectionTitle title="Nos articles" subtitle="" />
      <Row xs={1} md={2} lg={3}>
        {renderBlogs}
      </Row>
    </div>
  );
};

export default Blogs;
