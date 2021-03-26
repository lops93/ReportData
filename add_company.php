<?php include("controller/controller.php"); ?>
<!DOCTYPE html>
<html>
<?php include("layout/head.php");?>
<body>
    <?php include("layout/sidebar.php");?>
    <header>
        <h1>Cadastro de clientes</h1>
    </header>
    <div class="main">
    <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                    <label for="empresa" class="col-sm-2 col-form-label">Empresa</label>
                    <input type="text" class="form-control form-cadastro" id="empresa">
                </div>
                <div class="form-group">
                    <label for="cnpj" class="col-sm-2 col-form-label">Cnpj</label>
                    <input type="text" class="form-control form-cadastro" maxlength="18" id="cnpj">
                </div>
                <div class="form-group">
                    <label for="Setor" class="col-sm-2 col-form-label">setor</label>
                    <select class="form-control form-cadastro" id="setor">
                        <option value="alimenticio">alimenticio</option>
                        <option value="entretenimento">entretenimento</option>
                        <option value="esportes">esportes</option>
                        <option value="marketing">marketing</option>
                        <option value="tecnologia">tecnologia</option>
                        <option value="telecomunicações">telecomunicações</option>
                        <option value="vendas">vendas</option>
                        <option value="serviço publico">serviço publico</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="plano" class="col-sm-2 col-form-label">Plano Contratado</label>
                    <select class="form-control form-cadastro" id="plano">
                    <?php    
                    select_plan($con)
                    ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="data-inicio" class="col-sm-2 col-form-label">Data do contrato</label>
                    <input type="date" class="form-control form-cadastro" id="data-inicio">
                    </select>
                </div>
                <button class="btn btn-success" id="btn-save">Salvar</button>
                </div>
            </div><br><br><hr>
            <table id="tbl_reg" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Empresa</th>
                <th>Setor</th>
                <th>Plano</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
           <?php
           show_tbl($con);
           ?>
        </tbody>
    </table>
    </div>
    
</body>
</html>