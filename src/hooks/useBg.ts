import localforage from "localforage";
import { useEffect, useState } from "react";
import { BgItem, defaultBgList } from "../utils";

type IBg = {
  id: string;
  list: BgItem[];
};

export const useBg = (): [
  {
    bg: IBg;
  },
  {
    updateBgId: (id: string) => void;
    updateBgList: (id: string, value: Record<string, string | File>) => void;
  }
] => {
  const [bg, setBg] = useState<IBg>({
    id: "",
    list: defaultBgList,
  });

  const updateBgId = (id: string) => {
    localforage.getItem("bg", (getError, value: IBg | null) => {
      !getError &&
        value &&
        localforage.setItem("bg", { ...value, id }, (setError) => {
          !setError && setBg({ ...bg, id });
        });
    });
    const newBg = { ...bg, id };

    localforage.setItem("bg", newBg, (err) => {
      !err && setBg(newBg);
    });
  };

  const updateBgList = (id: string, value: Record<string, string | File>) => {
    const _value =
      id === "picture-customize"
        ? { source: URL.createObjectURL(value["source"] as File) }
        : value;

    localforage.setItem(
      "bg",
      {
        ...bg,
        list: bg.list.map((item) =>
          item.id === id ? { ...item, ...value } : item
        ),
      },
      (err) => {
        !err &&
          setBg((pre) => ({
            ...pre,
            list: pre.list.map((item) =>
              item.id === id ? { ...item, ..._value } : item
            ),
          }));
      }
    );
  };

  useEffect(() => {
    localforage.getItem("bg", (err, value: IBg | null) => {
      console.log("bg", value);

      if (!err && value) {
        setBg({
          id: value?.id || "",
          list:
            value?.list.map((item: BgItem) =>
              item.source instanceof File
                ? { ...item, source: URL.createObjectURL(item.source) }
                : item
            ) || defaultBgList,
        });
      }
    });
  }, []);

  return [{ bg }, { updateBgId, updateBgList }];
};
