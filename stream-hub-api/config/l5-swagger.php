<?php

return [

    'default' => 'default',

    'documentations' => [

        'default' => [
            'api' => [
                'title' => 'Video API',
            ],

            'routes' => [
                'api' => 'docs/api-docs.json',
                'docs' => 'docs',
            ],
            'paths' => [
                /*
                 * Absolute path to location where parsed swagger annotations will be stored
                 */
                'docs' => public_path('docs'),

                /*
                 * File name for the generated json documentation file
                 */
                'docs_json' => 'api-docs.json',

                /*
                 * Absolute path to directory containing the swagger annotations are stored.
                 */
                'annotations' => base_path('app'),

                'views' => base_path('resources/views/vendor/l5-swagger'),
            ],
        ],
    ],

    'generate_always' => env('L5_SWAGGER_GENERATE_ALWAYS', true),

    'swagger_version' => '3.0',

    'proxy' => false,

];
