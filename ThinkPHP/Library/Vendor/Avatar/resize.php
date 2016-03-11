<?php

include 'config.inc.php';

function avatar_resize()
{
    // Method Start
if( !$image = $_POST["img"] ){
    $ret['result_code'] = 101;
    $ret['result_des'] = "图片不存在";
} else {
    $image = ROOT_PATH . $image;
    $info = getImageInfo( $image);
    if( !$info ){
        $ret['result_code'] = 102;
        $ret['result_des'] = "图片不存在";
    } else {
        $x = $_POST["x"];
        $y = $_POST["y"];
        $w = $_POST["w"];
        $h = $_POST["h"];
        $width = $srcWidth = $info['width'];
        $height = $srcHeight = $info['height'];
        $type = empty($type)?$info['type']:$type;
        $type = strtolower($type);
        unset($info);
        // 载入原图
        $createFun = 'imagecreatefrom'.($type=='jpg'?'jpeg':$type);
        $srcImg     = $createFun($image);
        //创建缩略图
        if($type!='gif' && function_exists('imagecreatetruecolor'))
            $thumbImg = imagecreatetruecolor($width, $height);
        else
            $thumbImg = imagecreate($width, $height);
        // 复制图片
        if(function_exists("imagecopyresampled"))
            imagecopyresampled($thumbImg, $srcImg, 0, 0, 0, 0, $width, $height, $srcWidth,$srcHeight);
        else
            imagecopyresized($thumbImg, $srcImg, 0, 0, 0, 0, $width, $height,  $srcWidth,$srcHeight);
        if('gif'==$type || 'png'==$type) {

            $background_color  =  imagecolorallocate($thumbImg,  0,255,0);
            imagecolortransparent($thumbImg,$background_color);
        }
        // 对jpeg图形设置隔行扫描
        if('jpg'==$type || 'jpeg'==$type) 
            imageinterlace($thumbImg,1);
        // 建立目录
        $targetPath = ROOT_PATH . 'Public/uploads/avatar/thumb/';
        $pathBig    = $targetPath . 'big/';
        $pathMiddle = $targetPath . 'middle/';
        $pathSmall  = $targetPath . 'small/';
        if( !is_dir($pathBig) )    { mkdir($pathBig,    0777,true); }
        if( !is_dir($pathMiddle) ) { mkdir($pathMiddle, 0777,true); }
        if( !is_dir($pathSmall) )  { mkdir($pathSmall,  0777,true); }

        // 生成图片
        $imageFun = 'image'.($type=='jpg'?'jpeg':$type);
        $thumbname01 = str_replace("origin/ori_", "thumb/big/b_", $image);
        $thumbname02 = str_replace("origin/ori_", "thumb/middle/m_", $image);
        $thumbname03 = str_replace("origin/ori_", "thumb/small/s_", $image);
        $imageFun($thumbImg,$thumbname01,100);
        $imageFun($thumbImg,$thumbname02,100);
        $imageFun($thumbImg,$thumbname03,100);
        $thumbImg01 = imagecreatetruecolor(100,100);
        imagecopyresampled($thumbImg01,$thumbImg,0,0,$x,$y,100,100,$w,$h);
        
        $thumbImg02 = imagecreatetruecolor(60,60);
        imagecopyresampled($thumbImg02,$thumbImg,0,0,$x,$y,60,60,$w,$h);
        
        $thumbImg03 = imagecreatetruecolor(36,36);
        imagecopyresampled($thumbImg03,$thumbImg,0,0,$x,$y,36,36,$w,$h);
        
        $imageFun($thumbImg01,$thumbname01,100);
        $imageFun($thumbImg02,$thumbname02,100);
        $imageFun($thumbImg03,$thumbname03,100);
        imagedestroy($thumbImg01);
        imagedestroy($thumbImg02);
        imagedestroy($thumbImg03);
        imagedestroy($thumbImg);
        imagedestroy($srcImg);
        $ret['result_code'] = 1;
        $ret['result_des'] = array(
            "big"   => str_replace(ROOT_PATH, "", $thumbname01),
            "middle"=> str_replace(ROOT_PATH, "", $thumbname02),
            "small" => str_replace(ROOT_PATH, "", $thumbname03)
        );
    }
}
echo json_encode($ret);
    //exit();
    // Method end
return $ret;    // Return to the main method for avatar_url save
}