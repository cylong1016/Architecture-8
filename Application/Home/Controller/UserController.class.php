<?php
namespace Home\Controller;
use Think\Controller;
class UserController extends Controller
{

	public function index()
	{

	}

	public function login()
	{
		
		$id = I( 'id' );
		$password = I( 'password' );

		$user = D('User');

		$result = $user->login($id, $password);

		if($result == null)
		{

		}
		else
		{
			$this->display('index');
		}
	}

	public function logout()
	{
		session(null);
		cookie('token', null);
		$this->redirect('/');
	}

	public function get_info()
	{
		$id = I ( 'id' );
		$user = D('User');

		return $user->get_info($id);
	}

	public function modify_info()
	{
		$id = I( 'id' );
		$name = I( 'name' );
		$password = I( 'password' );
		$email = I('email');

		$user = D('User');

		return $user->modify_info($id, $name, $password, $email);
	}

}
?>