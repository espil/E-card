var vid = document.getElementById("myframe");
var star = document.getElementById("star");
var angel = document.getElementById("angel");
var buddah = document.getElementById("buddah");
var rudolf = document.getElementById("rudolf");
var bear = document.getElementById("bear");
var axe = document.getElementById("axe");
var child = document.getElementById("children");
var apple = document.getElementById("apple");
var fact = document.getElementById("facts");


star.addEventListener("click",function(){
  myframe.src = "https://www.youtube.com/embed/zl2HVhwqnMs";
  fact.innerHTML = "2. Birthdate of Jesus Christ";
});

angel.addEventListener("click",function(){
  myframe.src = "https://www.youtube.com/embed/CFB79ru3tv4";
  fact.innerHTML = "3. The word Christ from Jesus Chris and Christmas is pronounced differently";
});

buddah.addEventListener("click",function(){
  myframe.src = "https://www.youtube.com/embed/OppiZiOzq5U";
  fact.innerHTML = "4. Numerous Buddihist countries celebrate Christmas!";
});

rudolf.addEventListener("click",function(){
  myframe.src = "https://www.youtube.com/embed/j11rwc6Sf4o";
  fact.innerHTML = "5. Rumors suggest Rudolf's nose is red due to excessive alcohol consumption.";
});

bear.addEventListener("click",function(){
  myframe.src = "https://www.youtube.com/embed/p9FfAZWZUxM";
  fact.innerHTML = "6. Coca Cola came out with the Red Clothing for Santa Claus in 1930s.";
});

axe.addEventListener("click",function(){
  myframe.src = "https://www.youtube.com/embed/gHMAJimNDCY";
  fact.innerHTML = "7. Christmas trees spark hundreds of fires, an average of 17 deaths, and $13 million in property damage annually.";
});

apple.addEventListener("click",function(){
  myframe.src = "https://www.youtube.com/embed/zm1iWRxHZgA";
  fact.innerHTML = "8. Birthday of Isaac Newton was also Dec.25th.";
});

children.addEventListener("click",function(){
  myframe.src = "https://www.youtube.com/embed/hAiECJf5Ouo";
  fact.innerHTML = "10. Santa is real, they are your parents. ;)";
  alert("9. The Sanctus is a hymn in Christian liturgy, it may also be called epinikios hymnos.:)")
});

var button = document.getElementById("button");

button.addEventListener("click",function(){
  fact.innerHTML = "1. Santa's zipcode is H0H-0H0, and yes, he answers back."
});
