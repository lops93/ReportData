$(document).ready(function() {
  /********************Grafico 1 ********************/
    $.ajax({
        url: "http://localhost/projetos/ReportData/controller/graphics.php?grafico1=1",
        method: "GET",
        success: function(data) {
          //console.log(data);
          var mes = [];
          var num = [];
    
          for(var i in data) {
            mes.push("mes " + data[i].mes);
            num.push(data[i].num);
          }
    
          var chartdata = {
            labels: mes,
            datasets : [
              {
                label: 'Numero de adesões por mês',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                data: num
              }
            ]
          };
    
          var ctx = document.getElementById('myChart').getContext('2d');
    
          var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: chartdata,
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                      min: 0,
                      max: 5,
                      stepSize: 1
                  }
              }]
              }
            },
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
        /********************Grafico 3 ********************/
        $.ajax({
          url: "http://localhost/projetos/ReportData/controller/graphics.php?grafico3=1",
          method: "GET",
          success: function(data) {
            //console.log(data);
            var nome_plano = [];
            var valor = [];
      
            for(var i in data) {
              nome_plano.push("Setor " + data[i].nome_plano);
              valor.push(data[i].valor);
            }
      
            var chartdata = {
              labels: nome_plano,
              datasets : [
                {
                  label: 'Valor total por setor',
                  backgroundColor: ["rgb(250,128,114)", "rgb(30,144,255)", "rgb(102,205,170)"],
                  borderColor: 'rgb(255, 99, 132)',
                  hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                  hoverBorderColor: 'rgba(200, 200, 200, 1)',
                  data: valor
                }
              ],
            };
      
            var ctx3 = document.getElementById('myChart3').getContext('2d');
      
            var myChart3 = new Chart(ctx3, {
              type: 'doughnut',
              data: chartdata,
              options: {
                scales: {
                  x: {
                    suggestedMin: 0, 
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
