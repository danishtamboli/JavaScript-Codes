//Implement a function to check if two strings are anagrams.


function isAnagram(str1,str2){
    str1=str1.replace(/\s/g,"").toLowerCase();
    str2=str2.replace(/\s/g,"").toLowerCase();
    
    if(str1.length !== str2.length){
        return false;
    }
    else{
        return str1.split("").sort().join("") === str2.split("").sort().join("");
    }
}
console.log(isAnagram("hello","world"));
console.log(isAnagram("silent","listen"));

