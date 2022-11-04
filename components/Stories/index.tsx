import { Container } from "react-bootstrap";
import Blogs from "./Blogs";
import classes from "./style.module.css";

import { useContext } from "react";
import { ContentContext } from "../../pages/stories";

const Stories = () => {
  const content: any = useContext(ContentContext);

  return (
    <Container className={classes.container + " d-flex flex-column pb-5"}>
      <Blogs
        title={content?.page_section_heading_1?.title}
        blogs={content?.blogs?.map((blog: any) => ({
          ...blog,
          createdAt: new Date(blog.createdAt),
        }))}
      />
    </Container>
  );
};

export default Stories;
