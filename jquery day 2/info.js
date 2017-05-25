 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    //var myFacebookToken = 'EAACEdEose0cBAHzNdA6NpFZClPEiugXZAazWsZBd2cABOAM892sEhFR5COJZBAJVab4NnF6i8R39tp8YjgGwCCdWy3kqMU87VZBlx9TO1UbU6ocgW94bsfXMZAITujrfBxcsZCyEDjwRiX4r1f9M1jCFDwNvOCfmJ8vaOtUXDZCGgQZDZD';

    var myFacebookToken='EAACEdEose0cBADUZCuXcj5Ga1ilc8JCYqjnit6jjxvWmQracPvfYYzlY1tPJ0Jq0dHP7Qn7M4LJytU5GGo7ZAZCNAEAN9qdkH6UfNsj5lq7ZB8ZC5Ns59t0G5oGZA1M2eHRwM9SaVwEb08C60kb014LCtGtyzHUStfdYXt0GEEkC1oXMerWorgOBZCi5aseJGwnfA9k3wXZAm7fYf7WlaZBVYil9o1Evcgv8ZD'

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    //$("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                   // $("#myHomeTown").text(response.hometown.name);

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });