<?php
$url = "http://www.tinypesa.com/api/v1/express/initialize";
$data = array(
    'amount' => 50,
    'msisdn' => '0712345678',
    'account_no' => '200'
);
$headers = array(
    "Content-Type: application/x-www-form-urlencoded",
    "ApiKey: Ke9T5NVYlJU"
);
$options = array(
    'http' => array(
        'header'  => $headers,
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);

$context  = stream_context_create($options);
$resp = file_get_contents($url, false, $context);
echo json_encode($resp); // Echo the response as JSON
?>
