<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Infrastructure\Models\Video;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Video::create([
            'id' => "90562",
            'title' => "Como alavancar vendas indiretas com parcerias, com Guilherme Tsuchida",
            'created_at' => "2024-06-03T19:13:49.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/14e23fcb-aeb4-4e23-bb26-e130752c1b67/playlist.m3u8",
            'description' => "Descubra como empresas de todos os portes estão aproveitando estratégias de canais e vendas indiretas para impulsionar seus negócios e obter resultados excepcionais! Para falar sobre isso, convidamos Guilherme Tsuchida, responsável pelo desenvolvimento de novas parcerias estratégicas na Microsoft Américas, para abrilhantar o episódio #21 do #OverTheCast",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/268999/Over-The-Cast---21.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);


        Video::create([
            'id' => "90561",
            'title' => "Concorrência em Agências: criando projetos de sucesso, com Pedro Biondi",
            'created_at' => "2024-06-03T19:13:17.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/5693c750-04f8-48dd-a1f4-4b606ed062c3/playlist.m3u8",
            'description' => "Na corrida pela inovação em agências, o episódio #20 da série Concorrência em Agências, do Over The Cast, revela os atalhos para o sucesso! Daniel Arcoverde, co-fundador da ⁠Netshow.me⁠, e Victor Novais, especialista em projetos com agências e produtoras, recebem Pedro Biondi, CMO da agência Live Idea, especialista na criação de estratégias e planejamento de eventos. \r\nQuer ficar por dentro de tudo sobre agências? Clique no link e acesse nosso material exclusivo: ⁠https://conteudos.netshow.me/ebook-proposta-comercial-em-agencias-digitais⁠",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/268998/Over-The-Cast---20.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "89112",
            'title' => "Concorrência em Agência: Planejamento, com Amanda Elias",
            'created_at' => "2024-04-02T16:21:17.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/fa4c4764-e7ec-4512-8865-a0df85b9ca55/playlist.m3u8",
            'description' => "Neste episódio especial da série 'Concorrência em Agências' do Over The Cast, Daniel Arcoverde - Co-founder da Netshow.me e Victor Novais - Especialista em Projetos com agências e produtoras, recebem Amanda Elias: Consultora de estratégia para agências e empresas. Aprenda as melhores estratégias para reduzir perdas de deals e como educar o mercado hoje! Não perca!",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/264259/Over-The-Cast---19.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "88338",
            'title' => "Conta Simples: uma das fintechs que mais cresce no Brasil, com Ricardo Gottschalk",
            'created_at' => "2024-03-05T14:49:22.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/a0e29996-fc8d-4c50-8bbe-d0e74033dfe4/playlist.m3u8",
            'description' => "De startups inovadoras a soluções financeiras revolucionárias, as fintechs estão transformando o cenário financeiro nacional.\r\nNo podcast “Conta Simples: uma das fintechs que mais cresce no Brasil” do Over The Cast, Ricardo Gottschalk, VP & Co-founder na Conta Simples e Rafael Belmonte, Co-founder da Netshow.me, batem um papo super interessante sobre o destaque da Conta Simples no mercado. Descubra como a tecnologia impulsiona esse sucesso e como essas inovações estão deixando uma marca positiva no cenário brasileiro. Confira o vídeo!\r\nQuer ficar por dentro desses e de outros insights sobre tecnologia, mercado e inovação? Acesse: ⁠https://netshow.me/blog/⁠",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/261742/Over-The-Cast---17.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "88108",
            'title' => "Metodologia ABM com Felipe Spina",
            'created_at' => "2024-02-20T18:50:51.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/68c222ad-9e22-43d6-b799-c99f85772b4c/playlist.m3u8",
            'description' => "No mais novo episódio do Over The Cast, mergulhamos fundo na metodologia ABM (Account-Based Marketing), explorando o universo do marketing B2B de forma personalizada!  Rafael Belmonte, nosso founder, conduziu o papo com o convidado Felipe Spina, CEO e Cofundador do Maestro ABM. Autor de 4 livros, tem mais de 20 anos de experiência ajudando pessoas e empresas online. Recebeu o prêmio Profissional Digital pela ABRADi-SP em 2017, participou do pioneiro time de Growth Hacking da RD Station, foi Head of Growth e sócio do Distrito, e liderou o primeiro portal de ABM no Brasil. Em 2024, foi eleito LINKEDIN TOP VOICES, um seleto grupo de especialistas convidados de todo o mundo profissional.\r\n\r\nnetshow.me \r\nflow.netshow.me/",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/260805/Over-The-Cast---16.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "87941",
            'title' => "Concorrência em Agências: Produtora de vídeos com Tatiane Farias",
            'created_at' => "2024-02-07T19:17:41.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/189d2705-7658-4095-ac78-c1c18bd3628b/playlist.m3u8",
            'description' => "No novo episódio do OverTheCast, mergulharemos no intrigante universo das agências e produtoras, desvendando estratégias para vencer na concorrência. Rafael Belmonte, nosso founder, conduz o papo com a convidada Tatiani Faria, CEO na GAAU, uma referência no mercado, e Victor Novais, especialista em Streaming e Gestor de parcerias, falam sobre os principais hacks de atendimento para vencer a concorrência.",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/260185/Over-The-Cast---15-%281%29.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "87172",
            'title' => "Inovação em Pauta: explorando as transformações criativas",
            'created_at' => "2024-01-12T19:12:19.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/6baefd9b-de1e-4661-aae8-784eca62b34d/playlist.m3u8",
            'description' => "Como inovar no mercado de trabalho que está sempre se atualizando?\r\n\r\nNesse novo episódio do Over The Cast, Rafael Belmonte, founder da Netshow.me, e Andrei Golfeto, mestre em Empreendedorismo & Inovação, vão abordar cases e trazer insights importante para quem deseja transformar e gerar mais valor para o seu negócio.",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/257917/Over-The-Cast---13.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "97172",
            'title' => "Inovação em Pauta: explorando as transformações criativas",
            'created_at' => "2024-01-12T19:12:19.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/6baefd9b-de1e-4661-aae8-784eca62b34d/playlist.m3u8",
            'description' => "Como inovar no mercado de trabalho que está sempre se atualizando?\r\n\r\nNesse novo episódio do Over The Cast, Rafael Belmonte, founder da Netshow.me, e Andrei Golfeto, mestre em Empreendedorismo & Inovação, vão abordar cases e trazer insights importante para quem deseja transformar e gerar mais valor para o seu negócio.",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/257917/Over-The-Cast---13.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);


        Video::create([
            'id' => "83797",
            'title' => "Live Commerce em foco: explorando o futuro das compras online",
            'created_at' => "2023-10-10T19:47:49.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/829a20ff-b2ea-493a-81b3-df6c5a12c94a/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/247276/Over-The-Cast---12.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "71886",
            'title' => "Como fazer a sua agência faturar mais com tecnologia OTT",
            'created_at' => "2023-03-01T19:37:14.000000Z",
            'category_id' => 1,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/8d0dfce3-b802-4ef8-9447-bafe38b00699/playlist.m3u8",
            'description' => "Por Raissa Queiroz, Vitor Novais e Rafael Belmonte",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237297/Over-The-Cast---10.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "46093",
            'title' => "Jogando com o amanhã: a real dimensão do mercado de Esports",
            'created_at' => "2021-08-09T17:47:54.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/82be00e0-7e6e-4f40-869d-c81e6d424a78/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237360/Flow-Experience---22.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

                Video::create([
            'id' => "46095",
            'title' => "O futuro da verdade: seremos todos algoritmos?",
            'created_at' => "2021-08-09T18:06:39.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/25edcec5-03ad-424e-8760-7fb9ddf9b110/playlist.m3u8",
            'description' => "Um debate sobre a responsabilidade das organizações e da sociedade com o uso de informações, dados e notícias. Como será o futuro? Quais mudanças as empresas precisarão passar a cada novo momento que vivemos? \r\n\r\nSpencer Sydow, Professor Doutor em Direito Penal Informático\r\nTânia Cosentino, Presidente da Microsoft Brasil \r\nThéo Orosco, CEO da Exact Sales",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237359/Flow-Experience---21.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "46097",
            'title' => "NFT e Criptoeconomia: a era dos ativos digitais",
            'created_at' => "2021-08-09T18:23:30.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/0d881e5a-4acc-4807-98b7-6345c2af4368/playlist.m3u8",
            'description' => "Vamos discutir sobre a nova era dos ativos digitais e como ela está revolucionando nossas experiências online. O que é NFT? Quais as consequências da criptoeconomia no digital?\r\n\r\nSupla, Cantor, compositor, ator e apresentador\r\nAnna Flávia Ribeiro, Filósofa e Pesquisadora da Associação Polímata",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237357/Flow-Experience---20.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

                Video::create([
            'id' => "46098",
            'title' => "Avon e o case batom no BBB",
            'created_at' => "2021-08-09T18:28:35.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/31cf0695-83dc-47fb-9f6d-49f84fc0d9ad/playlist.m3u8",
            'description' => "A Diretora Executiva de Marketing da Avon comentará sobre seu último grande projeto: o reposicionamento da marca Avon com o patrocínio do BBB21\r\n\r\nJuliana Barros - Diretora Executiva de Marketing da Avon",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237356/Flow-Experience---19.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "46099",
            'title' => "O bem como modelo de negócio",
            'created_at' => "2021-08-09T18:31:02.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/7dd880a8-2618-4afd-ba69-86c838f0b20f/playlist.m3u8",
            'description' => "Uma conversa sobre empresas e projetos que nascem com o propósito de fazer o bem, e se esse modelo de negócio é realmente lucrativo. Dá pra ganhar dinheiro fazendo o bem? E como fazer isso?\r\n\r\nAmanda Graciano, LinkedIn Top Voice | TEDx Speaker\r\nVicente Carvalho - Fundador e CEO da Razões para Acreditar",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237355/Flow-Experience---18.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

                Video::create([
            'id' => "46100",
            'title' => "Universo da luta: disrupção digital e novos formatos de entretenimento",
            'created_at' => "2021-08-09T18:33:15.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/6f2895f4-3836-4dea-a9e1-c5e8199e933c/playlist.m3u8",
            'description' => "Um bate-papo sobre como o universo da luta vem ganhando espaço no digital e os novos formatos de entretenimento desse nicho. Existe público no Brasil?\r\n\r\nAmilcare Neto, Head de Inovação, Vendas e Marketing na RedeTV!\r\nEduardo Grimaldi, Fundador da Naja Extreme\r\nZeca Carvalho, VP de CyberFit Sports da Acronis e CEO da SW Interactive",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237354/Flow-Experience---17.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "46101",
            'title' => "Hackeando o marketing: novas formas de ganhar performance digital",
            'created_at' => "2021-08-09T18:35:59.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/085ef70d-3f19-4a17-ac96-8c99c9edc2bf/playlist.m3u8",
            'description' => "Uma conversa com grandes nomes do mercado sobre os principais hacks de marketing digital. Quais são as novas ferramentas que estão mudando o jeito de fazer marketing? E as formas mais inovadoras de ganhar performance?\r\n\r\nBruno Moreira, Cofundador e Diretor de Negócios da eKyte\r\nCamila Renaux, Especialista em Marketing Estratégico, Marketing Digital e Inteligência Artificial \r\nMaurici Junior, Gerente de Conteúdo da ComSchool\r\nPedro Vinicius, Cofundador da AdHow",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237353/Flow-Experience---16.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

                Video::create([
            'id' => "46102",
            'title' => "A Entropia do Caos",
            'created_at' => "2021-08-09T18:38:37.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/05496894-d6f0-4c74-97bc-9fab3f72df90/playlist.m3u8",
            'description' => "Um bate-papo com um dos principais futuristas do Brasil sobre como trazer o mindset de inovação e criatividade para dentro das empresas\r\n\r\nLuiz Candreva, Futurista e Head de Inovação da Ayoo",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237352/Flow-Experience---15.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' =>  "37113",
            'title' => "Girls in Tech: Quebrando esteriótipos de gênero",
            'created_at' => "2021-04-05T21:59:36.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/ffa47e40-472f-4ead-894c-6c2f70094368/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237324/Netshow.me-Talks---02.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

                Video::create([
            'id' => "46104",
            'title' => "Desgourmetizando o empreendedorismo",
            'created_at' => "2021-08-09T18:59:50.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/5260644d-ed46-4daa-bcae-4a9d74c49aec/playlist.m3u8",
            'description' => "Uma conversa sobre a quebra de estereótipos no empreendedorismo. Quais são as iniciativas mais fora da caixa? Existe espaço para todo mundo empreender?\r\n\r\nRenato Mendes, CEO da F5 Business Growth\r\nDeh Bastos, Fundadora da iniciativa @CriandoCriançasPretas\r\nBruno Soares, Cofundador e CEO da Feedz\r\nLyne Albuquerque, Fundadora do método Mãe que Empreende",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237351/Flow-Experience---14.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "46106",
            'title' => "Todo mundo é professor?",
            'created_at' => "2021-08-09T19:16:54.000000Z",
            'category_id' => 2,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/14f57cf6-1885-4881-ad36-d4a441698c63/playlist.m3u8",
            'description' => "Uma conversa sobre educação e as novas formas de aprendizagem que surgem com o digital. Todo mundo tem algo a ensinar? Qual a visão dos convidados sobre o crescimento da educação informal e cursos livres no Brasil?\r\n\r\nIvan Moré, Jornalista e Apresentador\r\nGabriela de Paula, Editora-Chefe na Ayoo\r\nCarla Tieppo, Neurocientista e palestrante\r\nLia Jamra, Gerente da área de Educação da Vaga Lume",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237350/Flow-Experience---13.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);
        Video::create([
            'id' => "34499",
            'title' => "Como uma plataforma OTT potencializa a venda de conteúdos?",
            'created_at' => "2021-02-26T18:11:40.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/f9672a0b-1685-44ba-b977-73a88c8d9c93/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237325/Netshow.me-Talks---03.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

                Video::create([
            'id' => "32839",
            'title' => "Estratégias para eventos corporativos em tempos de Home Office",
            'created_at' => "2021-02-01T13:46:56.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/741bd684-48f6-49b3-8422-084e3ed3180a/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237327/Netshow.me-Talks---04.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "30833",
            'title' => "Tendências de vídeos para 2021",
            'created_at' => "2020-12-10T17:09:05.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/63c5d54c-4f2c-4f18-acaa-0ffdda21b10f/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237330/Netshow.me-Talks---05.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "28635",
            'title' => "Black Friday: novas tendências e melhores estratégias para 2020",
            'created_at' => "2020-11-10T12:54:19.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/c0674cc3-0ce7-471d-81db-a1fe85426b8a/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237331/Netshow.me-Talks---06.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

                Video::create([
            'id' => "27420",
            'title' => "SEO Trends: Principais estratégia para o crescimento orgânico",
            'created_at' => "2020-10-26T19:11:59.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/16db6bbc-c8a2-41a9-abc2-f371e940b59a/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237332/Netshow.me-Talks---13.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "24886",
            'title' => "Como construir conteúdos de qualidade e ganhar dinheiro com o Instagram?",
            'created_at' => "2020-09-22T23:18:52.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/c190f8f0-fc5e-4fbb-9189-0107ca655905/playlist.m3u8",
            'description' => null,
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237334/Netshow.me-Talks---14.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "22281",
            'title' => "Tendências para alavancar as vendas no e-commerce",
            'created_at' => "2020-08-19T17:32:13.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/e0622e74-2dcf-4094-83d7-fbe6cc9d67bc/playlist.m3u8",
            'description' => "Rafael Godoy\r\nHead of Marketing na Zenvia\r\n\r\nGabi Gonçalo\r\nHead of Marketing na Netshow.me",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237335/Netshow.me-Talks---12.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

                Video::create([
            'id' => "20331",
            'title' => "Conteúdos estratégicos que geram negócios para empresas tech",
            'created_at' => "2020-07-29T21:29:18.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/d95803ff-67d0-457b-96f2-f12f93ec20c8/playlist.m3u8",
            'description' => "Com Rodrigo Lóssio: Diretor Executivo da Dialetto e Gabi Gonçalo: Head of Marketing da Netshow.me",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237336/Netshow.me-Talks---11.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

        Video::create([
            'id' => "14320",
            'title' => "O que priorizar no Marketing Digital para otimizar os resultados?",
            'created_at' => "2020-05-13T15:25:03.000000Z",
            'category_id' => 3,
            'hls_path' => "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/f2c5d703-b392-4f0e-a472-0162c9c05a33/playlist.m3u8",
            'description' => "O que priorizar no Marketing Digital para otimizar os resultados?",
            'thumbnail' => "https://static-ott.netshow.me/sites/70/media/237337/Netshow.me-Talks---01.png",
            'site_id' => 70,
            'views' => 0,
            'likes' => 0,
        ]);

    }
}
