<?php

namespace App\Http\Controllers;

use App\Application\Services\VideoService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\VideoResource;
use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     title="Minha API",
 *     version="1.0.0",
 *     description="Descrição da minha API",
 *     @OA\Contact(
 *         email="suporte@exemplo.com"
 *     ),
 *     @OA\License(
 *         name="MIT",
 *         url="https://opensource.org/licenses/MIT"
 *     )
 * )
 */

class VideoController extends Controller
{
    private VideoService $videoService;

    public function __construct(VideoService $videoService)
    {
        $this->videoService = $videoService;
    }

   /**
     * @OA\Get(
     *     path="/api/videos",
     *     summary="Get list of videos",
     *     tags={"Videos"},
     *     @OA\Response(
     *         response=200,
     *         description="A list of videos",
     *         @OA\Schema(type="array", @OA\Items(ref="#/components/schemas/Video"))
     *     )
     * )
     */
    public function index(Request $request)
    {
        $filters = $request->only(['title', 'description', 'category_id', 'site_id']);

        $page = $request->input('_page');
        $perPage = $request->input('_per_page');

        $videos = $this->videoService->getAllVideos($filters, $page, $perPage);
        return response()->json($videos);
    }

     /**
     * @OA\Get(
     *     path="/api/videos/{id}",
     *     summary="Get a single video by ID",
     *     tags={"Videos"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID of the video",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Video details",
     *         @OA\Schema(ref="#/components/schemas/Video")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Video not found"
     *     )
     * )
     */
    public function show($id)
    {
        $video = $this->videoService->getVideoById($id);
        $this->videoService->incrementViews($id);
        return new VideoResource($video);
    }

    /**
 * @OA\Patch(
 *     path="/api/videos/{id}",
 *     summary="Atualiza os dados do vídeo",
 *     tags={"Videos"},
 *     @OA\Parameter(
 *         name="id",
 *         in="path",
 *         required=true,
 *         @OA\Schema(type="integer")
 *     ),
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             type="object",
 *             @OA\Property(property="likes", type="integer", example=1),
 *             @OA\Property(property="title", type="string", example="Novo título")
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Vídeo atualizado com sucesso",
 *         @OA\JsonContent(ref="#/components/schemas/Video")
 *     )
 * )
 */
    public function updateLikes($id)
    {
        $this->videoService->updateLikes($id);

        return response()->json(['message' => 'Likes incremented']);
    }
}
