<div id="container_insp">


	<section id="content">
		 <?php if(empty($_SESSION['user'])) :?>

		<div id="logo">

			<p id="insp">inspeyer</p>
			<div id="eye">
				<img id="eye_bg" src="images/eye_bg.svg" alt="eye background" width="73">
				<img id="eye_pupil" src="images/eye_pupil.svg" alt="eye pupil" width="73">
				<img id="eye_mask" src="images/eye_mask.svg" alt="eye mask" width="73">
			</div>
			<p class="hide" id="r">r</p>
		
		</div>
		<div class="dummy"></div>

		<h2>" create your own space of inspiration "</h2>
		 
		

		<div class="hide" id="login_box">
			<p id="login">login</p>
			<p id="register">or <span>Register</span></p>
		</div>


		<form id="form_login" class="" action="" method="post">

			<div class="form_triangle hide"></div>

			<fieldset>
				<legend class="hide">title or explanatory caption</legend>
				 <div class="hide" id="form_close_login"><img class="form_close_cross" src="images/form_close.svg" alt="cross" width="10"></div>


	                      <input type="text" name="txtUsername_login" id="txtUsername_login" placeholder="username">



	                      <input type="password" name="txtPassword_login" id="txtPassword_login" placeholder="password">


	                  	<input type="submit" name="btnSubmitLogin" value="login" id="btnSubmitLogin" />

	                  	<p id="login_register">or <a href="index.php?page=register">Register</a></p>

			</fieldset>


		</form>

		<form id="form_register" action="?" method="post">

			<div class="form_triangle hide"></div>

			<fieldset>
				<legend class="hide">title or explanatory caption</legend>
				 <div id="form_close_register"><img class="form_close_cross" src="images/form_close.svg" alt="cross" width="10"></div>

				 		<input type="text" name="txtFirstname" id="txtFirstname" placeholder="firstname">
				 		<input type="text" name="txtName" id="txtName" placeholder="name">
	                      <input type="text" name="txtUsername" id="txtUsername" placeholder="username">
	                      <input type="text" name="txtEmails" id="txtEmails" placeholder="email">



	                      <input type="password" name="txtPassword" id="txtPassword" placeholder="password">
	                      <input type="password" name="txtRPassword" id="txtRPassword" placeholder="repeat password">



	                  	<input type="submit" name="btnSubmitRegister" value="register" id="btnSubmitRegister" />

			</fieldset>

		</form>

	<?php else :?>

	  <!--<section id="welcome">
		<p>Welcome,</p> 
		<h1>"<?php echo $_SESSION['user']['firstname']; ?>"</h1> 

		<div  id="go_to_app">go to app</div>
	  </section>-->

	  <section id="container">

		    

		    <ul id="object_pics" class="row">
		       

		                
		  	</ul>

	  		<div class="clear"></div>


	  	</section>

	<?php endif; ?>
	</section>

</div>

<footer></footer>

	<script type="text/javascript" src="js/vendor/fallback/fallback.min.js"></script>
	<script type="text/javascript" src="js/vendor/jquery/dist/jquery.min.js"></script>
	<script src="js/vendor/underscore.min.js"></script>
    <script src="js/vendor/backbone.min.js"></script>
	<script type="text/javascript" src="js/addLoginJs.js"></script>
