import classes from "./style.module.css";
import Image from "next/image";
import Link from "../ui/Link";
import { useRouter } from "next/router";

export type Blog = {
  createdAt: Date;
  img: string;
  title: string;
  id: string;
};

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
      <div className={classes.blogImg + " position-relative bg-light"}>
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

export default Blog;
