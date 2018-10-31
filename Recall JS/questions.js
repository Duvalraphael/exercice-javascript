var selectElementsStartingWithA = function(array) {
    let startsWithA = array.filter((array) => array.startsWith("a"));
    return(startsWithA);

}

var selectElementsStartingWithVowel = function(array) {
    const voyelle = ["a", "e", "i", "o", "u", "y"]
    let result = [];
    for (let j = 0; j < voyelle.length; j++) {
        
        for (let i = 0; i < array.length; i++) {
            if (array[i].charAt(0) == voyelle[j]) {
                console.log(voyelle[j])
                result.push(array[i])
    
            }
        }
    }
    return result.reverse()
}

var removeNullElements = function(array) {
    for (let i =array.length; i > -1; i--){
        if (array[i] === null) {
            array.splice (i,1);
        }
    }
    return array;
}

var removeNullAndFalseElements = function(array) {
    for (let i = array.length; i > -1; i--){
        if (array[i] === null) {
            array.splice (i,1);
        }
        if (array[i] === false){
            array.splice (i,1);
        }
    }
    return array;
}

var reverseWordsInArray = function(array) {
    for (let i= 0; i < array.length; i++){
       array[i] = array[i].split('').reverse().join('');
    }
    return array;
}

var everyPossiblePair = function(array) {
    var everyPossiblePair = [];
    var copyOfArray = array.slice().reverse();
    for (var student1 of array) {
        copyOfArray.pop();
        for (var student2 of copyOfArray) {
            everyPossiblePair.push([student1, student2].sort());
        }
    }
    return everyPossiblePair.sort();
}

var allElementsExceptFirstThree = function(array) {
    
    return array.slice(3);
}

var addElementToBeginning = function(array, element) {
    let result 
    result= array.unshift(1);
    result = array;
    return result;
}

var sortByLastLetter = function(array) {
    for (let i= 0; i < array.length; i++){
        array[i] = array[i].split('').reverse().join('');
     }
     array.sort();
     for (let i= 0; i < array.length; i++){
        array[i] = array[i].split('').reverse().join('');
     }    
    return array;
}

var getFirstHalf = function(string) {
    return string.slice(0, (string.length +1 )/2);
}

var makeNegative = function(number) {
    return -Math.abs(number);
}
var numberOfPalindromes = function(array) {
    function isPalindrome(wordArray) {
        if (wordArray.length < 2) {
           return true;
        }
        var first = wordArray.shift();
        var last = wordArray.pop();
        if (first !== last) {
            return false;
            } else {
             return isPalindrome(wordArray);
            }
        }
        function incrementIfPalindrome(count, word) {
            var wordArray = word.split("");
            return isPalindrome(wordArray) ? count + 1 : count;
        }
        return array.reduce(incrementIfPalindrome, 0);
};


var shortestWord = function(array) {
    function returnMin(previousMin, word) {
        return previousMin.length < word.length ? previousMin : word;
    }
    return array.reduce(returnMin);
}

var longestWord = function(array) {
    function returnMax(previousMax, word) {
        return previousMax.length > word.length ? previousMax : word;
    }
    return array.reduce(returnMax);
}

function sumNumbers(arrayOfNumbers) {
    function sumNumber(prevSum, number) {
        return prevSum + number;
    }
    return arrayOfNumbers.reduce(sumNumber, 0);
}

var repeatElements = function(array) {
    return array.concat(array);
}

var stringToNumber = function(string) {
    return Number(string);
}

var calculateAverage = function(array) {
    return sumNumbers(array)/array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
    for (let i=0; i<array.length; i++){
        if (array[i] > 5){
            array.splice(i, array.length);
        }
    }
    return array;
}

var convertArrayToObject = function(array) {
    const newObject = {};
    for (i = 0; i < array.length; i += 2) {
        newObject[array[i]] = array[i + 1];
    }
    return newObject;
}

var getAllLetters = function(array) {
    function addIfUnique(letters, newLetter) {
        if (letters.indexOf(newLetter) === -1) letters.push(newLetter);
        return letters;
    }
    return array.join("").split("").sort().reduce(addIfUnique, []);
};


var swapKeysAndValues = function(object) {
    var newObject = {};
    for (let key in object) {
        newObject[object[key]] = key;
    }
    return newObject;
};

var sumKeysAndValues = function(object) {
    let r = 0;
        for (let number in object){

          r += Number(number);
          r += object[number];
        }
return r;   
}

var removeCapitals = function(string) {
    function isNotCapital(character) {
        var charCode = character.charCodeAt(0);
        return (charCode > 64 && charCode < 91) ? false : true;
    }
    return string.split("").filter(isNotCapital).join("");
};



var roundUp = function(number) {
    return Math.ceil(number);
};

var formatDateNicely = function(date) {
    function padZeros(number, width) {
        var numberString = String(number);
        var zeros = [];
        for (var i = 0; i < width - numberString.length; i ++) {
            zeros.push('0');
        }
        return zeros.join("") + numberString;
    }

    var day = padZeros(date.getDate(), 2);
    var month = padZeros(date.getMonth() + 1, 2);
    var year = date.getFullYear();
    return  day + '/' +  month + '/' + year;
};

var getDomainName = function(string) {
    var domainPattern = /^.+@(.+)\..+$/;
    return string.match(domainPattern)[1];
};

var titleize = function(string) {
    var insignificantWords = ["the", "and"];
    function titleizeWord(word, insignificantWords) {
        if (insignificantWords.indexOf(word) !== -1) return word;
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    var titleizedArray = [];
    var firstWordOfSentence = true;
    for (var word of string.split(" ")) {
        if (firstWordOfSentence) {
            titleizedArray.push(titleizeWord(word, []));
            firstWordOfSentence = false;
        } else {
            titleizedArray.push(titleizeWord(word, insignificantWords));
        }
        if (word.slice(-1) === '.') firstWordOfSentence = true;
    }
    return titleizedArray.join(" ");
};

var checkForSpecialCharacters = function(string) {
    function isNormal(currentCharacter) {
        var charCode = currentCharacter.charCodeAt(0);
        return (charCode < 48 || charCode > 122) ? false : true;
    }
    return !(string.split("").every(isNormal));
};


var squareRoot = function(number) {
    return Math.sqrt(number);
};

var factorial = function(number) {
    function factorial(number) {
        if (number === 1) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }
    return factorial(number);
};

var findAnagrams = function(string) {

    function permute(array) {
        if (array.length === 1) return [array];
        let fullPermutations = [];
        for ( let i in array) {
            let subset = array.slice(0);
            subset.splice(i, 1);
            for (let  permutation of permute(subset)) {
                permutation.unshift(array[i]);  
                fullPermutations.push(permutation);
            }
        }
        return fullPermutations;
    }
    function joinLetters(array) {
        return array.join("");
    }
    return permute(string.split("")).map(joinLetters);
};

var convertToCelsius = function(number) {
    return Math.round((number - 32) / 1.8);
};

var letterPosition = function(array) {
    function convertToPosition(character) {
        return character.toLowerCase().charCodeAt(0) - 96;
    }
    return array.map(convertToPosition);
};