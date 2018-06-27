function checkMsg(){
	
	if ( !$( '#name' ).val() )
	{
		alert( '이름을 입력해주세요.' );
		$( '#name' ).focus();
		return false;
	}
	
	if ( !$( '#email' ).val() )
	{
		alert('메일주소를 입력해주세요.');
		$( '#email' ).focus();
		return false;
	}

	if ( !$( '#content' ).val() )
	{
		alert( '내용을 입력해주세요.' );
		$( '#content' ).focus();
		return false;
	}

	$( '#message' ).submit();
}
