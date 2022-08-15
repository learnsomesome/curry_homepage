export type BgItem = {
  id: string;
  label: string;
  color?: string;
  source?: string | File;
};

export const defaultBgList = [
  { id: "color-dark-yellow", label: "Dark Yellow", color: "#E2BE6E" },
  { id: "color-light-green", label: "Light Green", color: "#ABC992" },
  { id: "color-sky-blue", label: "Sky Blue", color: "#B7E3E4" },
  { id: "color-customize", label: "Customize Color", color: "" },
  {
    id: "picture-beach",
    label: "Beach",
    source:
      "https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "picture-city",
    label: "City",
    source:
      "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "picture-mountain",
    label: "Mountain",
    source:
      "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "picture-customize",
    label: "Customize Picture",
    source: "",
  },
];

/** 格式化 CSS background 值 */
export const formatItemToBackground = (bgItem: BgItem) => {
  return `${bgItem.color || ""} url("${
    bgItem.source || ""
  }") center/cover no-repeat`;
};
