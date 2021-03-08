create database maosdadas;
use maosdadas;

create table usuario(
id_usuario varchar(50),
nome varchar(100),
cpf varchar(20),
celular varchar(50),
email varchar(100),
senha varchar (50),
primary key (id_usuario)
);

alter table usuario 
ENGINE = innodb;

create table cadastrarprodutos(
id_produto int primary key auto_increment,
username varchar(50) not null,
produto varchar(100),
categoria varchar(50),
imagem varchar(100) default '../Imagens/default.jpg',
valor varchar (50),
descricao varchar(500)
);

alter table cadastrarprodutos 
ENGINE = innodb;

create table cadastrarservico(
id_servico int auto_increment primary key,
username varchar(50),
servico varchar(100),
categoria varchar(50),
imagem varchar(100) default '../Imagens/default.jpg',
valor varchar (50),
descricao varchar(500)
);

alter table cadastrarservico 
ENGINE = innodb;

ALTER TABLE `cadastrarprodutos` ADD CONSTRAINT `fk_usuario` FOREIGN KEY ( `username` ) REFERENCES `usuario` ( `id_usuario` ) ;

insert into usuario values
('@carla', 'Carla', '123456789', '(11) 1325-468', 'carla@carla', '111325468'),
('@patricia', 'Patricia', '123456789', '(11) 1325-468', 'patricia@patricia', '1325468'),
('@jessica', 'Jessica', '123456789', '(11) 1325-468', 'jessica@jessica', '1325468'),
('@maria', 'Maria', '123456789', '(11) 1325-468', 'maria@maria', '1325468'),
('@cintia', 'Cintia', '123456789', '(11) 1325-468', 'cintia@cintia', '1325468'),
('@tamires', 'Tamires', '123456789', '(11) 1325-468', 'tamires@tamires', '1325468'),
('@evelyn', 'Evelyn', '123456789', '(11) 1325-468', 'evelyn@evelyn', '1325468'),
('@mari', 'Mari', '123456789', '(11) 1325-468', 'mari@mari', '1325468'),
('@bianca', 'Bianca', '123456789', '(11) 1325-468', 'bianca@bianca', '1325468');

insert into cadastrarprodutos value 

(null, '@carla', 'Fone de Ouvido', 'Eletrônicos', 'fone.webp', '10,00', 'Baita fone de ouvido funcionando perfeitamente.'),

(null, '@jessica', 'Pano de Limpeza', 'Limpeza', 'pano.jpg', '5,50', 'Pano de limpeza em ótima qualidade, entre em contato e compre os seus.'),

(null, '@maria', 'Rodo de Passar', 'Limpeza', 'rodo.jpg', '13,99', 'Rodo que retira a água com muita facilidade.'),

(null, '@cintia', 'Kit de Roupas', 'Vestuário', 'roupas.jpg', '50,00', 'Kit de roupas feitas especialmente pra você, entre em contato e conheça outros produtos.'),

(null, '@tamires', 'Rodo', 'Limpeza', 'rodo.jpg', '17,00', 'Rodinho de passar.'),

(null, '@evelyn', 'Flanelas', 'Limpeza', 'pano.jpg', '3,99', 'Flanelas que limpam que é uma beleza. Garanta a sua, entre em contato.'),

(null, '@mari', 'Salgados de Festa', 'Alimentação', 'salgados.jpg', '40,00', 'Salgadinhos de festa por um preço ótimo.'),

(null, '@bianca', 'Bolinho de Pote', 'Alimentação', 'bolo.jpg', '15,00', 'Bolinho de pote delicioso, os melhores da região.'),

(null, '@patricia', 'Coleção de Roupas', 'Vestuário', 'roupas.jpg', '70,00', 'Uma infinidade de peças, renove seu guarda-roupa e conheça outros produtos também.');

insert into cadastrarservico values 


(null, '@carla', 'Serviços de Babá', 'Babá', 'baba.jpg', '100,00', 'Trabalhei por muitoas anos como babá.'),

(null, '@jessica', 'Faço Escovas', 'Salao de Beleza', 'cabelo.jpg', '50,00', 'Tenho experiencia nessa área, possuo um salao de beleza na rua x perto da y.'),

(null, '@maria', 'Costura em Geral', 'Costureira', 'costura.jpg', '15,00', 'Costuras no geral, reforma de peças, criação de modelos.'),

(null, '@cintia', 'Serviços de Limpeza', 'Limpeza', 'limpeza.png', '50,00', 'Realizo limpezas de pia, banheiros, quartos e etc, entre em contato'),

(null, '@tamires', 'Faço Pinturas', 'Pintura', 'pintura.jpg', '80,00', 'Tenho uma vasta experiencia em pintar paredes, móveis, e etc.'),

(null, '@evelyn', 'Reparos e Construção', 'Construcao e Reforma', 'reforma.webp', '300,00', 'Habilidade em reformar e construir casas, reparos em eletrica, encanamento e etc.');



select username, produto, categoria, valor, descricao, nome, cpf, celular, email
from cadastrarprodutos
inner join usuario 
on id_usuario = username;

select * from cadastrarprodutos;