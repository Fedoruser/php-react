import { articleService } from "@shared/service/Article";
import { useQuery } from "@tanstack/react-query";

export const useArticle = (id: number) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => articleService.getArticleById(id),
    enabled: !!id,
  });
};
