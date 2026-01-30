import { Typography } from "antd";
import styles from "./HomePage.module.scss";
import { ArticleList } from "@widgets/ArticleList/ui/ArticleList";
import { useArticles } from "@widgets/ArticleList/hooks/useArticles";

export const HomePage = () => {
  const { data, isLoading, isError } = useArticles();
  if (isLoading) {
    return <div>Загрузка статей...</div>;
  }
  if (isError) {
    return <div>Ошибка при загрузке статей.</div>;
  }
  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Typography.Title level={1} className={styles.title}>
          Последние публикации
        </Typography.Title>
        <Typography.Text className={styles.subtitle}>
          Мысли о коде, архитектуре и дизайне
        </Typography.Text>
      </header>

      <ArticleList articles={data || []} />
    </section>
  );
};
