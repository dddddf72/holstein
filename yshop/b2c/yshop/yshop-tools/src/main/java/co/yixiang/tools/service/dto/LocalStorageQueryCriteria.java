/**
 * Copyright (C) 2018-2021
 * All rights reserved, Designed By www.yixiang.co

 */
package co.yixiang.tools.service.dto;

import co.yixiang.annotation.Query;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

/**
* @author hupeng
* @date 2020-05-13
*/
@Data
public class LocalStorageQueryCriteria{

    @Query(blurry = "name,suffix,type,operate,size")
    private String blurry;

    @Query(type = Query.Type.BETWEEN)
    private List<Timestamp> createTime;
}
