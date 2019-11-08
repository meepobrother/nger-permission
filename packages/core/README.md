## @nger/permission.core

stationId->station->roleGroup->role[]-permission[]->合并;

stationId->合并后的permission[];
| roleGroupId | value      |
|-------------|------------|
| 1           | {list: []} |

--- 缓存 --- redis --

permission[]->role->roleGroup->更新职位权限表->station;

permission[]->role-->[新增,删除，修改]更新职位权限表->roleGroup->station;


1.菜单权限 urlCode
控制用户可访问的连接/路由

2.页面权限 pageCode/widgets table/fields[username,password] 字段/actions 按钮(新增，删除)

widget=table
fields = username,password
actions = add,delete

| 用户名  | 密码   | 操作    |
|------|------|-------|
| ims1 | 1234 | 新增,删除 |
| ims2 | 1234 | 新增,删除 |
| ims3 | 1234 | 新增,删除 |
| ims4 | 1234 | 新增,删除 |
| ims5 | 1234 | 新增,删除 |
| ims6 | 1234 | 新增,删除 |
<a>1</a>,<a>2</a>,<a>3</a>

widget=form
fields = username,password,remeber
actions = submit

<form>
<input placeholder="请输入用户名"/>
<input placeholder="请输入密码"/>
<input type="checkbox"/>记住密码
<button>提交</button>
</form>


widget=detail
fields = username,password
actions = link1

<div>
<label>用户名:ims</label>
<label>密码: 123456</label>
<a href="link1">link1</a>
</div>


控制用户客房的页面里面的元素，控制用户可操作性的最小的单元。编辑、删除、新增。

3.数据范围

每个人显示不同的数据，列表、编辑编辑那些数据，新增可以填写的表单有那些

1. 一个 
   1. 数据库表.create_user_id = current.user_id 本人的数据
   2. 数据库表.department_id = current.department_id 本部门的数据
   3. 数据库表.domain_id = current.domain_id 本域的数据
   4. 数据库表.station_id = current.station_id 本岗位的数据
   5. 数据库表.to_user_id = current.user_id 指派给我的数据
2. 多个
   1. 数据库表.department_id in current.department_ids 本部门及下属部门
   2. 数据库表.create_data in [1,2,3] 周一周二周三
3. 范围
   1. 10>数据库表.department_id >0 0-10部门编号的数据
4. 组合
   1. 本人的数据并且本部门数据 数据库表.create_user_id = current.user_id and 数据库表.department_id = current.department_id
   2. 本人的数据或者本部门数据数据库表.create_user_id = current.user_id or 数据库表.department_id = current.department_id



1.数据范围表

第一种（添加元数据范围）：1选择表->2选择字段->选择类型->选择SuperCurrent->保存
第二种 (添加组合数据范围): 选择数据范围表某一项->选择操作符->保存


====
改造自己的表
