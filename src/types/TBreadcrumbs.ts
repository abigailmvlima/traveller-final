import { MouseEventHandler } from 'react';

export type TBreadcrumbsData = {
  title: string;
  onClick?: MouseEventHandler | undefined;
};
