<!DOCTYPE html>
<html lang="pl" prefix="og: http://ogp.me/ns#" />
<?php
    $name = $_GET['name'];
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kiwi sprzątająca</title>
    <link rel="shortcut icon" type="image/x-icon" href="img/kiwiTitle.png">
    <meta name="discription" content="Jesteśmy firmą v Kołobrzeg sprzątającą, która sprawia, że Twój dom jest czysty i wygodny.">
    <meta name="kaywords" content="Firma sprzątająca KIWI v Kołobrzeg, która sprawia, że Twój dom">
    <!-- Main CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
</head>

<body>
    <!-- Back-->
    <section id="back" class="back back-after">
        <div class="container-block">
            <div class="offer offer-after lighting">
                <p class="main_back_title">Wiadomość wysłana. Dzięki Ci <span class="user_name"> <?= $name ?> </span>, wkrótce się z Tobą skontaktujemy.</p>
                <a href="index.php" id="comeback" class="comeback">Powrót do serwisu</a>
            </div>
            <ul class="footer-wrap__soc">
                <li class="footer-wrap__item">
                    <!--noindex-->
                    <a href="https://www.facebook.com/12343" class="footer-wrap__link link" rel="nofollow" target="_blank">
                        <img src="img/facebook.png" alt="Facebook">
                    </a>
                    <!--/noindex-->
                </li>
                <li class="footer-wrap__item">
                    <!--noindex-->
                    <a href="https://wa.me/48880922498?text=Chcę%20zostawić%20prośbę%20" class="footer-wrap__link link" rel="nofollow" target="_blank">
                        <img src="img/whatsapp.png" alt="Whatsapp">
                    </a>
                    <!--/noindex-->
                </li>
                <li class="footer-wrap__item">
                    <!--noindex-->
                    <a href="https://www.instagram.com/zadorozhniuk.t" class="footer-wrap__link link" rel="nofollow" target="_blank">
                        <img src="img/instagram.png" alt="Instagram">
                    </a>
                    <!--/noindex-->
                </li>
            </ul>
        </div>
    </section>

    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/main.js"></script>

</body>

</html>