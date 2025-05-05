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
    const res = await fetch(`http://localhost/api/videos/${id}`, {
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
