<?php
namespace Home\Controller;
use Think\Controller;
class UserController extends Controller
{

	public function index()
	{
		$user = array(
			'uid' => 'student',
			'name' => 'cylong',
			'password' => '1234',
			'email' => 'cylong@nju.edu.cn',
		);

		$lecture1 = array (
			'id' => 1,
			'name' => '创新创业与青年成长',
			'lecturer' => '曾宪章',
			'date' => '2016-03-08 14:15:00',
			'address' => '大学生活动中心南青学堂',
			'count' => '10',
			'total' => '50'
		);

		$lecture2 = array (
			'id' => 2,
			'name' => '艺术性共话创新创业理念',
			'lecturer' => '曾宪章',
			'date' => '2016-03-08 09:15:00',
			'address' => 'A430',
			'count' => '10',
			'total' => '50'
		);

		$lectureSigningup = array($lecture1, $lecture2);
		$lectureEnded = array($lecture1, $lecture2);
		$lectureLive = array($lecture1, $lecture2);
		$this->assign('user', $user);
		$this->assign('lectureSigningup', $lectureSigningup);
		$this->assign('lectureEnded', $lectureEnded);
		$this->assign('lectureLive', $lectureLive);
		$this->display();
	}

	public function login()
	{
		$id = 'admin';
		$password = '1234';
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
		$id = I('id');
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

	public function lectureDetail()
	{
		$user = array(
			'uid' => 'student',
			'name' => 'cylong',
			'password' => '1234',
			'email' => 'cylong@nju.edu.cn',
		);

		$this->assign('id',1);
		$this->assign('name','创新创业与青年成长');
		$this->assign('lecturer','曾宪章');
		$this->assign('date','2016-03-08 14:15:00');
		$this->assign('address','大学生活动中心南青学堂');

		$this->assign('state',0);
		$this->assign('count',20);
		$this->assign('total',30);
		$this->assign('content','曾宪章<br>全友电脑创始人<br>美国百人会成员');
		$this->assign('user', $user);

		$this->display();
	}

	public function lectureLog()
	{
		$user = array(
			'uid' => 'student',
			'name' => 'cylong',
			'password' => '1234',
			'email' => 'cylong@nju.edu.cn',
		);

		$lecture1 = array (
			'id' => 1,
			'name' => '创新创业与青年成长',
			'lecturer' => '曾宪章',
			'date' => '2016-03-08 14:15:00',
			'address' => '大学生活动中心南青学堂'
		);
		$lecture2 = array (
			'id' => 2,
			'name' => '艺术性共话创新创业理念',
			'lecturer' => '曾宪章',
			'date' => '2016-03-08 09:15:00',
			'address' => 'A430'
		);
		$lectureToLog = array($lecture1, $lecture2);
		$lectureLogged = array($lecture1);
		$this->assign('lectureToLog', $lectureToLog);
		$this->assign('lectureLogged', $lectureLogged);
		$this->assign('total', 20);
		$this->assign('user', $user);

		$this->display();
	}

	public function lectureLive() {
		$user = array(
			'uid' => 'student',
			'name' => 'cylong',
			'password' => '1234',
			'email' => 'cylong@nju.edu.cn',
		);

		$this->assign('id',1);
		$this->assign('name','创新创业与青年成长');
		$this->assign('lecturer','曾宪章');
		$this->assign('date','2016-03-08 14:15:00');
		$this->assign('address','大学生活动中心南青学堂');

		$this->assign('user', $user);
		$this->display();
	}

}
?>
