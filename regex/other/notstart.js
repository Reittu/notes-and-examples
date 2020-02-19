// Not start
(?!^)aaa

// Not start, not end
(?<!^)aaa(?!$)

// Not start, not followed by 3 characters and a space or end of line
(?!^)aaa(?!.{3}( |$))