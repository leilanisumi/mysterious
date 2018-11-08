var quotes = [
"no",
"absolutely not, and you're ugly",
"maybe",
"ples calm down",
"UH as if",
"I'm done with u",
"yeep",
"yayeet",
"go swallow a stick and then we'll talk",
"u need a drink(of water)",
"ya'll ugly ugly *poof*",
"if the circumstances align",
"perhaps",
]


function newQuote() {
    //alert("helo pesent")
    var randNum = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}
