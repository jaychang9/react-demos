/**
 * Created by haibao on 2016/9/22.
 */

(function(value){
    console.log(this);
    console.log(this === window);
    return value > 1 ? value*arguments.callee(value-1):1;
})(3);