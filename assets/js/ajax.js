$(document).ready(function(){
    //On click function for submit button
    $('#postJson').on('click',function(e){
        e.preventDefault();
        //cache text area data
        var var_data = $('#textarea').val();
        
        //erase anything in text area
        $('#textarea').val("");
        
        //ajax method
        $.ajax({
            //dataType required to return json encoded data from php
            dataType: 'json',
            url: 'domainNameLookup.php',
            type: 'POST',
            //var_PHP_data is variable that is sent to php
            data: {var_PHP_data: var_data},
            //alert user that the process may take time
            beforeSend: function(){
                $('#results').html('<p id = "load">Loading...This might take a second or two.</p>');
            },//remove user message
            complete: function(){
                $('#load').remove();
            },//sort through each link and append to screen in the form of link
            success: function(data){
                //alert(data);
                $.each(data, function(index){
                    $('#results').append('<a href=http://'+data[index]+'>' + data[index] + '</a><br/>');
                });
            },//error messages...not user friendly but logged for testing purposes
            error: function(e){
                $('#results').html(e.message);
            }
        });
        
    });
})