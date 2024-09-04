/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBike {
  date_stolen: number;
  description: any;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: any;
  location_found: any;
  manufacturer_name: string;
  external_id: any;
  registry_name: any;
  registry_url: any;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: number[];
  stolen_location: string;
  thumb: any;
  title: string;
  url: string;
  year: number;
  propulsion_type_slug: string;
  cycle_type_slug: string;
}
export interface IFilter {
  page: number;
  per_page: number;
  title:string
}
export interface ICount {
  proximity: number;
  stolen: number;
  non: number;
}
