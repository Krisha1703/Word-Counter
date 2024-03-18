/* Interactive Word Counter
   Made By: Krisha Botadara*/

   function wordCount() { 
    // Get the search word from the input field
    var SearchWord = document.getElementById("search").value;

    // Count various statistics
    CountTotalWords(); 
    CountTotalLetters();  
    CountTotalSentences();
    CountEachLetter();
    CountPunctuations();
    CountCommonWords();

    if(SearchWord != ""){ // If a search word is provided, count its occurrences
        CountSearchWord();
    }

    else; // Otherwise, do nothing
    
}

function CountTotalWords(){
    //Counts the total number of words in a entered text
    var WordCount = 0;

    // Get the text from the input field
    var words = document.getElementById("w").value;
    var split = words.split(' '); // Split the text into words

    // Count non-empty words
    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            WordCount ++;
        }
    }
    // Display the total word count
    document.getElementById("Words").innerHTML = "Total words: " + WordCount;
}

function CountTotalLetters(){
    //Counts the total number of Characters in a entered text
    var LetterCount = 1;

   // Get the text from the input field
   var words = document.getElementById("w").value;
   // Split the text into words
   var split = words.split(' ');

   // Calculate the total number of characters
   LetterCount += words.length - split.length;
   // Display the total character count
   document.getElementById("Characters").innerHTML = "Total Letters" + ": " + LetterCount;
}

function CountTotalSentences(){
    // Counts the total number of sentences in the entered text
    var SentenceCount = 0;

    // Get the text from the input field
    var words = document.getElementById("w").value;

    // Count sentence-ending punctuation marks
    for (var i = 0; i < words.length; i++){
        if (words[i] == "." || words[i] == "!" || words[i] == "?") {
            SentenceCount ++;
        }
    }           
    // Display the total sentence count
    document.getElementById("Sentences").innerHTML = "Sentences: " + SentenceCount;
}

function CountEachLetter(){
    // Count vowels and consonants separately
   CountVowels();
   CountConsonants();
}

function CountVowels(){
    // Count the occurrences of each vowel in the text
    var words = document.getElementById("w").value.toUpperCase();;
    var A = E = I = O = U = 0;

    for (var i = 0; i < words.length; i++){

        switch(words[i]){
            case 'A': A++; break;
            case 'E': E++; break;
            case 'I': I++; break;
            case 'O': O++; break;
            case 'U': U++; break;
        }
    }

    // Display the counts of each vowel
    document.getElementById("letterA").innerHTML =  "A: " + A;
    document.getElementById("letterE").innerHTML =  "E: " + E;
    document.getElementById("letterI").innerHTML =  "I: " + I;
    document.getElementById("letterO").innerHTML =  "O: " + O;
    document.getElementById("letterU").innerHTML =  "U: " + U;
}

function CountConsonants(){
    // Count the occurrences of each consonant in the text
    var words = document.getElementById("w").value.toUpperCase();
    var B = C = D = F = G = H = J = K = L = M = N = P = Q = R = S = T = V = W = X = Y = Z = 0;

    for (var i = 0; i < words.length; i++){

        switch(words[i]){
            case 'B': B++; break;
            case 'C': C++; break;
            case 'D': D++; break;
            case 'F': F++; break;
            case 'G': G++; break;
            case 'H': H++; break;
            case 'J': J++; break;
            case 'K': K++; break;
            case 'L': L++; break;
            case 'M': M++; break;
            case 'N': N++; break;
            case 'P': P++; break;
            case 'Q': Q++; break;
            case 'R': R++; break;
            case 'S': S++; break;
            case 'T': T++; break;
            case 'V': V++; break;
            case 'W': W++; break;
            case 'X': X++; break;
            case 'Y': Y++; break;
            case 'Z': Z++; break;
        }
    }

    // Display the counts of each consonant
    document.getElementById("letterB").innerHTML = "B: " + B;
    document.getElementById("letterC").innerHTML = "C: " + C;
    document.getElementById("letterD").innerHTML = "D: " + D;
    document.getElementById("letterF").innerHTML = "F: " + F;
    document.getElementById("letterG").innerHTML = "G: " + G;
    document.getElementById("letterH").innerHTML = "H: " + H;
    document.getElementById("letterJ").innerHTML = "J: " + J;
    document.getElementById("letterK").innerHTML = "K: " + K;
    document.getElementById("letterL").innerHTML = "L: " + L;
    document.getElementById("letterM").innerHTML = "M: " + M;
    document.getElementById("letterN").innerHTML = "N: " + N;
    document.getElementById("letterP").innerHTML = "P: " + P;
    document.getElementById("letterQ").innerHTML = "Q: " + Q;
    document.getElementById("letterR").innerHTML = "R: " + R;
    document.getElementById("letterS").innerHTML = "S: " + S;
    document.getElementById("letterT").innerHTML = "T: " + T;
    document.getElementById("letterV").innerHTML = "V: " + V;
    document.getElementById("letterW").innerHTML = "W: " + W;
    document.getElementById("letterX").innerHTML = "X: " + X;
    document.getElementById("letterY").innerHTML = "Y: " + Y;
    document.getElementById("letterZ").innerHTML = "Z: " + Z;
}

function CountPunctuations(){
      // Count the occurrences of each punctuation mark in the text
    var words = document.getElementById("w").value.toUpperCase();;
    var Exclaimation = Colon = Semicolon = Comma = Question = Period = Hyphen = Apostrophe = DoubleQuotes = Underscore = 0;

    for (var i = 0; i < words.length; i++){

        switch(words[i]){
            case '!': Exclaimation++; break;
            case ':': Colon++; break;
            case ';': Semicolon++; break;
            case ',': Comma++; break;
            case '?': Question++; break;
            case '-': Hyphen++; break;
            case "'": Apostrophe++; break;
            case '"': DoubleQuotes++; break;
            case '_': Underscore++; break;
            case '.': Period++; break;
        }
    }

    // Display the counts of each punctuation mark
    document.getElementById("exclaimation").innerHTML =  "!> " + Exclaimation;
    document.getElementById("colon").innerHTML =  ":> " + Colon;
    document.getElementById("semicolon").innerHTML =  ";> " + Semicolon;
    document.getElementById("comma").innerHTML =  ",> " + Comma;
    document.getElementById("question").innerHTML = "?> " + Question;
    document.getElementById("hyphen").innerHTML =  "-> " + Hyphen;
    document.getElementById("apostrophe").innerHTML =  "'> " + Apostrophe;
    document.getElementById("doublequotes").innerHTML = '"> ' + DoubleQuotes;
    document.getElementById("underscore").innerHTML =  "_> " + Underscore;
    document.getElementById("period").innerHTML = ".> " + Period;
}

function CountCommonWords(){
     // Count the occurrences of common words in the text
    var words = document.getElementById("w").value.toLowerCase();;
    var The = Of = An = And = It = That = This = Is = In = Am = Are = I = My = We = 0;
    var words = words.split(' ');

    for (var i = 0; i < words.length; i++){
        if (words[i] == 'the') {
            The++;
        } 

        else if (words[i] == 'of') {
            Of++;
        } 
        
        else if (words[i] == 'an') {
            An++;
        } 
        
        else if (words[i] == 'and') {
            And++;
        } 
        
        else if (words[i] == 'it') {
            It++;
        } 
        
        else if (words[i] == 'that') {
            That++;
        } 
        
        else if (words[i] == 'this') {
            This++;
        } 
        
        else if (words[i] == 'is') {
            Is++;
        } 
        
        else if (words[i] == 'in') {
            In++;
        } 
        
        else if (words[i] == 'am') {
            Am++;
        } 
        
        else if (words[i] == 'are') {
            Are++;
        }

        else if (words[i] == 'i') {
            I++;
        } 
        
        else if (words[i] == 'my') {
            My++;
        } 
        
        else if (words[i] == 'we') {
            We++;
        }
    }

    // Display the counts of each common word
    document.getElementById("the").innerHTML =  "The: " + The;
    document.getElementById("of").innerHTML =  "Of: " + Of;
    document.getElementById("an").innerHTML =  "An: " + An;
    document.getElementById("and").innerHTML =  "And: " + And;
    document.getElementById("it").innerHTML =  "It: " + It;
    document.getElementById("that").innerHTML =  "That: " + That;
    document.getElementById("this").innerHTML =  "This: " + This;
    document.getElementById("is").innerHTML =  "Is: " + Is;
    document.getElementById("in").innerHTML =  "In: " + In;
    document.getElementById("am").innerHTML =  "Am: " + Am;
    document.getElementById("are").innerHTML =  "Are: " + Are;
    document.getElementById("i").innerHTML =  "I: " + I;
    document.getElementById("my").innerHTML =  "My: " + My;
    document.getElementById("we").innerHTML =  "We: " + We;
}

function CountSearchWord(){
    // Count the occurrences of a specific word in the text
    var SearchWord = document.getElementById("search").value.toLowerCase();
    var words = document.getElementById("w").value.toLowerCase();;
    var Word = 0;
    var words = words.split(' ');

    for (var i = 0; i < words.length; i++){
         // If more than one word is entered, display an error message
        if (SearchWord.split(' ').length > 1){ 
            document.getElementById("instruction").innerHTML = "Please enter only 1 word: ";
            document.getElementById("CountSearch").innerHTML = "Error!";
            break;
        }

        else{
            if (SearchWord === words[i]){
                Word++;
            }
        }
    }

    // Display the count of the searched word
    if (SearchWord.split(' ').length > 1){
        document.getElementById("CountSearch").innerHTML = "Error!";
    }

    else{
        document.getElementById("CountSearch").innerHTML =  SearchWord + ": " + Word;
    }
}