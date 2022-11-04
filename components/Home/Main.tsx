import { Col, Container, Row } from "react-bootstrap";
import classes from "./style.module.css";
import Button from "../ui/Button";
import CardAndImage from "../ui/CardAndImage";
import PageSectionTitle from "../ui/PageSectionTitle";
import Ideals, { Ideal } from "../About/Ideals";
import Blogs from "../Stories/Blogs";

import AnimateOnView from "../ui/AnimateOnView";
import { useTranslation } from "../../hooks";
import { useContext } from "react";
import { ContentContext } from "../../pages";

const icons = [
  "/images/vision.svg",
  "/images/mission.svg",
  "/images/value.svg",
];

const Main = () => {
  const t = useTranslation();
  const content: any = useContext(ContentContext);

  const ideals = content?.ideal?.map((item: any, idx: number) => {
    return {
      title: item?.title as string,
      body: item?.body as string,
      icon: icons[idx],
    } as Ideal;
  });

  return (
    <section className={classes.main + " px-2 px-md-5"}>
      <Container>
        <AnimateOnView>
          <PageSectionTitle
            title={content?.page_section_heading_1?.title}
            subtitle={content?.page_section_heading_1?.subtitle}
          />
        </AnimateOnView>

        <div className={classes.propositions + " d-flex flex-column"}>
          {content?.card_and_image?.map((card: any, idx: number) => (
            <AnimateOnView amount={0.6} key={card?.id}>
              <CardAndImage
                title={card?.title}
                img="/images/home-leadership.svg"
                dir={idx % 2 === 0 ? "text-left" : "text-right"}
              >
                <p className="mb-4">{card?.content}</p>
                <Button img="/images/arrow-right.svg" href="/solutions">
                  {t("cta.our-services")}
                </Button>
              </CardAndImage>
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView amount={0.3}>
          <Ideals ideals={ideals} />
        </AnimateOnView>

        <AnimateOnView>
          <PageSectionTitle
            title={content?.page_section_heading_2?.title}
            subtitle={content?.page_section_heading_2?.subtitle}
          />
        </AnimateOnView>
        <AnimateOnView amount={0.3}>
          <Row xs={1} sm={2} md={4} className="text-center mx-auto">
            {content?.addresses?.address?.map((addr: any) => (
              <Col className="p-3" key={addr.id}>
                <div className="border h-100 shadow-sm py-5 px-4">
                  <h3>{addr?.country}</h3>
                  <p className="m-0">{addr?.city}</p>
                </div>
              </Col>
            ))}
          </Row>
        </AnimateOnView>

        <div className=" my-5 pb-5 d-flex justify-content-center">
          <Button img="/images/arrow-right.svg" href="/contact">
            {t("cta.contact-us")}
          </Button>
        </div>

        <Blogs
          title={content?.page_section_heading_3?.title}
          blogs={content?.blogs?.map((blog: any) => ({
            ...blog,
            createdAt: new Date(blog.createdAt),
          }))}
        />
      </Container>
    </section>
  );
};

export default Main;
