<?php
namespace Home\Model;
use Think\Model;
class LectureModel extends Model {

	protected $fields = array (
		0 => 'lid',
		1 => 'name',
		2 => 'presenter',
		3 => 'description',
		4 => 'max_num',
		5 => 'start_time',
		6 => 'end_time'
		'_autoinc' => true,
		'_type' => array (
			'lid' => 'int(11) unsigned', 
			'name' => 'varchar(40)', 
			'presenter' => 'varchar(20)', 
			'description' => 'varchar(255)',
			'max_num' => 'int(11)', 
			'start_time' => 'varchar(30)',
			'end_time' => 'varchar(30)'
		), 
	);
	protected $pk = 'lid';


}
?>