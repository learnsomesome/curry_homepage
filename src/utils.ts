export type BgItem = {
  id: string;
  label: string;
  color?: string;
  source?: string | File;
};

export type FavoritePage = {
  key: string;
  name: string;
  address: string;
};

export const URL_REG_EXP = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;

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

/** 判断是否为移动端 */
export const isMobile = () => {
  let mobileFlag = false;

  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    mobileFlag = true;
  }
  if (document.body.clientWidth < 800) {
    mobileFlag = true;
  }

  return mobileFlag;
};
