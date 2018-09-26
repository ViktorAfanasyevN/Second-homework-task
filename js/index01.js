function testUserText ( userText ) {
//        return escape(userText) // First option: It's used native escape method
          return String(userText) //Second option: It's just used replace method
                  .replace(/</g,"&lt;")
                  .replace((/>/g,"&gt;"))
                  .replace((/&/g,"&amp"))
                  .replace((/"/g,"&#x27"))
                  .replace((/\//g,"&#x2F"))
          
return userText
          
}
function insertUserText ( userText ) {
      var x = document.createElement ( 'div' )
      x.innerHTML = testUserText ( userText )
      document.body.appendChild ( x )
}

insertUserText (`<svg/onload='document.write("Looser");
                  document.body.style.backgroundColor="black";
                  document.body.style.color="red";
                  document.body.style.fontSize="50px";
                  document.body.style.fontWeight="bold";
                  document.body.style.textAlign="center";
                  document.body.style.paddingTop="45%";'>`)
