<?php

$bot_token = "396549472:AAE-v8cclZ_N6Eezj8fyaXbUWefkQsTXI0g";
$admin_id  = 111999636;

if (isset($_POST['action'])) {

    if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['title']) && isset($_POST['text'])) {

        $text = "⭕️ سفارش جدیدی از وبسایت دریافت شد ⭕️\n\nعنوان : " . $_POST['title'] . "\nسفارش‌دهنده : " . $_POST['name'] . "\nشماره تماس : " . $_POST['phone']. "\n\nتوضیحات : \n" . $_POST['text'];
    
        $url = "https://api.telegram.org/bot" . $bot_token . "/sendMessage";
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        curl_setopt($ch,CURLOPT_POSTFIELDS,(['chat_id'=>$admin_id,'text'=>$text,'parse_mode'=>'HTML','disable_web_page_preview'=>true]));
        $res = curl_exec($ch);

        if(curl_error($ch)){
            var_dump(curl_error($ch));
        }else{
            echo "success";
        }

    }

}