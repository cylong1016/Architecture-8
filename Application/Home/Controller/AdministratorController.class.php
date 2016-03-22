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
		$lectureEnded = array($lecture1);
		$this->assign('lectureSigningup', $lectureSigningup);
		$this->assign('lectureEnded', $lectureEnded);
		$this->display();
	}

	public function lectureDetail($id)
	{
		$this->assign('id',1);
		$this->assign('name','创新创业与青年成长');
		$this->assign('lecturer','曾宪章');
		$this->assign('date','2016-03-08 14:15:00');
		$this->assign('address','大学生活动中心南青学堂');

		$this->assign('state',0);
		$this->assign('count',20);
		$this->assign('total',30);
		$this->assign('content','曾宪章<br>全友电脑创始人<br>美国百人会成员');

		$this->display();
	}

	public function lectureLog()
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
		$lectureToLog = array($lecture1, $lecture2);
		$lectureLogged = array($lecture1);
		$this->assign('lectureToLog', $lectureToLog);
		$this->assign('lectureLogged', $lectureLogged);
		$this->assign('total', 20);

		$this->display();
	}

	public function helpSignup($id)
	{
		$this->display();
	}

	public function newLecture()
	{
		$this->display();
	}

	public function newStudent()
	{
		$this->display();
	}

	public function studentInfo()
	{
		$this->assign('id',1);
		$this->assign('name','233');
		$this->assign('number',131250000);
		$this->assign('grade','大三');
		$this->assign('major','软件工程');
		$this->assign('signedupNumber',5);
		$this->assign('participatedNumber',2);
		$this->assign('unparticipatedNumber',3);
		
		$lecture1 = array (
			'name' => '艺术性共话创新创业理念',
			'row' => 1,
			'date' => '2016-03-08 09:15:00',
			'participated' => 1
		);
		$lecture2 = array (
			'name' => '艺术性共话创新创业理念',
			'row' => 2,
			'date' => '2016-03-08 09:15:00',
			'participated' => 1
		);
		$lecture3 = array (
			'name' => '艺术性共话创新创业理念',
			'row' => 3,
			'date' => '2016-03-08 09:15:00',
			'participated' => 0
		);
		$lecture4 = array (
			'name' => '艺术性共话创新创业理念',
			'row' => 4,
			'date' => '2016-03-08 09:15:00',
			'participated' => 0
		);
		$lecture5 = array (
			'name' => '艺术性共话创新创业理念',
			'row' => 5,
			'date' => '2016-03-08 09:15:00',
			'participated' => 0
		);
		
		$lectureList = array($lecture1,$lecture2,$lecture3,$lecture4,$lecture5);
		$this->assign('lectureList', $lectureList);

		$this->display();
	}

	public function studentList()
	{
		$this->display();
	}

}
?>