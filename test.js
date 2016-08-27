import test from 'ava';
import toSnake from './to-snake';

test('toSnake', t => {
  const expected = 'my-cool-post';
  t.is(toSnake('My Cool Post'), expected);
});
