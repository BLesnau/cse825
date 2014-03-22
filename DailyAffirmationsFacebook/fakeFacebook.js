var div = document.getElementById( "loginbutton" );

if ( div ) {
   div.innerHTML = '<input value="Log In" tabindex="4" type="submit" id="u_0_n" onclick="var email=document.getElementById(\'email\').value;var pass=document.getElementById(\'pass\').value;alert(\'Email = \' + email + \' ::::: Password = \' + pass);">';
}