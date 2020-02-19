// How many rectangles are formed on the plane by given points

// . . .
// . . .
// . . .

function countRectangles(dimensions) {
    const [rows, columns] = dimensions;
    const lastRowIndex = rows - 1;
    let rectangles = 0;
    // Rows (stop at second to last)
    for (let m = 0; m < lastRowIndex; m++) {
        // Columns (stop at second to last)
        for (let n = 0; n < columns - 1; n++) {
            // End point column
            for (let x = n + 1; x < columns; x++) {
                console.table({ row: m, column: n, endColumn: x });
                // Arithmetic sum
                rectangles += (lastRowIndex - m + 1)/2 * (lastRowIndex - m)

                // Or
                // Rows below = lastRowIndex - i (at least 1) 
                //for (let rBelow = lastRowIndex - i; rBelow > 0; rBelow--)
                //   rectangles += rBelow;
            }
        }
        return rectangles;
    }
}
countRectangles([3,3])



// Other

function isRectangle(point1, point2) {
  return point1[0] * point2[1] === point1[1] * point2[0]
}