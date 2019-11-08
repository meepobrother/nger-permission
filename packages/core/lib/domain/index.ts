export class Current {
    /**
     * 所有表都有
     */
    domainId?: number;
    /**
     * 所有表都有
     */
    uid?: number;

    /**
     * 用户->[stationId?,departmentId?]
     */
    stationId?: number;
    departmentId?: number;

    isAdmin?: boolean;
    isDomain?: boolean;
}

export class SuperCurrent extends Current {
    departmentAndChildrenIds: number[] = [];// 本部门及下属部门ids
    parentDepartmentId?: number;// 上级部门
    parentDepartmentAndChildrenIds: number[] = []; // 上级部门及其下属部门ids
}

/**
 * 本部门
 * 本部门及下属部门
 */
export class Domain {
    current?: Current;
    /**
     * 
     * @param url 获取页面widgets
     */
    pageSetting(url: string) { }
    /**
     * 获取菜单 根据当前用户所在的岗位[超管跟域管除外]]
     */
    systemSetting(systemCode: string) { }
}