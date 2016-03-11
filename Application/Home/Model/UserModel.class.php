<?php
namespace Home\Model;
use Think\Model;
class UserModel extends Model {

	protected $fields = array (
		0 => 'uid',
		1 => 'name',
		2 => 'password',
		3 => 'email',
		4 => 'type',
		'_autoinc' => true,
		'_type' => array (
			'uid' => 'int(11) unsigned', 
			'name' => 'varchar(30)', 
			'password' => 'varchar(30)', 
			'email' => 'varchar(40)', 
			'type' => 'int(11)'
		), 
	);
	protected $pk = 'uid';

	public function login($uid, $password)
	{
		if($uid=='1111'&&$password=='1234')
		{

		}

		if($uid=='2222'&&$password=='1234')
		{

		}

		return null;
	}

	public function get_info($uid)
	{
		if($uid=='1111')
		{

		}

		if($uid=='2222')
		{

		}

		return null;
	}

	public function modify_info($uid, $name, $password, $email)
	{
		if($uid=='1111')
		{

		}

		if($uid=='2222')
		{

		}

		return false;
	}
}
?>