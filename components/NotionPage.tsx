import React, { FC } from "react";
import { NotionRenderer } from "react-notion-x";

import { mapImageUrl } from "@/lib/notion-image";

const NotionPage = ({ recordMap }) => {
  return (
    <>
      <NotionRenderer
        bodyClassName={`font-inter`}
        showCollectionViewDropdown={false}
        fullPage={false}
        recordMap={recordMap}
        mapImageUrl={mapImageUrl}
        darkMode={false}
        pageAside={null}
        footer={false}
      />
    </>
  );
};

export default NotionPage;
