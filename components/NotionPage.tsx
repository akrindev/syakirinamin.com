import React, { FC } from "react";
import { NotionRenderer } from "react-notion-x";

import { mapNotionImageUrl } from "@/lib/notion-image";

const NotionPage = ({ recordMap }) => {
  return (
    <>
      <NotionRenderer
        bodyClassName={`font-inter dark:text-gray-400`}
        showCollectionViewDropdown={false}
        fullPage={false}
        recordMap={recordMap}
        mapImageUrl={mapNotionImageUrl}
        darkMode={false}
        pageAside={null}
        footer={false}
      />
    </>
  );
};

export default NotionPage;
