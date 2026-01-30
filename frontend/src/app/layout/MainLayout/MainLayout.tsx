import styles from "./MainLayout.module.scss";
import { Layout } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content } = Layout;

export const MainLayout = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}>POLIS.BLOG</div>
        <div className={styles.headerRight}>
          <Link to="/create" className={styles.createLink}>
            + СОЗДАТЬ ПОСТ
          </Link>
        </div>
      </Header>

      <Content className={styles.content}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};
