export type Category =
  | "icons"
  | "css_generators"
  | "illustrations"
  | "fonts"
  | "color_gradients"
  | "color_palettes"
  | "sections"
  | "js_libraries"
  | "react_tools"
  | "react_libraries"
  | "other_tools";

export default interface Link {
  id: string;
  page_name: string;
  url: string;
  // category: Category;
  image_url?: string;
}
