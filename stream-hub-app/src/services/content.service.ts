import axios from "axios";

export interface ContentItemData {
  id: number;
  title: string;
  category?: string;
  thumbnail: string;
  category_id: string;
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
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/videos`
    );

    const videos = response.data as any[];

    const grouped: Record<number, ContentItemData[]> = {};

    for (const video of videos) {
      const item: ContentItemData = {
        id: video.id,
        title: video.title,
        thumbnail: video.thumbnail,
        category_id: video.category_id,
        type: "video",
        category: video.category_name,
      };

      if (!grouped[video.category_id]) {
        grouped[video.category_id] = [];
      }

      grouped[video.category_id].push(item);
    }

    const contentRows: ContentRowData[] = Object.entries(grouped).map(
      ([categoryId, items]) => ({
        id: `category-${categoryId}`,
        title: items[0]?.category ?? "Sem título",
        items,
      })
    );

    return { data: contentRows };
  } catch (error) {
    console.error("Erro ao buscar vídeos da API:", error);
    return { data: [] };
  }
};
