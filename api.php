<?php
// Telegram Bot Token
$bot_token = "BOT:Token";
// Admin Chat ID
$admin_id  = 111999636;

if (isset($_POST['action'])) {

    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['text'])) {

        $sender   = $_POST['name'];
        $email    = $_POST['email'];
        $message  = $_POST['text'];

        $text  = "💌 New Message 💌";
        $text .= "\n\n";
        $text .= "👤 Sender : $sender";
        $text .= "\n";
        $text .= "✉️ Email : $email";
        $text .= "\n";
        $text .= "📌 Message :";
        $text .= "\n";
        $text .= "$message";


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
