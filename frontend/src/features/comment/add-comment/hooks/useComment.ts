import { useMutation, useQueryClient } from "@tanstack/react-query";
import { articleService } from "@shared/service/Article";

export const useAddComment = (articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (comment: { author_name: string; content: string }) =>
      articleService.addComment(articleId, comment),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["article", articleId] });
    },
  });
};
