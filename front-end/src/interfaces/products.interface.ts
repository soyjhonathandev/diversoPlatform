export interface IProduct {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  price: number;
  currency_id: string;
  data: any;
  lang: any;
  dist_agent: string;
  categories_id: {
    [x: string]: any;
    id: number;
  }[];
  product_links: any;
  created_at: string;
  updated_at: string;
}

export interface ICreateProduct {
  title: string;
  subtitle: string;
  thumbnail: File;
  currency_id: string;
  price: string;
  data: any;
  lang: any;
  dist_agent: string;
  categories_id: any;
  product_links: any;
  [key: string]: string | File | undefined;
}

export interface IUpdateProduct {
  title: string | undefined;
  subtitle: string | undefined;
  thumbnail: File | undefined;
  currency_id: string | undefined;
  price: string | undefined;
  data: string | undefined;
  dist_agent: string | undefined;
  categories_id: any;
  product_links: any | undefined;
  [key: string]: string | File | undefined;
}
