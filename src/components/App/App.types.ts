interface ImageUrls {
  small: string;
  regular: string;
}
export interface Image {
  id: string;
  alt_description: string;
  urls: ImageUrls;
  likes?: number;
  user?: {
    name: string;
  };
}
