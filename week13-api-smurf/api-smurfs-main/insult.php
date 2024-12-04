<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

$length = rand(5, 16);
$level = rand(1, 10);

$prompt = 'Can you give me a smurf insult? 

Can you make it '.$length.' words long.

On a scale of one to ten, one being kind and ten being mean, 
can you make the insult a level '.$level.'.

Your response should only be the insult.';

$apiKey = OPENAI_SECRET;
$data = [
    'model' => 'gpt-4o-mini',
    'messages' => [
        ['role' => 'system', 'content' => "Write a detailed script"],
        ['role' => 'user', 'content' => $prompt],
    ],
    'max_tokens' => 200,
    'temperature' => 1,
    "frequency_penalty" => 0,
    "presence_penalty" => 0,
];

$ch = curl_init('https://api.openai.com/v1/chat/completions');
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Bearer ' . $apiKey, 'Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
$response = curl_exec($ch);
curl_close($ch);

$result = json_decode($response, true);

$insult = $result['choices'][0]['message']['content'];
$insult = str_replace('"', '', $insult);

$data = [
    'error' => 'false',
    'message' => 'Insult retrieved successfully',
    'insult' => $insult,
];

echo json_encode($data);