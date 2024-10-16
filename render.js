const digits = {
  '0': [
    ' 000 ',
    '0   0',
    '0   0',
    '0   0',
    ' 000 '
  ],
  '1': [
    '  1  ',
    ' 11  ',
    '  1  ',
    '  1  ',
    ' 111 '
  ],
  '2': [
    ' 222 ',
    '2   2',
    '   2 ',
    '  2  ',
    '22222'
  ],
  '3': [
    ' 333 ',
    '3   3',
    '   33',
    '3   3',
    ' 333 '
  ],
  '4': [
    '   4 ',
    '  44 ',
    ' 4 4 ',
    '44444',
    '   4 '
  ],
  '5': [
    '55555',
    '5    ',
    '5555 ',
    '    5',
    '5555 '
  ],
  '6': [
    ' 666 ',
    '6    ',
    '6666 ',
    '6   6',
    ' 666 '
  ],
  '7': [
    '77777',
    '   7 ',
    '  7  ',
    ' 7   ',
    '7    '
  ],
  '8': [
    ' 888 ',
    '8   8',
    ' 888 ',
    '8   8',
    ' 888 '
  ],
  '9': [
    ' 999 ',
    '9   9',
    ' 9999',
    '    9',
    ' 999 '
  ],
  ':': [
    '     ',
    '  :: ',
    '     ',
    '  :: ',
    '     '
  ],
  'A': [
    '  AAA ',
    ' A   A',
    ' AAAAA',
    ' A   A',
    ' A   A'
  ],
  'P': [
    'PPPPP',
    'P   P',
    'PPPPP',
    'P    ',
    'P    '
  ],
  'M': [
    'M   M',
    'MM MM',
    'M M M',
    'M   M',
    'M   M'
  ],
  ' ': [
    '     ',
    '     ',
    '     ',
    '     ',
    '     '
  ]
};

function padZero(num) {
  return num < 10 ? '0' + num : num;
}

export function renderClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());
  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12; // If 0, show 12 for midnight/noon
  const timeString = padZero(hours) + ':' + minutes + ':' + seconds;

  let asciiClock = '';
  for (let row = 0; row < 5; row++) {
    // Build ASCII clock for the time part
    for (let i = 0; i < timeString.length; i++) {
      asciiClock += digits[timeString[i]][row] + '  ';
    }
    // Add AM/PM part
    asciiClock += digits[amPm[0]][row] + '  ' + digits[amPm[1]][row] + '\n';
  }

  document.getElementById('clock').textContent = asciiClock;
};