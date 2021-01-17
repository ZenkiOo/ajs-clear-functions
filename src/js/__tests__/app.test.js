import showHealth from '../app';

test('should show colored healthbar', () => {
  const result = showHealth({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('should show colored healthbar', () => {
  const result = showHealth({ name: 'Маг', health: 40 });

  expect(result).toBe('wounded');
});

test('should show colored healthbar', () => {
  const result = showHealth({ name: 'Маг', health: 14 });

  expect(result).toBe('critical');
});
