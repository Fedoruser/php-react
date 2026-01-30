import { api } from "@shared/api/api";
import { AddCommentFormValues } from "@/shared/types";

export class ArticleService {
  async getArticles() {
    const response = await api.get("api/articles");
    return response.data;
  }
  async getArticleById(id: number) {
    const response = await api.get(`api/articles/${id}`);
    return response.data;
  }
  async createArticle(data: { title: string; content: string }) {
    const response = await api.post("api/articles", data);
    return response.data;
  }
  async addComment(articleId: number, comment: AddCommentFormValues) {
    const response = await api.post(
      `api/articles/${articleId}/comments`,
      comment,
    );
    return response.data;
  }
}
