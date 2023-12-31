/**
 * Copyright (C) 2018-2021
 * All rights reserved, Designed By www.yixiang.co
 * 注意：
 * 本软件为www.yixiang.co开发研制，未经购买不得使用
 * 购买后可获得全部源代码（禁止转卖、分享、上传到码云、github等开源平台）
 * 一经发现盗用、分享等行为，将追究法律责任，后果自负
 */
package co.yixiang.modules.activity.service;

import co.yixiang.common.service.BaseService;
import co.yixiang.modules.activity.domain.YxUserExtract;
import co.yixiang.modules.activity.param.UserExtParam;
import co.yixiang.modules.activity.service.dto.YxUserExtractDto;
import co.yixiang.modules.activity.service.dto.YxUserExtractQueryCriteria;
import co.yixiang.modules.user.domain.YxUser;
import org.springframework.data.domain.Pageable;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
* @author hupeng
* @date 2020-05-13
*/
public interface YxUserExtractService  extends BaseService<YxUserExtract>{

    /**
     * 开始提现
     * @param userInfo 用户
     * @param param UserExtParam
     */
    void userExtract(YxUser userInfo, UserExtParam param);

    /**
     * 累计提现金额
     * @param uid uid
     * @return double
     */
    double extractSum(Long uid);


    /**
    * 查询数据分页
    * @param criteria 条件
    * @param pageable 分页参数
    * @return Map<String,Object>
    */
    Map<String,Object> queryAll(YxUserExtractQueryCriteria criteria, Pageable pageable);

    /**
    * 查询所有数据不分页
    * @param criteria 条件参数
    * @return List<YxUserExtractDto>
    */
    List<YxUserExtract> queryAll(YxUserExtractQueryCriteria criteria);

    /**
    * 导出数据
    * @param all 待导出的数据
    * @param response /
    * @throws IOException /
    */
    void download(List<YxUserExtractDto> all, HttpServletResponse response) throws IOException;


    /**
     * 操作提现
     * @param resources YxUserExtract
     */
    void doExtract(YxUserExtract resources);
}
