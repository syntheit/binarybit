import type { NextPage } from "next";
import styles from "../styles/Home.module.sass";
import Layout from "../components/Layout/Layout";
import {
  getSortedContentDataByCategory,
  getSortedContentDataGivenContent,
} from "../lib/articles";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import { categories } from "../constants/Categories";
import TextCTA from "../components/TextCTA/TextCTA";

const metadata: { title: string; defaultDescription: boolean } = {
  title: "Binary Bit",
  defaultDescription: true,
};

export async function getStaticProps() {
  const allContentData: { id: string }[][] = getSortedContentDataByCategory();
  const sortedContent = getSortedContentDataGivenContent();
  return {
    props: {
      allContentData: allContentData,
      sortedContent: sortedContent,
    },
  };
}

// @ts-ignore
const Home: NextPage = ({ sortedContent }) => {
  return (
    <Layout metadata={metadata}>
      <div className={styles.container}>
        <div className={styles.latestContentContainer}>
          <div className={styles.articleContainer}>
            {sortedContent.map(({ id, title, coverimage }, index) => (
              <ArticleCard
                id={id}
                title={title}
                coverimage={coverimage}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className={styles.categoriesCTA}>
          {categories.map(({ label, id }) => (
            <TextCTA label={label} id={id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
