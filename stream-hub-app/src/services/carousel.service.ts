import axios from "axios";

export interface CarouselItemData {
  id: number;
  title: string;
  description: string;
  hlsPath?: string;
  thumbnail: string;
  category: string;
  views?: number;
  likes?: number;
}

export interface CarouselServiceResponse {
  data: CarouselItemData[];
}

export const fetchFeaturedContent = async (
  page: number = 1,
  perPage: number = 3
): Promise<CarouselServiceResponse> => {
  try {
    const response = await axios.get<CarouselServiceResponse>(
      "http://localhost/api/videos",
      {
        params: {
          category_id: 1,
          _page: page,
          _per_page: perPage,
        },
      }
    );

    const data = response.data?.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      thumbnail: item.thumbnail,
      category: item.category_name,
      hlsPath: item.hlsPath,
      views: item.views,
      likes: item.likes,
    }));

    return { data };
  } catch (error) {
    console.error("Erro ao buscar conteúdo em destaque:", error);
    return { data: [] };
  }
};
