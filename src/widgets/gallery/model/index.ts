export interface Card {
  id: number;
  title: string;
  year: string;
  img: string;
}

export interface GalleryResponse {
  items: Card[];
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
}
