<?php
namespace Home\Model;
use Think\Model;

class AttendanceModel extends Model {

	protected $fields = array (
		0 => 'aid',
		1 => 'lid',
		2 => 'uid',
		3 => 'is_attend',//default 0
		'_autoinc' => true,
		'_type' => array (
			'fid' => 'int(11) unsigned',
			'lid' => 'int(11) unsigned', 
			'uid' => 'int(11) unsigned',  
			'is_attend' => 'tinyint(4)',
		), 
	);
	protected $pk = 'aid';

}
?>