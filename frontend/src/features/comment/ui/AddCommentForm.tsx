import { Form, Input, Button, message } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddCommentFormValues } from "@/shared/types";
import { articleService } from "@shared/service/Article";
import styles from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
  articleId: number;
}

export const AddCommentForm = ({ articleId }: AddCommentFormProps) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: AddCommentFormValues) =>
      articleService.addComment(articleId, values),
    onSuccess: () => {
      message.success("Комментарий отправлен");
      form.resetFields();
      queryClient.invalidateQueries({ queryKey: ["article", articleId] });
    },
  });

  return (
    <div className={styles.wrapper}>
      <Form form={form} layout="vertical" onFinish={(v) => mutate(v)}>
        <Form.Item
          name="author_name"
          rules={[{ required: true, message: "Представьтесь" }]}
        >
          <Input placeholder="Ваше имя" />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[{ required: true, message: "Введите текст" }]}
        >
          <Input.TextArea rows={4} placeholder="Ваш комментарий..." />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={isPending} block>
          Опубликовать комментарий
        </Button>
      </Form>
    </div>
  );
};
