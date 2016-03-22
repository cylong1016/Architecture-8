<?php
namespace Home\Controller;
use Think\Controller;
class AdministratorController extends Controller
{

	public function index()
	{
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
		$lectureSigningup = array($lecture1, $lecture2);
		$this->assign('lectureSigningup', $lectureSigningup);
		$this->display();
	}

	public function add_lecture()
	{

	}

	public function modify_lecture()
	{

	}

	public function get_all_lectures()
	{

	}

	//强制报名
	public function signup()
	{

	}

	//强制退选
	public function giveup()
	{

	}

	public function get_feedback()
	{

	}

	public function delete_forum_post()
	{
		
	}
}
?>