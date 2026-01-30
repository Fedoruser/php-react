import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../shared/constants";
import { PostPage } from "../pages/post";
import { MainLayout } from "./layout/MainLayout/MainLayout";
import { HomePage } from "@pages/home/HomePage";
import { QueryProvider } from "./providers/QueryProvider/QueryProvider";
import { CreatePostPage } from "@pages/CreatePostPage/CreatePostPage";
export const Router = () => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={routes.post} element={<PostPage />} />
            <Route path={routes.createPost} element={<CreatePostPage />} />
          </Route>
        </Routes>
      </QueryProvider>
    </BrowserRouter>
  );
};
