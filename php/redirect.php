<?php
    echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>';
     echo "<script> 
          if( JSON.parse(localStorage.getItem('userKey')) >= 100)
          {
               window.location.href = '../accountHTMLFiles/account-info.html';
          } else {
               window.location.href = '../accountHTMLFiles/account.html';
          }</script>";
?>
