/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export function convertBytesToHuman(bytes) {
  if (!Number.isFinite(bytes) || bytes < 0) {
    return false;
  }

  const units = [ 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB' , 'YB'];

  for (let i = 0; i < units.length; ++i, bytes /= 1024) {
    if (bytes / 1024 < 1) {
      return `${parseFloat(bytes.toFixed(2))} ${units[i]}`;
    }
  }
}
