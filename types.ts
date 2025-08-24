
export type Category = 
  'Short-Form' | 
  'Long-Form' | 
  'Gaming' | 
  'Football Edits' | 
  'eCommerce' | 
  'Documentary' | 
  'Color Grading' | 
  'Anime' | 
  'Ads';

export interface Video {
  id: number;
  title: string;
  client: string;
  category: Category;
  thumbnailUrl: string;
  videoUrl: string; // YouTube embed URL
}
