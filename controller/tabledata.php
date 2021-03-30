<?php
include_once("controller.php");

$report = new Report();
$tblData = $report->getData($con);
$count = count($tblData);

$data = array(
  'draw'=>1, 
  'recordsTotal'=>intval($count), 
  'recordsFiltered'=>intval($count), 
  'data'=>$tblData,
);
//send data as json format
echo json_encode($data);

?>