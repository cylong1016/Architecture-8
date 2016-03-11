<?php
namespace Home\Model;
use Think\Model;
class ForumPostModel extends Model {

	protected $fields = array (
		0 => 'cid',
		1 => 'lid',
		2 => 'uid',
		3 => 'content',
		4 => 'time',
		'_autoinc' => true,
		'_type' => array (
			'cid' => 'int(11) unsigned',
			'lid' => 'int(11) unsigned', 
			'uid' => 'int(11) unsigned', 
			'content' => 'varchar(255)', 
			'time' => 'varchar(30)'
		), 
	);
	protected $pk = 'cid';


}
?>