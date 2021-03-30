<?php include("controller/controller.php"); ?>
<!DOCTYPE html>
<html>
<?php include("layout/head.php");?>
<body>
    <?php include("layout/sidebar.php");?>
    <header>
        <h1>Cadastro de setor</h1>
    </header>
    <div class="main">
    <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                    <label for="setor" class="col-sm-2 col-form-label">nome do setor</label>
                    <input type="text" class="form-control form-cadastro" id="setor">
                    <button class="btn btn-success" id="btn-save-setor">Salvar</button>
                    </div>
                </div>
            </div>
    </div>
    
</body>
</html>