// src/services/mockCarouselService.ts

// Define the structure of a single carousel item based on your example
export interface CarouselItemData {
  id: number;
  title: string;
  description: string;
  hlsPath?: string; // Optional if not always present/used in carousel
  thumbnail: string;
  views?: number; // Optional
  likes?: number; // Optional
}

// Define the expected response structure (assuming it returns an array for a carousel)
export interface CarouselServiceResponse {
  data: CarouselItemData[]; // Expecting an array of items for the carousel
}

// Mock data - Create a few items for the carousel
const mockData: CarouselItemData[] = [
  {
    id: 89088,
    title: "TikTok como inovação na era digital, com Rafael Kiso",
    description:
      "Os principais desafios na priorização no desenvolvimento de novos produtos.",
    thumbnail: `https://picsum.photos/1200/500?random=${Math.random()}`, // Replace with actual or better placeholders
    hlsPath: "...",
    views: 105,
    likes: 12,
  },
  {
    id: 89089,
    title: "Concorrência em Agências: Inovação a seu favor, com Mariana Silva",
    description:
      "Saiba como a inovação pode ser uma grande aliada para o crescimento de sua agência...",
    thumbnail: `https://picsum.photos/1200/500?random=${Math.random()}`, // Replace with actual or better placeholders
    hlsPath: "...",
    views: 22,
    likes: 0,
  },
  {
    id: 89090,
    title: "Planejamento de Conteúdo Matador para Vídeos",
    description:
      "Descubra as estratégias essenciais para criar vídeos que engajam e convertem.",
    thumbnail: `https://picsum.photos/1200/500?random=${Math.random()}`, // Replace with actual or better placeholders
    hlsPath: "...",
    views: 350,
    likes: 45,
  },
];

// Simulate an API call
export const fetchFeaturedContent = (): Promise<CarouselServiceResponse> => {
  console.log("Mock Service: Fetching featured content...");
  return new Promise((resolve) => {
    // Simulate network delay (e.g., 1.5 seconds)
    setTimeout(() => {
      console.log("Mock Service: Responding with data.");
      resolve({ data: mockData });
    }, 1500);
  });
};
