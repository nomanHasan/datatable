export const timer = (name = 'Timer') => {
    var start = new Date();
    return {
        stop: () => {
            var end  = new Date();
            var time = end.getTime() - start.getTime();
            return {name, time};
        }
    }
};
