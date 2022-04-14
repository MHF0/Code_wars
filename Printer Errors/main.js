// Examples:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  // your code

  let errorCount = 0;
  const regex = /[a-m]/g;
  const match = s.match(regex);
  if (match) {
    errorCount = match.length;
  }     
  return `${s.length - errorCount}/${s.length}`;
}
