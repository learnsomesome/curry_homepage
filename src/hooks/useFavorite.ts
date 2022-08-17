import localforage from "localforage";
import { useEffect, useState } from "react";
import { FavoritePage } from "../utils";

export const useFavorite = (): [
  { favoritePages: FavoritePage[] },
  {
    addFavorite: (page: FavoritePage) => void;
    deleteFavorite: (key: string) => void;
  }
] => {
  const [favoritePages, setFavoritePages] = useState<FavoritePage[]>([]);

  const addFavorite = (page: FavoritePage) => {
    const pages = [page, ...favoritePages];

    localforage.setItem("favorite", pages, (err) => {
      !err && setFavoritePages(pages);
    });
  };

  const deleteFavorite = (key: string) => {
    const pages = favoritePages.filter((item) => item.key !== key);

    localforage.setItem("favorite", pages, (err) => {
      !err && setFavoritePages(pages);
    });
  };

  useEffect(() => {
    localforage.getItem("favorite", (err, value: FavoritePage[] | null) => {
      console.log("favorite", value);

      if (!err && value) setFavoritePages(value);
    });
  }, []);

  return [{ favoritePages }, { addFavorite, deleteFavorite }];
};
