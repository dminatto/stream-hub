// src/services/videoService.ts

export interface VideoContent {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  hlsPath: string;
  views: number;
  likes: number;
}

export async function getVideoById(id: string): Promise<VideoContent | null> {
  try {
    const res = await fetch(`http://localhost/api/videos/${id}`, {
      cache: "no-store", // ou: next: { revalidate: 60 }
    });

    if (!res.ok) return null;

    const data = await res.json();

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      thumbnail: data.thumbnail,
      hlsPath: data.hls_path,
      views: data.views,
      likes: data.likes,
    };
  } catch (err) {
    console.error("Erro ao buscar vídeo por ID:", err);
    return null;
  }
}
