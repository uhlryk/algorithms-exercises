export const memoFunction =(func: (...args: any) => any) => {
    const memoStorage: {
        [key: string]: any;
    } = {};
    return (...args: any) => {
        const stringifiedArgs = JSON.stringify(args);
        if(memoStorage[stringifiedArgs]) {
            return memoStorage[stringifiedArgs]
        }
        return memoStorage[stringifiedArgs] = func(...args);
    }
}