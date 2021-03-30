$(document).ready(function() {
  $('div.dataTables_filter input').addClass('form-control');
  jQuery('#tbl_report').DataTable( {
    "paging": true,
    "processing": true,
    'serverMethod': 'post', 
    "ajax": "controller/tabledata.php",
    dom: 'lBfrtip',
    buttons: [
         'excel',  'csv', 'pdf',
    ],
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
    
  });
  $('#tbl_reg').DataTable();
});
