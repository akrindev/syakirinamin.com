import { mapNotionImageUrl } from "@/lib/notion-image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import { Collection } from "react-notion-x/build/third-party/collection";

const NotionPage = ({ recordMap }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <NotionRenderer
        bodyClassName="font-inter"
        showCollectionViewDropdown={false}
        fullPage={false}
        recordMap={recordMap}
        components={{ Collection }}
        mapImageUrl={mapNotionImageUrl}
        darkMode={resolvedTheme === "dark"}
        pageAside={null}
        footer={false}
      />
    </>
  );
};

export default NotionPage;
