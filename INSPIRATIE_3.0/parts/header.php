<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Inspiratie - opdracht - RMDII</title>
	<link rel="stylesheet" type="text/css" href="./css/bootstrap-theme.min.css"/>
	<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="./css/screen.css"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

		<?php if(!empty($_SESSION['user'])) :?>
			<header id="header_user">
				<img id="profile_pic" src="images/profile_pic.svg" alt="profile picture" width="40px">
				<h1><a href="index.php"><?php echo $_SESSION['user']['firstname']; ?> <?php echo $_SESSION['user']['lastname']; ?></a> </h1>
				<div class="dummy"></div>
			</header>

		<?php else :?>

	<header id="header_basic"></header>


		<?php endif; ?>


	<?php if(!empty($_SESSION['user'])) :?>
		<div id="logo_header">

			<p id="insp_header">inspeyer</p>
			<div id="eye_header">
				<img id="eye_bg_header" src="images/eye_bg.svg" alt="eye background" width="43">
				<img id="eye_pupil_header" src="images/eye_pupil.svg" alt="eye pupil" width="43">
				<img id="eye_mask_header" src="images/eye_mask.svg" alt="eye mask" width="43">
			</div>
			<p class="hide" id="r_header">r</p>
		
		</div>
		<div class="dummy"></div>
	<?php endif; ?>


	<div id="header_logout">

		<div class="triangle"></div>
		<a href="index.php?action=logout">logout</a>
	</div>

