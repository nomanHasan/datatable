export const timer = (name = 'Timer') => {
    const start = new Date();
    return {
        stop: () => {
            const end  = new Date();
            const time = end.getTime() - start.getTime();
            return {name, time};
        }
    };
};
