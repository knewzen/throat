const spawnSync = require('child_process').spawnSync;

test('flow', () => {
  const result = spawnSync('npm', ['run', 'flow']);
  expect(result.status).not.toBe(0);
  expect(result.stdout.toString('utf8').split('\n').filter(l => !/^\>/.test(l)).join('\n')).toMatchSnapshot();
});
