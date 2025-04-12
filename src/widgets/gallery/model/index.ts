export interface Card {
  id: number;
  title: string;
  year: string;
  img: string;
}

export interface GalleryResponse {
  items: Card[];
  total: number;
}
