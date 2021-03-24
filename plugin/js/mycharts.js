$(document).ready(function() {
    $.ajax({
        url: "http://localhost/projetos/geracao_de_relatorio/graphics.php",
        method: "GET",
        success: function(data) {
          //console.log(data);
          var nome_plano = [];
          var valor = [];
    
          for(var i in data) {
            nome_plano.push("Plano " + data[i].nome_plano);
            valor.push(data[i].valor);
          }
    
          var chartdata = {
            labels: nome_plano,
            datasets : [
              {
                label: 'Valor total por plano',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                data: valor
              }
            ]
          };
    
          var ctx = document.getElementById('myChart').getContext('2d');
    
          var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: chartdata
          });
        },
        error: function(data) {
          console.log(data);
        }
      });
});
