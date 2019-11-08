import { WhereExpression } from '@notadd/magnus-typeorm'
export abstract class CoreData {
    // 数据库
    tablename: string = ``;
    // 字段名
    fieldname: string = ``;
    /**
     * 类型
     */
    type: 'eq' | 'in' | 'range' = `eq`;
    /**
     * 应用条件到数据库
     */
    abstract appendDb(db: WhereExpression): void;
}
export abstract class CoreGroup {
    /**
     * 操作
     */
    operator: 'and' | 'or' = 'and';

    /**
     * 左
     */
    left?: CoreData | CoreGroup;

    /**
     * 右
     */
    right?: CoreData | CoreGroup;
    /**
     * 应用条件到数据库
     */
    abstract appendDb(db: WhereExpression): void;
}
