/**
 * Copyright (C) 2018-2021
 * All rights reserved, Designed By www.yixiang.co

 */
package co.yixiang.modules.system.service.dto;

import co.yixiang.annotation.Query;
import lombok.Data;

/**
 * 公共查询类
 */
@Data
public class PermissionQueryCriteria {

    // 多字段模糊
    @Query(blurry = "name,alias")
    private String blurry;
}
