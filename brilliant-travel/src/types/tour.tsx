interface Stop {
  name: string;
  number: number;
  time: string;
}

interface Included {
  title: string;
  description: string;
}

export interface Tour {
  id: string;
  title: string;
  header_images: string[];
  images: string[];
  tour_program: Stop[];
  tour_program_photo: string;
  overview: string;
  included: Included[];
  price: number;
  time: string;
  stops: number;
  cover_image: string;
}
