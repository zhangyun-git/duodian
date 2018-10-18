Vue.prototype.$shallowCopy = (old, newer) => {
        for (var i in old) {
            newer[i] = old[i];
        }
        return newer
    }
    //  深拷贝
Vue.prototype.$deepCopy = (newer) => {
        var obj = {};
        for (var i in newer) {
            obj[i] = typeof newer[i] == 'object' ? deepCopy(newer[i]) : newer[i];
        }
        return obj;
    }
    // 数组中是否含有某值
Vue.prototype.$SelectItem = (arr, content) => {
        for (var i in arr) {
            if (arr[i] == content) {
                return true;
            }
        }
        return false;
    }
    // 数组去重
Vue.prototype.$DuplicateRemoval = (arr) => {
        var newArr = [],
            judgeObj = {}; //hash表
        for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            if (judgeObj[item] == undefined) { //如果hash表中没有当前项
                newArr.push(item);
                judgeObj[item] = true;
            }
        }
        return newArr;
    }
    // 删除指定元素
Vue.prototype.$remove = (arr, content) => {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] == content) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }
    // 冒泡排序
Vue.prototype.$sort = (arr) => {
        var swap = function(index1, index2) {
            var aux = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = aux;
        }
        for (var i = 0, len = arr.length; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
        return arr;
    }
    // 日期
Vue.prototype.$toDayDate = (format = 'yyyy-MM-dd hh:mm:ss') => {
        let o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return format;
    }
    // 获取鼠标对于整个页面的位置X
Vue.prototype.$pageX = (e) => {
        e = e || window.event;
        let _left = document.documentElement.scrollLeft || document.body.scrollLeft;
        return e.pageX || e.clientX + _left;
    }
    // 获取鼠标对于整个页面的位置Y
Vue.prototype.$pageY = (e) => {
    e = e || window.event;
    let _top = document.documentElement.scrollTop || document.body.scrollTop;
    return e.pageY || e.clientY + _top;
}


function getUrlParam() {
    var _arr = location.search.substr(1).split('&');
    var _obj = {};
    for (var i = 0; i < _arr.length; i++) {
        _obj[_arr[i].split('=')[0]] = _arr[i].split('=')[1]
    };
    return _obj;
}
console.log(getUrlParam());