use vilaoDB;

insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poder )
	  values('Thanos','Deisimar', true );
      
select id_vilao,
       nm_vilao,
       ds_maldades,
       bt_super_poder 
from tb_vilao
   