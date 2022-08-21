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

export const defaultPageList = [
  {
    key: 1,
    title: "视频",
    pages: [
      {
        rootKey: 1,
        name: "Bilibili",
        address: "https://www.bilibili.com/",
      },
      {
        rootKey: 1,
        name: "Acfun",
        address: "https://www.acfun.cn/",
      },
      { rootKey: 1, name: "爱奇艺", address: "http://www.iqiyi.com/" },
      { rootKey: 1, name: "搜狐视频", address: "https://tv.sohu.com/" },
      { rootKey: 1, name: "腾讯视频", address: "https://v.qq.com/" },
      { rootKey: 1, name: "优酷视频", address: "https://youku.com/" },
      { rootKey: 1, name: "百度视频", address: "http://v.baidu.com/" },
      { rootKey: 1, name: "芒果TV", address: "https://www.mgtv.com/" },
    ],
  },
  {
    key: 2,
    title: "购物",
    pages: [
      { rootKey: 2, name: "淘宝", address: "https://www.taobao.com/" },
      { rootKey: 2, name: "天猫", address: "https://www.tmall.com/" },
      { rootKey: 2, name: "京东", address: "https://www.jd.com/" },
      {
        rootKey: 2,
        name: "当当",
        address: "http://www.dangdang.com/",
      },
    ],
  },
  {
    key: 3,
    title: "体育",
    pages: [
      {
        rootKey: 3,
        name: "新浪体育",
        address: "http://sports.sina.com.cn/",
      },
      { rootKey: 3, name: "虎扑体育", address: "https://www.hupu.com/" },
      {
        rootKey: 3,
        name: "搜狐体育",
        address: "https://sports.sohu.com/",
      },
      {
        rootKey: 3,
        name: "腾讯体育",
        address: "https://sports.qq.com/",
      },
      { rootKey: 3, name: "CCTV5", address: "https://sports.cctv.com/" },
    ],
  },
  {
    key: 4,
    title: "新闻",
    pages: [
      {
        rootKey: 4,
        name: "中国新闻网",
        address: "https://www.chinanews.com.cn/",
      },
      {
        rootKey: 4,
        name: "新浪新闻",
        address: "https://news.sina.com.cn/",
      },
      { rootKey: 4, name: "搜狐新闻", address: "http://news.sohu.com/" },
      { rootKey: 4, name: "腾讯新闻", address: "https://news.qq.com/" },
      { rootKey: 4, name: "网易新闻", address: "https://news.163.com/" },
    ],
  },
  {
    key: 5,
    title: "音乐",
    pages: [
      {
        rootKey: 5,
        name: "网易云音乐",
        address: "https://music.163.com/",
      },
      { rootKey: 5, name: "QQ音乐", address: "https://y.qq.com/" },
      { rootKey: 5, name: "酷狗音乐", address: "https://www.kugou.com/" },
      { rootKey: 5, name: "酷我音乐", address: "http://www.kuwo.cn/" },
    ],
  },
  {
    key: 6,
    title: "社交",
    pages: [
      { rootKey: 6, name: "知乎", address: "https://www.zhihu.com/" },
      {
        rootKey: 6,
        name: "百度贴吧",
        address: "https://tieba.baidu.com/index.html",
      },
      {
        rootKey: 6,
        name: "虎扑社区",
        address: "https://bbs.hupu.com/",
      },
      { rootKey: 6, name: "斗鱼", address: "https://douyu.com/" },
      { rootKey: 6, name: "虎牙", address: "https://huya.com/" },
    ],
  },
  {
    key: 7,
    title: "小说",
    pages: [
      { rootKey: 7, name: "百度小说", address: "https://yuedu.baidu.com/" },
      { rootKey: 7, name: "起点中文网", address: "https://www.qidian.com/" },
      { rootKey: 7, name: "晋江文学城", address: "https://www.jjwxc.net/" },
      { rootKey: 7, name: "七猫中文网", address: "https://www.qimao.com/" },
    ],
  },
  {
    key: 8,
    title: "邮箱",
    pages: [
      { rootKey: 8, name: "163邮箱", address: "https://mail.163.com/" },
      { rootKey: 8, name: "126邮箱", address: "https://mail.126.com/" },
      { rootKey: 8, name: "QQ邮箱", address: "https://mail.qq.com/" },
      { rootKey: 8, name: "新浪邮箱", address: "https://mail.sina.com.cn/" },
      { rootKey: 8, name: "阿里邮箱", address: "https://mail.aliyun.com/" },
    ],
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
