/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import { convertBytesToHuman } from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(/* undefined */)).toBe(false);
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman('kavabanga')).toBe(false);
  expect(convertBytesToHuman({})).toBe(false);
  expect(convertBytesToHuman([])).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5 B');
  expect(convertBytesToHuman(1_024)).toBe('1 KB');
  expect(convertBytesToHuman(1_048_576)).toBe('1 MB');
  expect(convertBytesToHuman(1_073_741_824)).toBe('1 GB');
  expect(convertBytesToHuman(1_099_511_627_776)).toBe('1 TB');
});

// другая группа проверок
test('Возвращает корректное значение для дробных чисел', () => {
  expect(convertBytesToHuman(4_980_736)).toBe('4.75 MB');
  expect(convertBytesToHuman(3_407_872)).toBe('3.25 MB');
  expect(convertBytesToHuman(2_684_354_560)).toBe('2.5 GB');
});
