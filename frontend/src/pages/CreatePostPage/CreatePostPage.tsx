import { Form, Input, Button, Typography, message } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { CreateArticleFormValues } from "@/shared/types";
import { articleService } from "@shared/service/Article";
import styles from "./CreatePostPage.module.scss";

const { Title } = Typography;

export const CreatePostPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateArticleFormValues) =>
      articleService.createArticle(values),
    onSuccess: () => {
      message.success("Статья опубликована!");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      navigate("/");
    },
    onError: () => {
      message.error("Не удалось создать статью. Проверьте соединение.");
    },
  });

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Title level={1} className={styles.pageTitle}>
          Новая публикация
        </Title>
      </header>

      <Form
        layout="vertical"
        onFinish={(v) => mutate(v)}
        className={styles.form}
        requiredMark={false}
      >
        <Form.Item
          label="ЗАГОЛОВОК"
          name="title"
          rules={[{ required: true, message: "Заголовок обязателен" }]}
        >
          <Input
            placeholder="Назовите вашу статью..."
            className={styles.input}
          />
        </Form.Item>

        <Form.Item
          label="СОДЕРЖАНИЕ"
          name="content"
          rules={[{ required: true, message: "Напишите хоть что-нибудь" }]}
        >
          <Input.TextArea
            rows={12}
            placeholder="Ваши мысли здесь..."
            className={styles.textarea}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            className={styles.submitBtn}
          >
            ОПУБЛИКОВАТЬ
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
