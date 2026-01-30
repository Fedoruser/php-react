export interface Article {
  id: number;
  title: string;
  content: string;
  created_at: string;
  comments?: Comment[];
}

export interface ArticleCardProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface Comment {
  id: number;
  author_name: string;
  content: string;
}

export interface CreateArticleFormValues {
  title: string;
  content: string;
}
export interface AddCommentFormValues {
  author_name: string;
  content: string;
}
