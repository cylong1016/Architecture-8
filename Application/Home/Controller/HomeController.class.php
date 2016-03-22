<?php
namespace Home\Controller;
use Think\Controller;
class HomeController extends Controller {
    public function index()
	{
		$this->display('login');
	}

	public function login()
	{
		$username = I('username');
		$password = I('password');

		$user = D('User');

		$result = $user->login($username, $password);

		if($result == null)
		{
			$this->error('用户名或密码错误');
		}
		else if($result[0] == 'admin')
		{
			$this->redirect('Administrator/index');
		}
		else
		{
			$this->redirect('User/index');
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
		$id = I('id');
		$user = D('User');

		return $user->get_info($id);
	}
}
?>