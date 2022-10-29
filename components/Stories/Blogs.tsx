import { Col, Row } from "react-bootstrap";
import PageSectionTitle from "../ui/PageSectionTitle";
import Blog from "./Blog";
import classes from "./style.module.css";

import type { Blog as BlogType } from "./Blog";

type BlogsProps = {
  blogs: BlogType[];
};

const Blogs = (props: BlogsProps) => {
  const { blogs } = props;

  const renderBlogs = blogs.map((blog) => (
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
