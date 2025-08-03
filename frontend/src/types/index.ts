export interface MediaEntry {
    id: number;
    title: string;
    type: 'movie' | 'tv show';
    director: string;
    budget: number;
    location: string;
    duration: number; // in minutes
    year: number;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

export interface CreateMediaRequest {
    title: string;
    type: 'movie' | 'tv show';
    director: string;
    budget: number;
    location: string;
    duration: number; // in minutes
    year: number;
}

export interface UpdateMediaRequest extends CreateMediaRequest {
    id: number;
}
export interface Media {
  id: number;
  title: string;
  type: string;
  director: string;
  budget: number;
  location: string;
  duration: number;
  year: number;
}
