/**
 * Copyright (C) 2018-2021
 * All rights reserved, Designed By www.yixiang.co

 */
package co.yixiang.modules.activity.service.dto;

import co.yixiang.annotation.Query;
import lombok.Data;

/**
* @author hupeng
* @date 2020-05-13
*/
@Data
public class YxStoreCouponQueryCriteria{

    @Query
    private Integer isDel;
}
