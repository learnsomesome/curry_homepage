import { Dropdown, Input } from "@nextui-org/react";
import { useState, useMemo } from "react";
import { Baidu, Google, Search } from "../assets";

const browsers: Record<string, any> = {
  Baidu: {
    key: "Baidu",
    icon: <Baidu />,
    url: "https://www.baidu.com/s?wd=",
  },
  Google: {
    key: "Google",
    icon: <Google />,
    url: "https://www.google.com.hk/search?q=",
  },
};

const SearchInput = () => {
  const defaultBrowser =
    window.localStorage.getItem("browser") || Object.keys(browsers)[0];
  const [selected, setSelected] = useState(new Set([defaultBrowser]));
  const [value, setValue] = useState("");

  const selectedValue = useMemo(() => {
    const value = Array.from(selected)[0].replaceAll("_", " ");
    window.localStorage.setItem("browser", value);

    return value;
  }, [selected]);

  const onSearch = () => {
    if (value.trim()) {
      window.location.href =
        browsers[selectedValue].url + encodeURIComponent(value.trim());
    }

    setValue("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Dropdown disableAnimation>
        <Dropdown.Button light>{browsers[selectedValue].icon}</Dropdown.Button>
        <Dropdown.Menu
          aria-label="browser select"
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected as any}
        >
          {Object.values(browsers).map((item: any) => (
            <Dropdown.Item key={item.key} icon={item.icon}>
              {item.key}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Input
        aria-label="search input"
        type="search"
        css={{ mw: 584, flex: 1, ml: 8 }}
        size="lg"
        clearable
        contentClickable
        placeholder="Please enter"
        contentLeftStyling={false}
        value={value}
        contentRight={<Search />}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.code === "Enter") onSearch();
        }}
        onContentClick={(key) => {
          if (key === "right") onSearch();
        }}
      />
    </div>
  );
};

export default SearchInput;
