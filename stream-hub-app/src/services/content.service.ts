import axios from "axios";

export interface ContentItemData {
  id: number;
  title: string;
  category?: string;
  thumbnail: string;
  type?: "video" | "audio" | "playlist";
}

export interface ContentRowData {
  id: string;
  title: string;
  items: ContentItemData[];
}

export interface ContentRowsResponse {
  data: ContentRowData[];
}

export const fetchContentRows = async (): Promise<ContentRowsResponse> => {
  try {
    const response = await axios.get("http://localhost/api/videos");

    const videos = response.data as any[];

    const grouped: Record<number, ContentItemData[]> = {};

    for (const video of videos) {
      const item: ContentItemData = {
        id: video.id,
        title: video.title,
        thumbnail: video.thumbnail,
        type: "video",
        category: `Categoria ${video.category_id}`, // Pode ser substituído por nome real da categoria se tiver
      };

      if (!grouped[video.category_id]) {
        grouped[video.category_id] = [];
      }

      grouped[video.category_id].push(item);
    }

    const contentRows: ContentRowData[] = Object.entries(grouped).map(
      ([categoryId, items]) => ({
        id: `category-${categoryId}`,
        title: `Categoria ${categoryId}`, // Pode ser substituído por nome real se disponível
        items,
      })
    );

    return { data: contentRows };
  } catch (error) {
    console.error("Erro ao buscar vídeos da API:", error);
    return { data: [] };
  }
};
