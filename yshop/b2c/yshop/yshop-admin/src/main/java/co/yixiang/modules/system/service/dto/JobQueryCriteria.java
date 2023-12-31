/**
 * Copyright (C) 2018-2021
 * All rights reserved, Designed By www.yixiang.co

 */
package co.yixiang.modules.system.service.dto;

import co.yixiang.annotation.Query;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

/**
* @author hupeng
* @date 2019-6-4 14:49:34
*/
@Data
@NoArgsConstructor
public class JobQueryCriteria {

    @Query(type = Query.Type.INNER_LIKE)
    private String name;

    @Query
    private Boolean enabled;

    @Query
    private Long deptId;

    @Query(propName = "deptId",  type = Query.Type.IN)
    private Set<Long> deptIds;

    @Query(type = Query.Type.BETWEEN)
    private List<Timestamp> createTime;
}
