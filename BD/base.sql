use project;
create table empresas_cadastradas (
id int(10) primary key auto_increment,
cnpj varchar(20) not null,
nome_empresa varchar(100) not null,
setor_empresa varchar(100) ,
plano_contratado int(10) not null,
data_contrato date,
data_fim date);

create table plano (
cod_plano int(10) not null,
nome_plano varchar(100) not null,
descricao varchar(200) not null,
plano_internet varchar(100) not null,
plano_ligacoes varchar(100) not null,
plano_tv varchar(100) not null,
valor float);

insert into plano values
(1, "basico", "O plano básico possui 70gb de internet e 100 minutos em ligações", "70",
"100", "0", 59.90);
insert into plano values
(2, "convencional", "O plano convencional possui 100gb de internet e ligação ilimitada", "100",
"ilimitada", "0", 99.90);
insert into plano values
(3, "plus", "O plano convencional possui 200gb de internet ,ligação ilimitada e uma seleção de canais basicos", "200",
"ilimitada", "pacote basico", 149.90);
insert into plano values
(4, "mega", "O plano mega possui 200gb de internet, ligação ilimitada e todos os canais premium", "200",
"ilimitada", "pacote premium", 199.90);
