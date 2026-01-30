import { useParams } from "react-router-dom";
import { Typography, Divider, Spin, Empty } from "antd";
import { Comment } from "@/shared/types";
import styles from "./PostPage.module.scss";
import { useArticle } from "@widgets/ArticleList/hooks/useArticle";
import { AddCommentForm } from "@features/comment/ui/AddCommentForm";

const { Title, Paragraph, Text } = Typography;

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: article, isLoading, isError } = useArticle(Number(id));

  if (isLoading)
    return (
      <div className={styles.center}>
        <Spin size="large" />
      </div>
    );
  if (isError || !article) return <Empty description="Статья не найдена" />;

  return (
    <article className={styles.root}>
      <header className={styles.header}>
        <Text className={styles.date}>
          {new Date(article.created_at).toLocaleDateString()}
        </Text>
        <Title className={styles.title}>{article.title}</Title>
      </header>

      <section className={styles.content}>
        <Paragraph className={styles.text}>{article.content}</Paragraph>
      </section>

      <Divider className={styles.divider} />

      <section className={styles.commentsSection}>
        <Title level={3}>Комментарии ({article.comments?.length || 0})</Title>

        <div className={styles.commentsList}>
          {article.comments?.map((comment: Comment) => (
            <div key={comment.id} className={styles.commentItem}>
              <Text strong>{comment.author_name}</Text>
              <Paragraph>{comment.content}</Paragraph>
              <Divider dashed />
            </div>
          ))}
        </div>

        <div className={styles.commentFormPlaceholder}>
          <AddCommentForm articleId={article.id} />
        </div>
      </section>
    </article>
  );
};
