$('#foldMenu').hide();
    $('.blackbox').hide();
    $('.whitebox').hide();

    $(document).ready(function(){
      
      $('.blackbox').each(function(index){ 
        $(this).attr('idx',index)
      })

      
      $('.whitebox').each(function(index){
        $(this).attr('idx',index)
      })


      $('.rightBtn').click(function(){
        $('#best_panel').animate({
          left:-1200
        },'slow')
      })
      $('.leftBtn').click(function(){
        $('#best_panel').animate({
          left: 0
        },'slow')
      })
      

      
      $('#headMenu').hover(function(){
        $('#foldMenu').slideToggle(50)
        
      })
     
      $('.newProductDiv').each(function(index){
        $(this).attr('idx',index) 
      }).hover(function(){ 
        let i = $(this).attr('idx'); 
        whitebox(i);
      });

      

      $('.brandImageDiv').each(function(index){
        $(this).attr('idx',index) 
      }).hover(function(){
        let i = $(this).attr('idx'); 
        blackbox(i);
      });


      function blackbox(i){
        $('.blackbox[idx='+i+']').fadeToggle(10)
      }
      function whitebox(i){
        $('.whitebox[idx='+i+']').fadeToggle(10)
      }



      $('.mainControlBtn').each(function(index){
        $(this).attr('idx',index) 
      }).click(function(){ 
        let i = $(this).attr('idx'); 
        moveSlider(i);
      });

      function moveSlider(i){ 

        
        let moveLeft = -(i*1900); 
        $('.mainImagePanel').animate({
          left:moveLeft
        },'slow')
        
        $('.mainControlBtn[idx='+i+']').addClass('active');

        
        $('.mainControlBtn[idx!='+i+']').removeClass('active');


      }


      
      moveSlider(0);
      let aa=1;
      setInterval(function(){
        if(aa>8){
          aa=0;
        }
        moveSlider(aa);
        aa++;
      },5000);


      $('.instaImage').attr({
      src : function(index){return 'http://placeimg.com/200/200/any'},
      alt : function(index){return '인스타이미지'}
      })

    // #instagram{#instaBtn{
      let ins = 2;
      $('#instaBtn').click(function(){
        
        // $('#instagram').css('height',210*ins);
        $('<img></img>').attr('class','newInstaImage').appendTo('#instagram');
        $('<img></img>').attr('class','newInstaImage').appendTo('#instagram');
        $('<img></img>').attr('class','newInstaImage').appendTo('#instagram');
        $('<img></img>').attr('class','newInstaImage').appendTo('#instagram');
        $('<img></img>').attr('class','newInstaImage').appendTo('#instagram');
        $('.newInstaImage').attr({
          src : function(index){return 'http://placeimg.com/200/200/any'},
          alt : function(index){return '인스타이미지'}
        })
        $('.newInstaImage').css({
          margin : function(index){return '3px'},
          // display: function(index) {return 'block'}
        })
        ins++;
      })





    })

    
    