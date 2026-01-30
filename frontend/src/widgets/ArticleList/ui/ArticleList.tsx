import { ArticleCard } from "@entities/article/ui/ArticleCard";
import { Article } from "@/shared/types";
import { Col, Row } from "antd";

export const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <Row gutter={[32, 32]}>
      {articles.map((article) => (
        <Col xs={24} md={12} key={article.id}>
          <ArticleCard
            id={article.id}
            title={article.title}
            content={article.content}
            createdAt={article.created_at}
          />
        </Col>
      ))}
    </Row>
  );
};
