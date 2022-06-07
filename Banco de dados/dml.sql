use vilaoDB;

insert into tb_vilao (nm_vilao, ds_maldades)
	  values('Thanos','Deisimar');
      
select id_vilao,
       nm_vilao,
       ds_maldades
from tb_vilao
where ds_maldades