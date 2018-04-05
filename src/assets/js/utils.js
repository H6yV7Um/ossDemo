export function byte2Str(byteSize, isShort) {
    const num = parseInt(byteSize, 10);
    if (!num) {
        return byteSize + 'B';
    } else {
        byteSize = num;
    }
    let i = 0;
    while (byteSize > 1024) {
        byteSize = byteSize / 1024;
        i++;
    }
    const unitList = ['B', 'KB', 'MB', 'GB', 'TB'];
    const unit = (unitList[i] || '').slice(0, isShort ? 1 : 2);
    byteSize = byteSize.toFixed(isShort ? 1 : 2);
    return byteSize + unit;
}
