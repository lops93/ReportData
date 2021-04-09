$(document).ready(function() {
  /********************Grafico 1 ********************/
    $.ajax({
        url: "http://localhost/projetos/ReportData/controller/graphics.php?grafico1=1",
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
        /********************Grafico 2 ********************/
        $.ajax({
        url: "http://localhost/projetos/ReportData/controller/graphics.php?grafico2=1",
        method: "GET",
        success: function(data) {
          //console.log(data);
          var setor_empresa = [];
          var valor = [];
    
          for(var i in data) {
            setor_empresa.push("Setor " + data[i].setor_empresa);
            valor.push(data[i].valor);
          }
    
          var chartdata = {
            labels: setor_empresa,
            datasets : [
              {
                label: 'Valor total por setor',
                backgroundColor: 'rgb(30,144,255)',
                borderColor: 'rgb(255, 99, 132)',
                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                data: valor
              }
            ],
          };
    
          var ctx2 = document.getElementById('myChart2').getContext('2d');
    
          var myChart2 = new Chart(ctx2, {
            type: 'horizontalBar',
            data: chartdata,
            options: {
              scales: {
                x: {
                  beginAtZero: true
                }
              }
            },
          });
        },
        error: function(data) {
          console.log(data);
        }
      });  
});
