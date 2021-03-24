<?php include("controller/controller.php"); ?>
<!DOCTYPE html>
<html>
<?php include("layout/head.php");?>
<body>
 <?php include("layout/sidebar.php");?>
 <header>
    <h1>Sales Report</h1>
  </header>
 <div class="main">
     <div class="container">
    <div class="card-deck mb-3 text-center">
<?php 
$plano = new Report();
$plano->getPlans($con);
?>
    </div>
</div>
</div>
</body>
</html>