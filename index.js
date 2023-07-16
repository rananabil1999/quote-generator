var Quotes = [
    {'quote': 'Be yourself; everyone else is already taken.',
     'author':'Oscar Wilde'
    },
    {'quote': 'A friend is someone who knows all about you and still loves you.',
     'author':'Elbert Hubbard'
    },
    {'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
     'author':'Albert Einstein'
    },
    {'quote': 'So many books, so little time.',
     'author':'Frank Zappa'
    },
    {'quote': 'A room without books is like a body without a soul.',
     'author':'Marcus Tullius Cicero'
    },
    {'quote': 'We accept the love we think we deserve.',
     'author':'Stephen Chbosky, The Perks of Being a Wallflower'
    },
    {'quote': 'Insanity is doing the same thing, over and over again, but expecting different results.',
     'author':'Narcotics Anonymous'
    },
    {'quote': 'I am so clever that sometimes I don\'t understand a single word of what I am saying.',
     'author':'Oscar Wilde, The Happy Prince and Other Stories'
    }

];

var random = Math.floor(Math.random()*(Quotes.length));
(function(){
    function getQuote(){
        console.log(random)
        document.getElementById('quoteOutput').innerHTML=`"${Quotes[random].quote}"`;
        document.getElementById('authorOutput').innerHTML=`--${Quotes[random].author}`;
    
    }
    getQuote()
})();

var lastNumber = 0;

function newQuote(){
    
    var randomNumber = function () {
    var getRandomNumber = Math.floor(Math.random() * (Quotes.length));  
    if(getRandomNumber != lastNumber && getRandomNumber != random){
        document.getElementById("quoteOutput").innerHTML = `"${Quotes[getRandomNumber].quote}"`;
        document.getElementById("authorOutput").innerHTML = `--${Quotes[getRandomNumber].author}`;
        lastNumber = getRandomNumber;
        console.log(getRandomNumber)
    }else{
        randomNumber();
    }
};

randomNumber();
}




