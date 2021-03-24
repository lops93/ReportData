<?php
require_once(dirname(__FILE__)."/config.php");

class Report {
        private $table = "empresas_cadastradas";
        private $table_plan = "plano";
        public $log = "../log/dados.log";

        function getData($con) {
                $query = "SELECT nome_empresa,setor_empresa FROM empresas_cadastradas";
                $result = $con -> query($query);
                $result = $result->fetch_all();
         
                return $result;
        }

        function getPlans($con){
                $qplano = "SELECT * FROM plano";
                $result = $con->query($qplano);
                if($result){
                    while ($row = mysqli_fetch_array($result)) {
                      echo '
                      <div class="card mb-4 box-shadow">
                          <div class="card-header">
                              <h4>'.$row["nome_plano"].'</h4>
                          </div>
                          <div class="card-body">
                              <h1 class="card-title pricing-card-title">$'.$row["valor"].'0 <small class="text-muted">/ month</small></h1>
                              <ul class="list-unstyled mt-3 mb-4">
                                <li>Up to '.$row["plano_internet"].' GB</li>
                                <li>'.($row["plano_ligacoes"] == 'ilimitada' ? "Unlimited calls" : $row["plano_ligacoes"]." Minutes").'</li>
                                <li>'.$row["plano_tv"].'</li>
                              </ul>
                              <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                            </div>
                      </div>';
                      }
                }else{
                    echo("Erro: " .mysqli_error($con));
                }
                
        }

        function log_dados($texto,$bAppend=true){
                if($bAppend){
                    file_put_contents($this->log, $texto.PHP_EOL,FILE_APPEND);
                }
                else{
                    file_put_contents($this->log, $texto.PHP_EOL);
                }
            }
}

function  select_plan($con){
        $qplano = "SELECT * FROM plano";
        $result = $con->query($qplano);
        if($result){
            while ($row = mysqli_fetch_array($result)) {
                echo '<option value="'.$row["cod_plano"].'">'.$row["nome_plano"].'</option>';
            }
        }else{
            echo("Erro: " .mysqli_error($con));
        }
    }

    function show_tbl($con){
        $query = "SELECT nome_empresa,setor_empresa,b.nome_plano,data_fim
        FROM empresas_cadastradas A JOIN plano B on plano_contratado = cod_plano";
        $result = $con->query($query);
        $user_arr = array();
        if($result){
            while ($row = mysqli_fetch_array($result)) {
              echo '
              <tr>
                <td>'.$row["nome_empresa"].'</td>
                <td>'.$row["setor_empresa"].'</td>
                <td>'.$row["nome_plano"].'</td>
                <td>'.$row["data_fim"] = null ? "<span class='badge bg-danger'>inativo</span>" 
                : "<span class='badge bg-success'>ativo</span>".'</td>
            </tr>
              ';
              $user_arr[] = array($row["nome_empresa"],$row["setor_empresa"],$row["nome_plano"],$row["data_fim"]);
              }
        }else{
            echo("Erro: " .mysqli_error($con));
        }
        $serialize_user_arr = serialize($user_arr);
        echo"<textarea name='export_data' style='display: none;'>".$serialize_user_arr."</textarea>";
    }
    ?>