//Save Chocolate Recipe Function
function saveForLater1(){
    alert("You have Saved the Chocolate recipe");
    
    let newItem = document.createElement('li');
    newItem.innerHTML = `
    <h3>Chocolate Recipe</h3>
    <br>
    Ingredients and Amounts:
    <br> 
    White Sugar 2 cups, 
    All-purpose flour - 1 ¾ cups, 
    Unsweetened cocoa powder - ¾ cup, 
    Baking powder - 1 ½ teaspoons, 
    Baking soda - 1 ½ teaspoons, 
    Salt - 1 teaspoon, 
    Eggs - 2, 
    Milk - 1 cup, 
    Vegetable Oil - ½ cup, 
    Vanilla extract - 2 teaspoon, 
    Boiling water - 1 cups                            
    <br>
    <br>
    STEPS:                            
    Stir or whisk together sugar, flour, cocoa, baking powder, baking soda, and salt until evenly combined.
    <br>
    Add the eggs, milk, oil, and vanilla. Mix on medium speed for about two minutes. Stir in boiling water. Don't worry if the batter seems a little thin, as reviewers say that's perfectly normal.
    <br>
    Pour the cake batter into prepared pans. Bake for about half an hour, until a toothpick comes out clean when inserted in the middle. Let cool and top with your favorite frosting.
    <br>
    <img src="../Images/Chocolate.jpg">
    <br>
   
    `;
     
    let newItemStore = JSON.stringify(newItem.innerHTML);
    localStorage.setItem("Chocolate-recipe", newItemStore);
     
     
}

//Save Vanilla Recipe Function
function saveForLater2(){
    alert("you have Saved the Vanilla recipe");
    
     let newItem = document.createElement('li');
     newItem.innerHTML = `
    <h3>Vanilla Recipe</h3>
    <br>
    Ingredients and Amounts:
    <br> 
    White Sugar 1 cups, 
    All-purpose flour - 2 ⅔ cups, 
    cooking spray - single use, 
    Baking powder - 1 tablespoon, 
    Salt - 2 pinches, 
    Eggs - 3, 
    Milk - ¾ cup, 
    Vegetable Oil - ¾ cup, 
    Vanilla extract - 1 tablespoon, 
    <br>
    <br>
    STEPS:                            
    Preheat the oven to 350 degrees F (175 degrees C). Grease a 9-inch cake tin with cooking spray and line with parchment paper.
    <br>
    Mix flour, sugar, baking powder, vanilla extract, and salt together in a large bowl. Add eggs, milk, and vegetable oil; mix by hand or beat with an electric mixer on low speed until smooth. Add more flour if batter is too runny. Pour into the prepared pan.
    <br>
    Bake in the preheated oven until a toothpick inserted into the center of the cake comes out clean, about 1 hour. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert cake carefully onto a cooling rack. Let cool completely.
    <br>
    <img src="../Images/Vanilla.jpg">
    <br>
    `;
     
     let newItemStore = JSON.stringify(newItem.innerHTML);
     localStorage.setItem("Vanilla-recipe", newItemStore);
     
}

//Show Recipes Function
function showRecipe(){
    alert("You have Shown the saved recipes");

    let newItemStored1 = JSON.parse(localStorage.getItem("Chocolate-recipe"));
    let newItemStored2 = JSON.parse(localStorage.getItem("Vanilla-recipe"));

    const htmlList = document.querySelector('.Output');
    let newList1 = document.createElement("li");
    let newList2 = document.createElement("li");

    newList1.innerHTML = newItemStored1;
    newList2.innerHTML = newItemStored2;
   
    htmlList.appendChild(newList1);
    htmlList.appendChild(newList2);
}

$(document).ready(function(){
    
   
    // Save Chocolate recipe
    $("#recipeSave1").click(function(){
        saveForLater1();
    });

     // Save Vanilla recipe
    $("#recipeSave2").click(function(){
    saveForLater2();
    })
    //Show Recipes
    $("#recipe-Show").click(function(){
        showRecipe();
    });
   


    //A function which contains hiding/showing
    $("#First-hide").click(function(){
        $("#First-hide").hide();
        alert("image hidden")   
    })
    $("#2nd-hide").click(function(){
        $("#2nd-hide").hide();
        alert("image hidden")   
    })
    $("#3rd-hide").click(function(){
        $("#3rd-hide").hide();
        alert("image hidden")   
    })
    $("#4th-hide").click(function(){
        $("#4th-hide").hide();
        alert("image hidden")   
    })
    $("#show-img").click(function(){
        $("#First-hide").show();  
        $("#2nd-hide").show(); 
        $("#3rd-hide").show(); 
        $("#4th-hide").show(); 
        alert("image shown") 
    })
    
    // drop-down menu
    $(".card").hover(function(){
        
        if ($(".card-body").css("display") === "block" ){
            $(".card-body").slideUp();//animation effects
        }
        else {
            $(".card-body").slideDown();//animation effects    
        }
    })
    //chained animation effects 
    $("#submitBtn").click(function(){
        alert("you have clicked quote Change");
        $("#quote").fadeOut(100).css("backgroundColor", "white").css("border", "3px solid red").fadeIn(500);  
    })


});

