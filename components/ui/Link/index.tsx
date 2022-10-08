import NextLink from "next/link";

interface LinkProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

const Link = (props: LinkProps) => {
  return (
    <span className={props.className}>
      <NextLink href={props.href ?? ""}>{props.children}</NextLink>
    </span>
  );
};

export default Link;
