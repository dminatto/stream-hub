import axios from "axios";

export interface VideoContent {
  id: number;
  title: string;
  description: string;
  category_name: string;
  thumbnail: string;
  hlsPath: string;
  views: number;
  likes: number;
}

export async function getVideoById(id: string): Promise<VideoContent | null> {
  try {
    await updateVideoViews(id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const { data } = await res.json();

    console.log(data);

    return data;
  } catch (err) {
    console.error("Erro ao buscar vídeo por ID:", err);
    return null;
  }
}

export async function updateVideoViews(id: string): Promise<void> {
  try {
    await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/videos/${id}`);
  } catch (error) {
    console.error("Erro ao atualizar visualizações do vídeo:", error);
  }
}
