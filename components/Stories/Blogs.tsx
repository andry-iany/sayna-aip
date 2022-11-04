import { Col, Row } from "react-bootstrap";
import PageSectionTitle from "../ui/PageSectionTitle";
import Blog from "./Blog";
import classes from "./style.module.css";

import type { Blog as BlogType } from "./Blog";
import AnimateOnView from "../ui/AnimateOnView";

type BlogsProps = {
  blogs: BlogType[];
  title: string;
};

const Blogs = (props: BlogsProps) => {
  const { blogs } = props;

  const renderBlogs = blogs.map((blog) => (
    <Col key={blog.id} className="px-4 py-5 mb-4">
      <AnimateOnView amount={0.3}>
        <Blog blog={blog} />
      </AnimateOnView>
    </Col>
  ));

  return (
    <div className={classes.blogsWrapper}>
      <AnimateOnView>
        <PageSectionTitle title={props.title} subtitle="" />
      </AnimateOnView>
      <Row xs={1} md={2} lg={3}>
        {renderBlogs}
      </Row>
    </div>
  );
};

export default Blogs;
