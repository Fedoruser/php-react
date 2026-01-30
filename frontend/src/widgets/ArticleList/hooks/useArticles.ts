import { articleService } from "@shared/service/Article";
import { useQuery } from "@tanstack/react-query";

export const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: articleService.getArticles,
  });
};
