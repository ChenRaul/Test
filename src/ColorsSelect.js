/**
 * 颜色选择
 * 
 */
export default class ColorsSelect {
    /**
     * 提交的数量显示对应的颜色
     * @param number 提交的数量
     * @return color value
     */
    static selectColorByNum(number){
        switch (number){
            case 0:
                return '#EDEDEF';
            case 1:
            case 2:
                return '#B6E7B0';
            case 3:
            case 4:
                return '#81CB74';
            case 5:
            case 6:
                return '#6AA066';
            //数量大于等于7
            default:
                return '#4C724B';

        }
    }
}