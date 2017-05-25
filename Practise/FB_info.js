 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    //var myFacebookToken = 'EAACEdEose0cBAHzNdA6NpFZClPEiugXZAazWsZBd2cABOAM892sEhFR5COJZBAJVab4NnF6i8R39tp8YjgGwCCdWy3kqMU87VZBlx9TO1UbU6ocgW94bsfXMZAITujrfBxcsZCyEDjwRiX4r1f9M1jCFDwNvOCfmJ8vaOtUXDZCGgQZDZD';
  $(".loader").hide();
    var myFacebookToken='EAACEdEose0cBAA6citLwpr4ZAfWFNzOGcGYaDg7Q2pYqPg4DgMs49BDafhkussQlmh5SQOCxcODZA6qyIKCWAdoTT8fhdZB2UQVZB2pjeeWqCNcDmuPinagusrzLHrL84I2LKknrLUnMzcJW8wv301Cg8ZBEZC9jwt0lH3NtVSh4ezLhuDD73SInfc3YYDDOsZD' 
     //var myFacebookToken='EAACEdEose0cBADa9o4GrwCFRn26Nf45clBMfgUNMOBgENc5QEkU4rEjnZCbRBE9H88hoyVAIrlhkMviEe85aHA1A6eZCYQjJ9nH4VRqS5jn8yaqn13qeI6qAiA4CRKIsDALymZBPFzY5rnSuVFH5ZCkZAylquC4QgasMAjsiJA8v6HsXzV1wI5sxfejA7xx4ZD'
    function getFacebookInfo(){
   
        $.ajax('https://graph.facebook.com/me?fields=posts&access_token='+myFacebookToken,{
           
                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    var i;
                    alert("bijay");
                    //console.log($("lastPost").text(response.id.posts));
                    //$("#lastPost").text(response.posts.id.story);
                        //for(i=0;i<3;i++)
                    

                        for(i in response.education)
                    {
                          //alert(response.languages[i].name);
                       alert(response.education[i].school.name);

                         // $("#myEmail").append(response.education[i].school.name);
                     }
                  //  for (j in response.posts)
                  //  {  alert(j);
                      $("#lastPost").append('<h2>'+response.posts.data[2].story+'</h2>');
                      //$("#lastPost").append(response.posts.data[2].link);
                      $("#lastPost").append('<img src='+response.posts.data[2].picture+'>');
                  
                //  $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                  // $("#myEmail").text(response.bio);

                },
                 error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                },
                timeout :3000,
                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });