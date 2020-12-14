<?php
    /*
    Форма обратной связи может получать сообщения с любых почтовых ящиков.
    Исправлена проблема кодировки при получении писем почтовым клиентом Outlook.
    Вы скачали её с сайта Epic Blog https://epicblog.net Заходите на сайт снова!
    ВНИМАНИЕ! Лучше всего в переменную myemail прописать почту домена, который использует сайт. А не mail.ru, gmail и тд.
    */
    if(isset($_POST['submit'])){
    /* Устанавливаем e-mail Кому и от Кого будут приходить письма */
    /*$to = "tannitti@wp.pl"; // Здесь нужно написать e-mail, куда будут приходить письма*/
    $to = "nikolaysebistiyan@gmail.com";
    $from = "sebistian@czystekiwi.com.pl"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)*

    /* Указываем переменные, в которые будет записываться информация с формы */
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = "Форма отправки сообщений с сайта czystekiwi.com.pl";

    /* Проверка правильного написания e-mail адреса */
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
    {
    show_error("<br /> Е-mail adres nie istnieje");
    }

    /* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
    $mail_to_myemail = "Здравствуйте!
    Было отправлено сообщение с сайта!
    Имя отправителя: $name
    E-mail: $email
    Текст сообщения: $message
    Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";

    $headers = "From: $from \r\n";

    /* Отправка сообщения, с помощью функции mail() */

    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
    header('Location: ../after.html');
       /* echo "Wiadomość wysłana. Dzięki Ci " . $name . ", wkrótce się z Tobą skontaktujemy.";
    echo "<br /><br /><a href='http://czystekiwi.com.pl/'>Powrót do serwisu.</a>";*/
    }
 ?>
