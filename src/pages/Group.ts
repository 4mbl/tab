import type { Link } from './Link';

export type Group = {
  type: 'group';
  title: string;
  links: Link[];
};
