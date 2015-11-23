
function init() {

	starts();

}


function starts(){



	

	console.log("init");

	$('#form_login').css("display","none");
	$('#login_box').removeClass('hide');
	$('#form_close_login').removeClass('hide');


	$('#login_register').addClass('hide');
	$('.form_triangle').removeClass('hide');
	$('#header_logout').addClass('hide');



	$('#login').click(function(){


		$('#login_box').animate({"margin-top" : "10px", opacity : 0},1000,function(){

			$('#login_box').css("display","none");

			$('#form_login').css("display","block");
			$('#form_login').css("opacity","0");
			$('#form_login').css("margin-top","-25px");
			$('#form_close_login').css("display","block");



			$('#form_login').animate({"margin-top" : "20px", opacity : 1},1000,function(){

								
			});
		});
	});

	$('#form_close_login').click(function(){

		$('#form_login').animate({"margin-top" : "-10px", opacity : 0},1000,function(){

			$('#form_login').css("display","none");

			$('#login_box').css("display","block");
			$('#login_box').css("opacity","0");
			$('#login_box').css("margin-top","-25px");

			$('#login_box').animate({"margin-top" : "0px", opacity : 1},1000,function(){
				
			});
		});
	});

	$('#register').click(function(){
		console.log('registerennnn');

		$('#logo').animate({"margin-top" : "87px"},1000);

		$('#login_box').animate({"margin-top" : "10px", opacity : 0},1000,function(){
console.log('registern boooxxx');
			$('#login_box').css("display","none");

			$('#form_register').css("display","block");
			$('#form_close_register').css("display","block");
			$('#form_register').css("opacity","0");
			$('#form_register').css("margin-top","-25px");


			$('#form_register').animate({opacity : 1},1000,function(){

								
			});
		});
	});

	$('#form_close_register').click(function(){

				$('#logo').animate({"margin-top" : "200px"},1000);


		$('#form_register').animate({"margin-top" : "-10px", opacity : 0},1000,function(){

			$('#form_register').css("display","none");

			$('#login_box').css("display","block");
			$('#login_box').css("opacity","0");
			$('#login_box').css("margin-top","-25px");

			$('#login_box').animate({"margin-top" : "0px", opacity : 1},1000,function(){

								
			});

		});
	});

	$('#profile_pic').click(function(e){


		if($('#header_logout').is(':visible')){

					console.log('close');
					$('#header_logout').animate({opacity : 0},1000,function(){

						$('#header_logout').addClass('hide')

					});

		} else {

		console.log('open');

			$('#header_logout').removeClass('hide');
			$('#header_logout').css("opacity","0");

				$('#header_logout').animate({opacity : 1},1000);

		}

			

	});




	/*$('#btnSubmitRegister').click(function(){


		$('#logo').animate({"margin-top" : "87px"},1000);

		$('#login_box').animate({"margin-top" : "10px", opacity : 0},1000,function(){

			$('#login_box').css("display","none");

			$('#form_register').css("display","block");
			$('#form_close_register').css("display","block");
			$('#form_register').css("opacity","0");
			$('#form_register').css("margin-top","-25px");


			$('#form_register').animate({"margin-top" : "20px", opacity : 1},1000,function(){

								
			});
		});

	});*/

$('#add_insp').click(function(e){


		$('#uploaden').removeClass('hide');
			$('#uploaden').css("opacity","0");

				$('#uploaden').animate({opacity : 1},1000);

				
	});

$('#form_close_uploaden').click(function(e){

	$('#uploaden').animate({opacity : 0},1000, function(){

		$('#uploaden').addClass('hide');
		$('#uploaden').css("opacity","0");

	});

					
});

$('#filter_webdesign').click(function(e){
	$('#filter_webdesign').animate({opacity : 1},1000);
	
	$('#filter_app').animate({opacity : 0.2},1000);
	$('#filter_3D').animate({opacity : 0.2},1000);
	$('#filter_illustratie').animate({opacity : 0.2},1000);

					
});

$('#filter_app').click(function(e){

	$('#filter_app').animate({opacity : 1},1000);
	

	$('#filter_webdesign').animate({opacity : 0.2},1000);
	$('#filter_3D').animate({opacity : 0.2},1000);
	$('#filter_illustratie').animate({opacity : 0.2},1000);

					
});

$('#filter_3D').click(function(e){

	$('#filter_3D').animate({opacity : 1},1000);

	$('#filter_webdesign').animate({opacity : 0.2},1000);
	$('#filter_app').animate({opacity : 0.2},1000);
	$('#filter_illustratie').animate({opacity : 0.2},1000);

					
});

$('#filter_illustratie').click(function(e){

	$('#filter_illustratie').animate({opacity : 1},1000);

	$('#filter_webdesign').animate({opacity : 0.2},1000);
	$('#filter_3D').animate({opacity : 0.2},1000);
	$('#filter_app').animate({opacity : 0.2},1000);

					
});

/*$('#form_upload').removeClass('hide');
					$('#form_upload').css("opacity","0");*/

$("#form_register").submit(function(e) {
    
    if($('#txtFirstname').val() == ""){

    	$('#txtFirstname').addClass('error_form');

    }else{

    	$('#txtFirstname').removeClass('error_form');

    }

    if($('#txtName').val() == ""){

    	$('#txtName').addClass('error_form');

    }else{

    	$('#txtName').removeClass('error_form');

    }

    if($('#txtUsername').val() == ""){

    	$('#txtUsername').addClass('error_form');

    }else{

    	$('#txtUsername').removeClass('error_form');

    }

    if($('#txtEmails').val() == ""){

    	$('#txtEmails').addClass('error_form');

    }else{

    	$('#txtEmails').removeClass('error_form');

    }

    if($('#txtPassword').val() == ""){

    	$('#txtPassword').addClass('error_form');

    }else{

    	$('#txtPassword').removeClass('error_form');

    }

    if($('#txtRPassword').val() == ""){

    	$('#txtRPassword').addClass('error_form');

    }else{

    	$('#txtRPassword').removeClass('error_form');

    }

    if($('#txtPassword').val() != $('#txtRPassword').val()){

    	$('#txtPassword').addClass('error_form');

    }else{

    	$('#txtPassword').removeClass('error_form');

    }


    if($('#txtFirstname').val() == "" || $('#txtName').val() == "" || $('#txtUsername').val() == "" || $('#txtEmails').val() == "" || $('#txtPassword').val() == "" || $('#txtRPassword').val() == "" || $('#txtPassword').val() != $('#txtRPassword').val()){

    	e.preventDefault();

    }

});


}

init();
