import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ArticleCardProps } from "@/shared/types";
import styles from "./ArticleCard.module.scss";

export const ArticleCard = ({
  id,
  title,
  content,
  createdAt,
}: ArticleCardProps) => {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <Card
      className={styles.card}
      onClick={() => navigate(`/post/${id}`)}
      hoverable
    >
      <Typography.Text className={styles.date}>{date}</Typography.Text>
      <Typography.Title level={3} className={styles.title}>
        {title}
      </Typography.Title>
      <Typography.Paragraph ellipsis={{ rows: 3 }} className={styles.excerpt}>
        {content}
      </Typography.Paragraph>
      <div className={styles.footer}>Читать далее →</div>
    </Card>
  );
};
