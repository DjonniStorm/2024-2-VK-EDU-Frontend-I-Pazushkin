import { correctSentence } from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.");
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.");
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.");
  expect(correctSentence("a")).toBe("A.");
  expect(correctSentence("")).toBe("");
});

// другая группа проверок
test('throw error with unexpected input', () => {
  expect(() => correctSentence(undefined)).toThrow("Incorrect data type");
  expect(() => correctSentence(null)).toThrow("Incorrect data type");
  expect(() => correctSentence({})).toThrow("Incorrect data type");
  expect(() => correctSentence([])).toThrow("Incorrect data type");
});
