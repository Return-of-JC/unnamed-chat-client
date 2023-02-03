<?php
function adminer_object() {
  
  class AdminerSoftware extends Adminer {
    function login($login, $password) {
      // validate user submitted credentials
      return ($login == 'admin' && $password == 'AuJELcld');
    }
  }
  
  return new AdminerSoftware;
}

include './editor.php';
