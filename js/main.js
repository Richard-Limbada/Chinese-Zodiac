// filtering through an array to find matching attribute 
Array.prototype.filterObjects = function(key, value) {
    return this.filter(function(x) { return x[key] === value; })
}

var resultsButton = document.getElementById('resultsBtn');

// all zodiac signs
var signs = [ {animal: "rat", year: '2018'},
    {animal: "rat", year: '2008'},
{animal: "rat", year: '1996'},
{animal: "rat", year: '1984'},
{animal: "rat", year: '1972'},
{animal: "rat", year: '1960'},
{animal: "ox", year: '2009'},
{animal: "ox", year: '1997'},
{animal: "ox", year: '1985'},
{animal: "ox", year: '1973'},
{animal: "ox", year: '1961'},
{animal: "tiger", year: '2010'},
{animal: "tiger", year: '1998'},
{animal: "tiger", year: '1986'},
{animal: "tiger", year: '1974'},
{animal: "tiger", year: '1962'},
{animal: "rabbit", year: '2011'},
{animal: "rabbit", year: '1999'},
{animal: "rabbit", year: '1987'},
{animal: "rabbit", year: '1975'},
{animal: "rabbit", year: '1963'},
{animal: "dragon", year: '2012'},
{animal: "dragon", year: '2000'},
{animal: "dragon", year: '1988'},
{animal: "dragon", year: '1976'},
{animal: "dragon", year: '1964'},
{animal: "snake", year: '2013'},
{animal: "snake", year: '2001'},
{animal: "snake", year: '1989'},
{animal: "snake", year: '1977'},
{animal: "snake", year: '1965'},
{animal: "horse", year: '2014'},
{animal: "horse", year: '2002'},
{animal: "horse", year: '1990'},
{animal: "horse", year: '1978'},
{animal: "horse", year: '1966'},
{animal: "goat", year: '2015'},
{animal: "goat", year: '2003'},
{animal: "goat", year: '1991'},
{animal: "goat", year: '1979'},
{animal: "goat", year: '1967'},
{animal: "monkey", year: '2016'},
{animal: "monkey", year: '2004'},
{animal: "monkey", year: '1992'},
{animal: "monkey", year: '1980'},
{animal: "monkey", year: '1968'},
{animal: "rooster", year: '2017'},
{animal: "rooster", year: '2005'},
{animal: "rooster", year: '1993'},
{animal: "rooster", year: '1981'},
{animal: "rooster", year: '1969'},
{animal: "dog", year: '2018'},
{animal: "dog", year: '2006'},
{animal: "dog", year: '1994'},
{animal: "dog", year: '1982'},
{animal: "dog", year: '1970'},
{animal: "pig", year: '2019'},
{animal: "pig", year: '2007'},
{animal: "pig", year: '1995'},
{animal: "pig", year: '1983'},
{animal: "pig", year: '1971'},

];


function checkYear() {
    
    var result = document.getElementById('result');
    var input = document.getElementById('inputDate');
    
    var inputValue = input.value;
    
    console.log(inputValue);
    var anim = signs.filterObjects('year', inputValue)[0].animal
    console.log(signs.filterObjects('year', '1961'));
    console.log('url(img/' + anim + '.jpg)');
    
    document.getElementById('result').style.backgroundImage = 'url(img/' + anim + '.jpg)';
}

resultsButton.addEventListener('click', function(){
    checkYear();
});




