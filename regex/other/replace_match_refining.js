// It is possible to define a refiner function using matches (replace)

'iiki'.replace(/i+/g, match => match.length > 1 ? match : 'z')
<- iikz