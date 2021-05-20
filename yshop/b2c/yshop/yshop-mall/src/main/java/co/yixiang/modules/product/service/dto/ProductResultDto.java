package co.yixiang.modules.product.service.dto;

import io.swagger.models.auth.In;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * @ClassName 产品结果DTO
 * @Author hupeng <610796224@qq.com>
 * @Date 2020/4/24
 **/
@Getter
@Setter
@Builder
public class ProductResultDto {
    private Double minPrice;

    private Double minOtPrice;

    private Double minCost;

    private Integer stock;

    private Integer minIntegral;
}
