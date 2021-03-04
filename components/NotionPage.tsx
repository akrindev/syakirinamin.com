import { ExtendedRecordMap } from "notion-types";
import React, { FC } from "react";
import {
  Code,
  Collection,
  CollectionRow,
  NotionRenderer,
} from "react-notion-x";

import Link from "next/link";
import dynamic from "next/dynamic";
import { mapImageUrl } from "@/lib/notion-image";

type Props = {
  recordMap: ExtendedRecordMap;
};

const Modal = dynamic(
  () => import("react-notion-x").then((notion) => notion.Modal),
  { ssr: false }
);

const NotionPage: FC<Props> = ({ recordMap }) => {
  return (
    <>
      <NotionRenderer
        components={{
          pageLink: ({
            href,
            as,
            passHref,
            prefetch,
            replace,
            scroll,
            shallow,
            locale,
            ...props
          }) => (
            <Link
              href={href}
              as={as}
              passHref={passHref}
              prefetch={prefetch}
              replace={replace}
              scroll={scroll}
              shallow={shallow}
              locale={locale}>
              <a {...props} />
            </Link>
          ),
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
          modal: Modal,
        }}
        bodyClassName={`py-2 overflow-hidden`}
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
